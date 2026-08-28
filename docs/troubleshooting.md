# Troubleshooting Guide

## Google Form / Sheets

**New form submissions aren't appearing in the Sheet.**
- Confirm the Form is linked to the correct spreadsheet (Form →
  Responses tab → green Sheets icon).
- Confirm you're looking at the tab the Form actually writes to — Google
  sometimes creates a new "Form Responses 1" tab instead of writing to
  your existing `Leads` tab. Either rename that tab to `Leads`, move its
  data, or update `SHEET_NAME` in `apps-script/Config.gs` to match.

**Lead ID isn't being filled in automatically.**
- Confirm the Apps Script `onFormSubmit` trigger is installed (see
  `apps-script/README.md` → "Wiring up the automatic trigger"). Without
  it, rows only get processed when you run **Trades Lead Tools → Process
  New Rows Now** manually.
- Check **Extensions → Apps Script → Executions** (left sidebar) for
  error logs if the trigger exists but isn't working.

**Duplicate leads aren't being flagged.**
- Duplicate detection only compares rows with a matching `Email` or
  `Phone` **and** a `Date/Time` within the configured window (default 24
  hours — see `DUPLICATE_WINDOW_HOURS` in `apps-script/Config.gs`).
  Leads further apart than that are treated as separate, intentionally.
- Blank `Email` and blank `Phone` never match each other or count as
  duplicates.

**Column headers got reordered and now everything looks wrong.**
- The Apps Script looks up columns by header name, not position — as
  long as the header text in row 1 still matches `apps-script/Config.gs`
  exactly (including capitalization), reordering columns is safe.
- The Make.com scenario, however, references columns by name in its
  field mappings inside each module — if you rename a header, you must
  update the mapping in every affected Make.com module too.

## Apps Script

**"Run QA Self-Test" shows failures.**
- This means the classification/validation logic itself is broken —
  likely from an edit to `Config.gs` or `Code.gs`. Check the Logger
  output (**View → Logs** in the Apps Script editor) for which specific
  check failed, and compare against the expected behavior described in
  the code comments.

**Script throws "Cannot read property of undefined" or similar.**
- Almost always means a header name in the Sheet doesn't exactly match
  `CONFIG.COLUMNS` in `Config.gs` (extra space, different capitalization,
  a typo). Compare the Sheet's row 1 to `Config.gs` character-by-character.

**I get an authorization prompt every time I open the Sheet.**
- Normal the first time you run the script or add the trigger — click
  through Google's "unverified app" warning (this is expected for a
  script you wrote/installed yourself) and grant access. You should only
  need to do this once per Google account.

## Make.com

**Scenario runs but no customer email is sent.**
- Check whether `Email` for that row failed the validation filter before
  the Gmail "send customer email" module — this is expected behavior for
  malformed/blank addresses (see `sheets/field-reference.md`). The owner
  notification should still have been sent so a human can call instead.
- Check the Make.com execution log for the specific module that didn't
  run or returned an error.

**AI classify step returns something other than Emergency / Urgent /
Routine / Estimate.**
- Add (or check) the fallback filter described in
  `docs/make-com-workflow.md` step 6 — any AI output outside the four
  allowed values should be caught and defaulted to `Routine` with
  `Status` set to `Needs Review`, rather than written to the sheet as-is.
- If this happens often, tighten the classification prompt (e.g. "Reply
  with only one word, exactly one of: Emergency, Urgent, Routine,
  Estimate.").

**Scenario stops running / shows as errored in Make.com.**
- Check Make.com's execution history for the specific module and error
  message.
- Common causes: a connected account (Google/Gmail/AI provider) lost
  authorization and needs to be reconnected in Make.com's Connections
  settings; a monthly operations quota was hit on a free Make.com plan.

**Emails are landing in spam.**
- Make sure the Gmail account sending them is a real, actively used
  Google account (not brand new) and that you're not sending an
  unusually high volume in a short window. Consider a proper business
  Gmail/Workspace account for production use.

## General

**A lead looks stuck in `Needs Review` and I don't know why.**
- Check the `Notes` column — both the Apps Script and the Make.com
  scenario are designed to write a specific, human-readable reason
  whenever they flag a lead this way (invalid email, unrecognized
  service type, possible duplicate, blank message, AI classification
  failure).

**I changed a template and now emails look wrong.**
- Templates in `templates/` are documentation/reference text, not live
  code — updating the `.md` file doesn't change anything until you also
  update the corresponding prompt/body text inside the Make.com module
  that uses it.
