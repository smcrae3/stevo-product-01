# Make.com Workflow — Scenario Architecture

This document describes the **exact** automation architecture used by the
Trades Lead Response System. Build the Make.com scenario as this sequence
of modules — do not substitute a different structure (e.g. do not have
Make.com watch the Google Form directly; it watches the **Sheet**, which
the Form writes to).

## Architecture

```
1. Google Form submission
2. Responses land in Google Sheets (the "Leads" tab)
3. Make.com watches new Sheet rows       (trigger)
4. Log / add row                        (module)
5. AI: summarize the lead                (module)
6. AI: classify urgency                  (module)
7. AI: draft response                    (module)
8. Gmail: send customer email            (module)
9. Gmail: send owner email               (module)
```

This is a **linear scenario** — each step's output feeds the next. There
is no branching required for V1 beyond one router (see step 6a below) to
skip the customer email when the address is invalid.

## Module-by-module

### 1–2. Google Form → Google Sheets
Handled entirely by Google, outside Make.com. The Form's built-in "Send to
Spreadsheet" behavior writes each submission as a new row in the `Leads`
sheet. This is the same sheet built from
[`../sheets/lead-tracker-template.csv`](../sheets/lead-tracker-template.csv).

Make sure the Form's questions map onto these sheet columns, in this
order, so the header row lines up with what the Form appends:
`Date/Time` (auto), `Customer Name`, `Email`, `Phone`, `Service Type`,
`Message`. The remaining columns (`Lead ID`, `Urgency`, `Status`, etc.)
are filled in later by Apps Script and this Make.com scenario — leave
them out of the Form.

### 3. Trigger — Watch New Sheet Rows
Module: **Google Sheets → Watch New Rows**
- Spreadsheet: your Lead Tracker
- Sheet: `Leads`
- Table contains headers: Yes
- Limit: 1 (process one row per scenario run — keeps AI calls simple to
  reason about and keeps the automation cheap to run)

### 4. Log / Add Row
Module: **Google Sheets → Update a Row** (or a simple **Tools → Set
Variable** step if you don't need to log elsewhere)
- Purpose: capture the row's spreadsheet row number and current column
  values as scenario variables so later modules can reference them
  cleanly (`{{4.RowNumber}}`, `{{4.Email}}`, etc.), and to write the
  `Lead ID` back if the Apps Script trigger hasn't already filled it in.
- If you installed the Apps Script from [`../apps-script/`](../apps-script/)
  with the `onFormSubmit` trigger, the `Lead ID`, a safety-net `Urgency`,
  a starting `Status`, and a `Follow-Up Date` will usually already be
  present by the time Make.com sees the row. This module should not
  overwrite a non-blank value — only fill columns that are still empty.

### 5. AI — Summarize the Lead
Module: **[Your AI provider] → Create a Completion** (e.g. an Anthropic,
OpenAI, or similar Make.com AI app/module — any provider works, this is
intentionally provider-agnostic for V1)
- Input: `{{4.Message}}`, `{{4.ServiceType}}`, `{{4.CustomerName}}`
- Prompt (example):
  > Summarize this home-service lead in 1-2 short sentences for a busy
  > business owner. Service type: {{ServiceType}}. Customer message:
  > "{{Message}}". Do not invent details not present in the message.
- Output: a short plain-text summary, stored as a scenario variable
  (e.g. `{{5.summary}}`).

### 6. AI — Classify Urgency
Module: **[Your AI provider] → Create a Completion**
- Input: `{{4.Message}}`, `{{5.summary}}`
- Prompt (example):
  > Classify the urgency of this home-service lead as exactly one of:
  > Emergency, Urgent, Routine, Estimate. Emergency = immediate safety or
  > major property risk (flooding, gas smell, sparking/fire, no heat in
  > freezing weather). Urgent = broken/non-functioning system causing
  > real inconvenience but not immediate danger. Estimate = customer is
  > asking about pricing or planning future work. Routine = everything
  > else. Message: "{{Message}}". Reply with only one word.
- Output: one of `Emergency` / `Urgent` / `Routine` / `Estimate`, stored
  as `{{6.urgency}}`.
- **6a. Router**: if `{{6.urgency}}` is `Emergency`, you may optionally
  add a Slack/SMS-free extra path here later — for V1, all four urgency
  levels flow through the same downstream steps, just with different
  email templates (see step 8).
- **Validation**: add a filter after this module — if the AI output is
  not exactly one of the four allowed values, fall back to `Routine` and
  set `Status` to `Needs Review` rather than writing a malformed value to
  the sheet. This mirrors the safety-net behavior in the Apps Script.

### 7. AI — Draft Response
Module: **[Your AI provider] → Create a Completion**
- Input: `{{4.CustomerName}}`, `{{6.urgency}}`, `{{5.summary}}`, the
  matching template from [`../templates/customer-emails/`](../templates/customer-emails/)
- Prompt: use the appropriate template file for `{{6.urgency}}` as the
  base and have the AI fill in the bracketed placeholders using the
  lead's details — do not have the AI write free-form marketing copy;
  keep it constrained to the template's tone and structure.
- Output: finished email body text, stored as `{{7.draft}}`.

### 8. Gmail — Send Customer Email
Module: **Gmail → Send an Email**
- To: `{{4.Email}}`
- Condition (filter before this module): only run if `{{4.Email}}` passes
  a basic email-format check. If it fails, skip this module — the owner
  notification (step 9) still fires, and a human calls the customer
  instead. This mirrors the Apps Script's email validation.
- Subject: see [`../templates/customer-emails/`](../templates/customer-emails/)
  for the subject line per urgency level.
- Body: `{{7.draft}}`
- After sending: update the sheet row's `Customer Response` column to
  `Sent` (**Google Sheets → Update a Row**).

### 9. Gmail — Send Owner Email
Module: **Gmail → Send an Email**
- To: the business owner/office inbox (hardcoded in the scenario or a
  Make.com environment variable — never commit a real inbox address to
  this repository)
- Subject/body: see [`../templates/owner-notifications/`](../templates/owner-notifications/)
- Include: `{{4.CustomerName}}`, `{{4.Phone}}`, `{{4.Email}}`,
  `{{4.ServiceType}}`, `{{6.urgency}}`, `{{5.summary}}`, a link back to
  the sheet row.
- After sending: update the sheet row's `Owner Notification` column to
  `Sent`, and set `Status` to `Owner Notified` if it's still `New`.

## Error handling

- Add a **scenario error handler** (right-click the final module →
  **Add error handler**, or use a dedicated error route) that, on any
  module failure, updates the sheet row's `Status` to `Needs Review` and
  appends a short note to the `Notes` column (e.g. "Make.com scenario
  error - see Make.com execution log"). This ensures a failed automation
  run never silently leaves a lead unprocessed and untracked.
- Set the scenario to **run on a schedule fallback** (e.g. every 15
  minutes) in addition to the instant trigger, so a lead is never missed
  if the instant trigger has a transient failure. This is optional but
  recommended.

## Cost/complexity notes

- Every scenario run makes 3 AI calls (summarize, classify, draft). For
  low lead volumes (a handful per day) this is inexpensive on any major
  AI provider's pay-as-you-go pricing. Combine steps 5–7 into a single AI
  call with a structured (JSON) response if you want to reduce cost and
  latency — this is a valid V1.1 optimization, not required for V1.
- Do not add SMS, phone automation, or any paid API beyond the AI
  provider and Gmail (which is free with a standard Google account).
