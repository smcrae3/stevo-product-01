# 04 — QA / WORKFLOW TEST PACK

> **FICTIONAL DEMONSTRATION — NOT CLIENT WORK**
> The workflow under test is invented for this demonstration: a website
> contact form feeding a Google Sheet, an AI-generated summary, automated
> urgency classification, a customer acknowledgement email, an owner
> notification, and a lead log entry. No real client's build, code, or data
> is represented. Field names, error strings, and system behavior are
> illustrative.

---

## SYSTEM UNDER TEST — WORKFLOW OVERVIEW

```
Website Form → Google Sheet (raw intake row)
             → AI Summary (condenses message into 1-2 sentences)
             → Urgency Classification (Critical / Urgent / Routine)
             → Customer Acknowledgement Email (auto-sent)
             → Owner Notification (auto-sent to assigned owner)
             → Lead Log entry (final record with all fields populated)
```

## TEST PACK STRUCTURE

Each test case uses this format:

| Field | Meaning |
|---|---|
| **Test ID** | Unique identifier, `TC-###` |
| **Module / Feature** | Which part of the pipeline is under test |
| **Precondition** | State the system must be in before the test runs |
| **Input** | Exact data submitted |
| **Expected Result** | What the workflow should do |
| **Actual Result** | What it did *(demonstration: filled in as if executed)* |
| **Pass/Fail** | Outcome |
| **Severity** | If Fail: Critical / High / Medium / Low |
| **Evidence** | What screenshot or log would substantiate this |
| **Retest Status** | Not Retested / Retested-Pass / Retested-Fail |
| **Notes** | Anything a reviewer needs that doesn't fit elsewhere |

---

## TEST CASES (38)

### A. NORMAL / HAPPY PATH (1-3)

**TC-001**
Module: End-to-end · Precondition: Form live, all downstream services
connected · Input: Valid name, valid email, valid phone, routine message
("What are your hours?") · Expected: Row created, AI summary generated,
classified Routine, ack email sent to customer, owner notified, log entry
complete · Actual: All steps completed within 90 seconds · **PASS** ·
Severity: — · Evidence: Sheet row + both sent emails · Retest: N/A ·
Notes: Baseline case — every other test compares against this.

**TC-002**
Module: End-to-end · Precondition: Same · Input: Valid submission with an
urgent keyword ("need this resolved before Friday") · Expected: Classified
Urgent, ack email references faster turnaround · Actual: Classified
correctly, ack email sent using generic (Routine) template text instead of
Urgent-specific wording · **FAIL** · Severity: **Medium** · Evidence: Sent
email screenshot showing generic turnaround language · Retest: Not
Retested · Notes: Classification logic is correct; the email template
selection isn't reading the classification output.

**TC-003**
Module: End-to-end · Precondition: Same · Input: Valid submission with a
critical keyword ("no service, safety issue") · Expected: Classified
Critical, owner AND on-call notified immediately · Actual: Classified
Critical correctly; owner notified; **on-call notification did not fire** ·
**FAIL** · Severity: **Critical** · Evidence: Log entry shows Critical flag;
no on-call notification record exists · Retest: Not Retested · Notes: This
is the most severe finding in the pack — see Bug Report BUG-001.

### B. MISSING / INVALID FIELDS (4-9)

**TC-004** Module: Form validation · Input: Name field left blank, all else
valid · Expected: Form blocks submission or flags missing name before
downstream processing · Actual: Submission accepted with blank name; row
created as "‑" · **FAIL** · Severity: **High** · Evidence: Sheet row with
blank name field · Retest: Not Retested · Notes: Downstream, an
acknowledgement email addressed "Dear ," was sent — see BUG-002.

**TC-005** Module: Form validation · Input: Email field blank, phone
provided · Expected: System should fall back to phone contact or flag for
manual review, not attempt to send an email · Actual: System attempted to
send acknowledgement email to a blank address; email step failed silently,
no fallback triggered · **FAIL** · Severity: **High** · Evidence: Email
service error log; no email delivered, no alternate notification sent ·
Retest: Not Retested

**TC-006** Module: Form validation · Input: Email field contains
`not-an-email` (no @, no domain) · Expected: Rejected or flagged before
send attempt · Actual: Row created; email send failed with a bounce, no
retry or flag for manual follow-up · **FAIL** · Severity: **High** ·
Evidence: Bounce notification, unmarked failed row

**TC-007** Module: Form validation · Input: Phone field blank, email
provided · Expected: Process continues normally using email as sole contact
· Actual: Behaved correctly · **PASS**

**TC-008** Module: AI Summary · Input: Message body of ~1,200 words (a long
customer message) · Expected: Summary condensed to 1-2 sentences, key detail
retained · Actual: Summary generated but omitted the specific date the
customer needed a response by — the single most important detail in the
message · **FAIL** · Severity: **Medium** · Evidence: Full message vs.
generated summary side-by-side

**TC-009** Module: Form validation · Input: Message field containing special
characters (`<script>`, quotation marks, emoji, non-Latin characters) ·
Expected: Characters stored safely and displayed correctly downstream, no
formatting or security issue · Actual: Sheet cell and both emails rendered
correctly · **PASS** · Notes: Worth re-testing periodically — this is a
common regression point when templates change.

### C. DUPLICATES & TIMING (10-13)

**TC-010** Module: Duplicate detection · Precondition: Customer already has
an open record from 2 hours ago on the same topic · Input: Same customer
resubmits with near-identical message · Expected: Flagged as duplicate,
added as a note to the existing record, no new row created · Actual: New
row created; no duplicate check performed · **FAIL** · Severity: **Medium**
· Evidence: Two separate log rows for one customer, same day, same subject
· Retest: Not Retested · Notes: No duplicate-detection logic currently
exists in the build — see BUG-003.

**TC-011** Module: Duplicate detection · Input: Same customer, same topic,
but 8 days apart · Expected: Treated as a new inquiry, not flagged as
duplicate · Actual: Correctly treated as new (by default, since no
duplicate logic exists at all — see TC-010) · **PASS** · Notes: Passing for
the wrong reason; will need re-verification once duplicate logic is added.

**TC-012** Module: Timestamp formatting · Input: Submission at 11:58 PM
local time · Expected: Timestamp and any date-based logic (like daily
digest grouping) reflects the correct calendar day · Actual: Row timestamp
correct; **daily digest email grouped it into the next day's digest** due to
a timezone mismatch between the form's timestamp and the digest script's
timezone setting · **FAIL** · Severity: **Medium** · Evidence: Row
timestamp vs. digest email date

**TC-013** Module: Retry behavior · Precondition: Simulate a temporary
network failure during the Google Sheet write step · Input: Valid
submission during simulated outage · Expected: System retries the write
after a short delay, or queues it, rather than losing the submission ·
Actual: **No retry logic — submission was lost entirely** with no error
surfaced anywhere · **FAIL** · Severity: **Critical** · Evidence: Form
confirmation shown to user; no corresponding row in Sheet · Notes: See
BUG-004 — this is the second most severe finding.

### D. CLASSIFICATION EDGE CASES (14-16)

**TC-014** Module: Urgency classification · Input: Message with no clear
urgency signal ("just wondering about your services") · Expected: Default
to Routine · Actual: Correctly classified Routine · **PASS**

**TC-015** Module: Urgency classification · Input: Message containing both
a routine question AND a mention of a deadline ("also, is there any way to
get this done before Friday?") · Expected: Classified per the "round up on
ambiguity" rule — Urgent, not Routine · Actual: Classified Routine — the
classifier weighted the majority of the message content over the deadline
mention · **FAIL** · Severity: **Medium** · Evidence: Message text vs.
assigned classification · Notes: This is a logic/tuning issue, not a crash —
worth flagging to the build owner as a policy question, not just a bug.

**TC-016** Module: AI output validity · Precondition: Simulate the AI
summary/classification service returning an empty response · Input: Any
valid submission during simulated AI service failure · Expected: System
falls back to a default classification (e.g., Routine, flagged for manual
review) rather than leaving the field blank · Actual: **Urgency field left
completely blank; record proceeded through the rest of the pipeline
unclassified** · **FAIL** · Severity: **Critical** · Evidence: Log row with
blank Urgency column, unprocessed by any downstream urgency-dependent logic

### E. MALFORMED / UNEXPECTED AI OUTPUT (17-18)

**TC-017** Module: AI output validity · Precondition: Simulate the AI
returning malformed output (e.g., an explanation sentence instead of just a
classification label) · Input: Valid submission during simulated
malformed-output condition · Expected: System detects the output doesn't
match an expected value and falls back safely · Actual: The malformed text
string was written directly into the Urgency column, breaking downstream
filtering/reporting logic · **FAIL** · Severity: **High** · Evidence: Sheet
cell containing a full sentence instead of a classification label

**TC-018** Module: AI Summary · Input: Submission in a language other than
English · Expected: Defined behavior (translate, flag for manual review, or
pass through as-is with a language flag) · Actual: **No defined behavior
exists — summary was generated in English but inaccurately, apparently
guessing at content** · **FAIL** · Severity: **Medium** · Notes: This is a
scope/requirements gap as much as a bug — flag as an open question rather
than assuming the intended behavior.

### F. NOTIFICATION FAILURES (19-23)

**TC-019** Module: Owner notification · Precondition: Assigned owner's email
is stored incorrectly (typo in the routing config) · Input: Valid
submission routed to that owner · Expected: Send failure is detected and
flagged for manual reassignment · Actual: Email failed silently; no
indication anywhere that the owner was never notified · **FAIL** ·
Severity: **Critical** · Evidence: No delivery confirmation; record shows
"Owner Notified: Yes" despite the send failing — **the status flag is set
regardless of actual send success**

**TC-020** Module: Customer acknowledgement · Input: Valid submission where
the acknowledgement email service is rate-limited (simulated) · Expected:
Retry after backoff, or queue for later send · Actual: Email dropped, no
retry, no record of the failure · **FAIL** · Severity: **High**

**TC-021** Module: Email formatting · Input: Any valid submission · Expected:
Acknowledgement email renders correctly in HTML (logo, formatting, links
functional) · Actual: Renders correctly in Gmail and major clients; **renders
as raw HTML tags in one older email client tested** · **FAIL** · Severity:
**Low** · Evidence: Screenshot from the affected client · Notes: Low
severity given how few users this affects, but worth a one-line fix
(plain-text fallback).

**TC-022** Module: Email subject line · Input: Various urgency levels ·
Expected: Subject line reflects urgency (e.g., "[Urgent] We received your
message") · Actual: Subject line identical regardless of urgency level ·
**FAIL** · Severity: **Low** · Notes: Cosmetic but relevant — this is exactly
the kind of detail that makes urgent-vs-routine distinguishable at a glance
in a crowded inbox.

**TC-023** Module: Notification routing · Precondition: Owner field
temporarily unassigned due to a routing table gap · Input: Valid submission
in an unmapped subject area · Expected: Falls back to a default owner (per
SOP: Operations Lead) rather than notifying no one · Actual: **No
notification sent to anyone; record sat with a blank Owner field** ·
**FAIL** · Severity: **Critical**

### G. SHEET / DATA INTEGRITY (24-29)

**TC-024** Module: Sheet write · Input: Valid submission during a simulated
Sheet permission failure (service account access revoked) · Expected: Error
surfaced somewhere visible (log, alert) rather than the submission
disappearing · Actual: Submission lost, no alert generated anywhere ·
**FAIL** · Severity: **Critical**

**TC-025** Module: Sheet structure · Precondition: A column was manually
reordered in the Sheet (simulating a real-world accidental edit) ·
Input: Valid submission after the reorder · Expected: Data still writes to
the correct fields regardless of column position (i.e., the script writes
by header name, not by column index) · Actual: **Script writes by column
index — data landed in the wrong columns entirely** after the reorder ·
**FAIL** · Severity: **High** · Evidence: Sheet screenshot showing phone
number in the Email column · Notes: Architecturally significant — this is a
build pattern issue, not a one-off bug. See BUG-005.

**TC-026** Module: Sheet structure · Precondition: A column was renamed
(e.g., "Phone" → "Phone Number") without updating the script · Input: Valid
submission · Expected: Either the script is resilient to the rename, or a
clear error is thrown · Actual: Script threw an unhandled error and the
entire submission failed silently in the background · **FAIL** · Severity:
**High**

**TC-027** Module: Sheet write · Precondition: A blank row exists in the
middle of the Sheet (from earlier manual editing) · Input: Valid submission
· Expected: New row appends correctly at the true end of data, unaffected
by the blank row · Actual: Behaved correctly, appended after the last
populated row · **PASS**

**TC-028** Module: Duplicate row prevention (system-level, not customer-level)
· Precondition: Simulate the form's script firing twice for one submission
(a known risk with some web-form integrations on a slow network) ·
Input: Single form submission with a simulated double-fire · Expected:
Second fire detected and suppressed, or deduplicated before reaching the
Sheet · Actual: **Two identical rows created** · **FAIL** · Severity:
**Medium** · Evidence: Two rows, identical timestamp within 1 second

**TC-029** Module: Audit trail · Input: A record manually corrected by staff
after an error (e.g., fixing a misclassified urgency) · Expected: The
correction is visible in some form (a notes field, a version history) not
silently overwritten with no trace · Actual: Original value overwritten
with no record of the change or who made it · **FAIL** · Severity: **Medium**
· Notes: Relevant to the case where staff need to demonstrate they caught
and fixed a misclassification.

### H. RECOVERY & REPLAY (30-33)

**TC-030** Module: Partial failure recovery · Precondition: Simulate the
pipeline succeeding through Sheet write but failing before the
acknowledgement email · Input: Valid submission during simulated partial
failure · Expected: System can detect the incomplete record and resume from
where it stopped (send the missing email) rather than either doing nothing
or re-running the entire pipeline (which would create a duplicate Sheet row)
· Actual: **No partial-failure detection exists** — the record simply sits
incomplete with no automated or flagged path to recovery · **FAIL** ·
Severity: **High**

**TC-031** Module: Manual correction / replay · Input: Staff manually
re-triggers the workflow for a record that failed at the email step (to test
whether replay is safe) · Expected: Replay sends only the missing step(s),
not a duplicate Sheet row or duplicate email · Actual: Full pipeline re-ran,
creating a second Sheet row · **FAIL** · Severity: **High** · Notes: This
means there is currently no safe way for staff to manually recover a failed
record — every fix requires editing the Sheet directly, which is risky and
undocumented.

**TC-032** Module: Logging · Precondition: Any of the above failure
conditions · Expected: A log or error trail exists somewhere that a
non-engineer could review to understand what happened · Actual: **No
centralized error log exists** — failures are only visible by noticing a
missing email or an incomplete row · **FAIL** · Severity: **High** ·
Notes: This is the root cause underlying several other findings — most
failures above are silent because there's nowhere for them to be loud.

**TC-033** Module: End-to-end recovery · Precondition: A record failed
completely at the Sheet-write step (TC-024 scenario) and the underlying
permission issue is fixed · Input: Re-submit the same customer's original
inquiry · Expected: New record created cleanly since the original never
reached the Sheet · Actual: Behaved correctly · **PASS**

### I. STATUS & LIFECYCLE (34-38)

**TC-034** Module: Status update · Input: Owner marks a record Resolved ·
Expected: Resolution timestamp recorded, resolution message sent to
customer · Actual: Behaved correctly · **PASS**

**TC-035** Module: Auto-close logic · Precondition: A record has been
Resolved for exactly 3 business days with no customer response · Expected:
Automatically transitions to Closed · Actual: **No auto-close logic
exists in the current build — this was assumed to exist per the SOP but was
never implemented** · **FAIL** · Severity: **Medium** · Notes: This is a
requirements/build gap, not strictly a defect — flagged because the SOP
(Asset 01) describes behavior the workflow doesn't yet have. Important
finding for whoever owns both documents.

**TC-036** Module: End-to-end success (repeat of TC-001 post-fixes,
included to show what a clean retest looks like) · Input: Same as TC-001 ·
Expected: Same as TC-001 · Actual: *[Not yet retested — pending fixes to
BUG-001 through BUG-004]* · **RETEST STATUS: Not Retested** · Notes:
Included to show the pack's structure supports retest tracking, not just
first-pass results.

**TC-037** Module: Weekend/holiday timing · Input: Submission on a weekend ·
Expected: "Business hours" SLA logic correctly excludes weekend time from
the countdown · Actual: SLA countdown treated weekend hours identically to
business hours, making the displayed "time remaining" inaccurate · **FAIL**
· Severity: **Low**

**TC-038** Module: Reopen logic · Precondition: A Closed record receives a
new customer reply · Input: Customer replies to a closed thread · Expected:
Record reopens at an appropriate status rather than being ignored or
creating an orphaned new record · Actual: Reply created a brand-new,
unrelated record with no link to the original · **FAIL** · Severity:
**Medium**

---

## SUMMARY

| Result | Count |
|---|---|
| **PASS** | 8 |
| **FAIL** | 30 |
| **Total** | 38 |

| Severity (of 30 fails) | Count |
|---|---|
| Critical | 6 |
| High | 9 |
| Medium | 11 |
| Low | 4 |

**Read honestly, not alarmingly:** a first QA pass on a workflow that has
never been adversarially tested typically surfaces exactly this pattern —
mostly-working happy path, largely untested failure and edge-case handling.
That gap is *why the QA pass has value*, not evidence the build is bad.

## PATTERN OBSERVATIONS (worth more than any single test case)

1. **Silent failure is the dominant theme.** At least 8 of the Critical/High
   findings share one root cause: the system has almost no error surfacing.
   Fixing centralized logging (TC-032) would make several other bugs
   self-diagnosing instead of requiring a QA pass to discover.
2. **Success flags are set optimistically, not verified** (TC-019). This is
   a specific, fixable pattern, not a vague concern — "notified: yes" should
   mean the send was confirmed, not merely attempted.
3. **The build assumes happy-path timing and structure** (TC-025, TC-026):
   column position and column names are both fragile dependencies that a
   real spreadsheet, edited by humans over time, will eventually break.
