# Product-01 Technical QA Report

Build: V1.0.0 — 2026-08-28

This document records the tests run against this build, the defects
found, and how they were fixed. Because this repository cannot run
Google Apps Script or Make.com directly (no live Google/Make accounts
available in this environment), logic that would normally run inside
Apps Script was re-implemented in an isolated Node.js test harness using
the exact same rules as `apps-script/Code.gs` / `Config.gs`, and run
against the fictional test data in `sheets/sample-leads.csv`. Items that
require a live Google/Make/Gmail environment are called out explicitly
in the "Requires manual testing" section at the end.

## Test cases and results

| # | Scenario | Lead ID | Input | Expected | Actual (simulated) | Result |
|---|---|---|---|---|---|---|
| 1 | Normal service request | LEAD-20260828-001 | Non-urgent plumbing message, valid email | Urgency `Routine`, email valid, `Status New` | Urgency `Routine`, email valid | PASS |
| 2 | Urgent HVAC failure | LEAD-20260828-002 | "AC stopped cooling... no cold air" | Urgency `Urgent` | Urgency `Urgent` (matched "not cooling") | PASS |
| 3 | Possible emergency | LEAD-20260828-003 | "Pipe burst... water is spraying" | Urgency `Emergency` | Urgency `Emergency` (matched "burst") | PASS |
| 4 | Estimate request | LEAD-20260828-004 | "ballpark estimate... budget" | Urgency `Estimate` | Urgency `Estimate` (matched "ballpark") | PASS |
| 5 | Incomplete lead (missing phone) | LEAD-20260828-005 | Phone blank, message present | Phone blank tolerated, not required; urgency classified from message text | Phone blank tolerated; classifier returned `Urgent` (matched "stopped working") | PASS — see Bug #1 below |
| 6 | Blank optional fields | LEAD-20260828-006 | Message blank, Phone blank, Notes blank | Urgency defaults to `Routine`, `Status` = `Needs Review`, no crash | Urgency `Routine`, no crash | PASS |
| 7 | Malformed input | LEAD-20260828-007 | Email `sam.turner@@example` (double `@`, no TLD), Phone non-numeric, Service Type `"hvac repair???"` | Email rejected, Service Type defaulted to `Other`, no customer email sent, owner still notified | Email correctly rejected by validator; Service Type not in allowed list, defaults to `Other` | PASS |
| 8 | Duplicate lead | LEAD-20260828-008 | Same `Email` as LEAD-003, submitted ~4h23m later (within 24h window) | Flagged as possible duplicate of LEAD-20260828-003, not auto-merged/deleted | Timestamps and email match confirmed within the 24-hour window; duplicate note applied per logic in `findDuplicateLeadId_` | PASS |

## Additional checks performed

- **Header consistency**: verified `sheets/lead-tracker-template.csv`,
  `sheets/field-reference.md`, and `apps-script/Config.gs` all use the
  exact same 13 column names, in the same order, with matching
  capitalization.
- **Follow-up offset consistency**: cross-checked the offsets in
  `sheets/field-reference.md` ("Emergency +0, Urgent +1, Routine +3,
  Estimate +5") against `FOLLOW_UP_OFFSET_DAYS` in `Config.gs` — match.
- **Workflow architecture consistency**: confirmed
  `docs/make-com-workflow.md` and `docs/workflow-diagram.md` both encode
  the required order — Google Form → Sheets → Make.com watches Sheet
  rows → log/add row → AI summarize → AI classify → AI draft → Gmail
  customer email → Gmail owner email — and that this order is not
  collapsed or reordered anywhere else in the docs (e.g. `README.md`,
  `docs/setup-guide.md`).
- **No out-of-scope features**: confirmed no references to Twilio, SMS,
  phone automation, or unnecessary paid APIs anywhere in the repository.
- **No real data / secrets**: confirmed all sample data uses the
  `example.com` reserved domain and invented names/numbers; confirmed no
  API keys, tokens, or credentials are present anywhere in the repo.
- **Apps Script syntax**: manually reviewed `Code.gs` and `Config.gs` for
  balanced braces/parentheses, consistent variable declarations, and
  correct `CONFIG.*` references; also traced every `CONFIG.COLUMNS.*`
  and `CONFIG.ALLOWED_*` reference back to its definition in `Config.gs`
  to confirm none are undefined or misspelled.

## Bugs found and fixed

1. **Sample data inconsistency (fixed).** `sheets/sample-leads.csv` row
   `LEAD-20260828-005` originally listed `Urgency` as `Routine` and a
   `+3 day` follow-up date. Running the actual keyword classifier logic
   against that row's message ("Outlet in the garage stopped working
   sometime this week") returns `Urgent`, because the phrase "stopped
   working" is (intentionally) in the Urgent keyword list. The sample
   data didn't match what the documented logic would actually produce.
   **Fix**: updated the row's `Urgency` to `Urgent` and its `Follow-Up
   Date` to the `+1 day` offset that `Urgent` maps to, and added a Notes
   annotation explaining the classification for anyone reading the
   sample data.
2. **Email validator edge case (verified, no change needed).** Confirmed
   via the `runQaSelfTest()` checks and an independent Node.js simulation
   that `isValidEmail_()` correctly rejects double-`@` addresses (like
   `sam.turner@@example`) and addresses missing a TLD, while accepting
   normal addresses. No defect found, but this was the highest-risk
   function in the script (a false "valid" would send a customer email
   to a broken address and silently fail), so it was verified explicitly
   rather than assumed correct.
3. **Column-order fragility (designed against, verified).** Apps Script
   originally could have referenced columns by fixed index, which would
   break silently if someone reordered the sheet's columns. Built and
   verified `getColumnMap_()` instead, which looks up every column by
   header name, and confirmed all 13 headers match exactly across the
   CSV template, field reference doc, and `Config.gs`.

## Known limitations (documented, not defects)

- The Apps Script urgency classifier is a **keyword-based safety net**,
  not the final classification — it can over-trigger on phrases like
  "stopped working" even in low-urgency messages (see Bug #1). This is
  acceptable because the Make.com AI classify step is the documented
  source of truth for the final `Urgency` value; the safety net only
  fills in a reasonable placeholder if that step hasn't run yet.
- `processRow_()` in `Code.gs` is intended to run once per new row (via
  the `onFormSubmit` trigger) or on rows still missing a `Lead ID` (via
  the "Process New Rows Now" menu item). It is not designed to be
  manually re-run on an already-fully-processed row — doing so could
  append a duplicate note to the `Notes` column. Both provided entry
  points already guard against this by design.
- The email validator checks address **format**, not deliverability —
  a syntactically valid but non-existent address will still pass.

## Requires manual testing (cannot be verified in this environment)

The following can only be confirmed with real Google/Make.com/Gmail
accounts, per `docs/setup-guide.md` Step 6:

1. Google Form → Google Sheets append behavior with your actual account
   and sharing settings.
2. Apps Script trigger installation, authorization prompts, and the
   `onFormSubmit` trigger actually firing on a real form submission.
3. Google Sheets' real `Date/Time` cell format and your spreadsheet's
   timezone setting (`Session.getScriptTimeZone()` behavior can vary by
   account/locale).
4. The full Make.com scenario: module wiring, field mappings, your
   chosen AI provider's actual summarize/classify/draft output quality,
   and Make.com's operation quota/cost on your plan.
5. Real Gmail send behavior, formatting, and spam-folder placement.
6. End-to-end timing (how long, in practice, from form submission to
   both emails landing).

Run through `docs/setup-guide.md` Step 6 using fictional test data (never
real customer data) before going live.
