# 05 — QA BUG REPORTS

> **FICTIONAL DEMONSTRATION — NOT CLIENT WORK**
> Derived from the test pack in `04-QA-TEST-PACK.md`. Same fictional
> workflow, same disclaimer: no real build, client, or codebase is
> represented.

Format per report: Bug ID · Title · Environment · Preconditions · Steps to
Reproduce · Expected · Actual · Severity · Business Impact · Evidence
Required · Likely Area to Investigate (stated as a hypothesis, not a
diagnosis) · Retest Condition.

---

## CRITICAL (2)

### BUG-001 — On-call notification does not fire for Critical-classified inquiries

**Environment:** Demonstration build, production-equivalent configuration
**Preconditions:** Workflow live; a customer submission is worded to trigger
Critical classification (safety/urgent-harm language)
**Steps to reproduce:**
1. Submit the web form with message text containing a critical-severity
   signal (e.g., "no service, this is a safety issue")
2. Observe the classification result
3. Check whether both the assigned owner and the on-call contact receive a
   notification

**Expected:** Both the owner and the on-call contact are notified
immediately, per the SOP's escalation requirement for Critical inquiries.
**Actual:** Classification correctly identifies the inquiry as Critical and
notifies the owner. The on-call notification step does not fire — no
message is sent, and no error is logged anywhere.
**Severity:** Critical
**Business impact:** A genuinely urgent customer issue could go unaddressed
outside business hours with zero indication anything failed. This is the
exact scenario the escalation path exists to prevent, and it is currently
silent when it fails.
**Evidence required:** Side-by-side of the classification result, the
owner-notification log entry, and the absence of any on-call notification
record for the same timestamp.
**Likely area to investigate:** The on-call notification may be conditioned
on a configuration value that isn't set in this environment, or the
Critical-classification branch may only be wired to the owner-notification
step and never reference the on-call step at all. *(Stated as a hypothesis
— confirming this requires reading the actual automation configuration,
which this demonstration doesn't have access to.)*
**Retest condition:** Re-run the reproduction steps after any fix; confirm
both notifications appear with matching timestamps within the SLA window.

---

### BUG-002 — Submissions are lost entirely during a Sheet-write failure, with no retry or alert

**Environment:** Demonstration build
**Preconditions:** Simulated temporary failure of the Google Sheets write
step (e.g., a transient permission or connectivity issue)
**Steps to reproduce:**
1. Simulate a Sheet-write failure (revoke write access temporarily, or
   simulate a timeout)
2. Submit a valid form entry during the failure window
3. Restore normal access
4. Check the Sheet for the submission and check for any error/alert record

**Expected:** The submission is either retried automatically after a short
delay, queued for later write, or at minimum surfaces a visible error so
staff know a submission was lost and can follow up.
**Actual:** The submission disappears completely. The customer sees a
success confirmation on the web form, but no corresponding record exists
anywhere, and no alert is generated.
**Severity:** Critical
**Business impact:** A customer believes their inquiry was received; it
was not. This produces the worst possible outcome for trust — a customer
who follows up later to ask why nobody responded, with no record on the
business's side that they ever contacted anyone.
**Evidence required:** Form confirmation screenshot from the customer's side
paired with the empty Sheet (no corresponding row) for the same timestamp.
**Likely area to investigate:** The write step likely has no retry logic and
no failure branch at all — it's plausible the automation was built and
tested only against the happy path, where the write always succeeds.
**Retest condition:** Simulate the same failure post-fix; confirm either a
successful retry or a clearly visible alert record.

---

## HIGH (2)

### BUG-003 — Sheet write uses column position instead of column headers, breaking on manual reordering

**Environment:** Demonstration build
**Preconditions:** A human manually reorders one or more columns in the
Sheet (a realistic real-world event — someone drags a column while cleaning
up the view)
**Steps to reproduce:**
1. Manually move the "Phone" column to a different position in the Sheet
2. Submit a new valid form entry
3. Check which column the phone number actually lands in

**Expected:** Data writes to the correct field regardless of column
position — i.e., the automation writes by matching column header names, not
fixed column index.
**Actual:** Data continued writing by fixed position; after the reorder, the
phone number was written into what is now the Email column, and vice versa.
**Severity:** High
**Business impact:** Silent data corruption. Nobody would notice this
happened from looking at a single row — it only becomes visible when
someone tries to actually call or email a customer using the wrong field's
data, which could be days later.
**Evidence required:** Before/after screenshots of the Sheet showing the
column reorder and the resulting misaligned data.
**Likely area to investigate:** The script's data-write logic likely
references columns by letter/index (e.g., column D) rather than by looking
up the header name at write time. This is a common shortcut in early-stage
automations and is worth flagging as a structural fix, not a one-off patch.
**Retest condition:** Reorder columns again post-fix; confirm data still
lands in the semantically correct field.

---

### BUG-004 — Replaying a failed record duplicates the Sheet row instead of resuming from the failure point

**Environment:** Demonstration build
**Preconditions:** A record has failed partway through the pipeline (Sheet
write succeeded, email step failed)
**Steps to reproduce:**
1. Identify a record that completed the Sheet write but never received an
   acknowledgement email (simulate this by manually breaking the email step
   for one submission)
2. Manually re-trigger the workflow for that record to attempt recovery
3. Check the Sheet for duplicate rows

**Expected:** Re-triggering resumes only the missing step (sends the
missing email) without re-running the entire pipeline.
**Actual:** The full pipeline re-ran, creating a second, duplicate row in
the Sheet for the same original inquiry.
**Severity:** High
**Business impact:** There is currently no safe way for staff to manually
recover a partially failed record. Every recovery attempt risks creating
duplicate data, which means staff will likely avoid attempting recovery at
all — effectively making BUG-002 and similar partial failures permanent
rather than fixable.
**Evidence required:** Sheet screenshot showing two rows with identical
customer information and near-identical timestamps after a single
recovery attempt.
**Likely area to investigate:** The workflow is likely built as one
linear script with no way to invoke individual steps independently — the
whole thing runs top to bottom every time it's triggered, with no
step-level idempotency check.
**Retest condition:** Repeat the reproduction steps post-fix; confirm only
the missing step executes and no duplicate row is created.

---

## MEDIUM (2)

### BUG-005 — Ambiguous urgency (routine question plus a deadline mention) is classified Routine instead of Urgent

**Environment:** Demonstration build
**Preconditions:** None beyond a live classification step
**Steps to reproduce:**
1. Submit a message containing a routine-sounding question that also
   mentions a time-sensitive deadline (e.g., "just wondering about your
   services — also, any way to get this done before Friday?")
2. Check the resulting urgency classification

**Expected:** Per the intended policy (round up on ambiguity), this should
classify as Urgent given the deadline mention.
**Actual:** Classified Routine — the deadline mention appears to be
outweighed by the larger volume of routine-sounding text in the message.
**Severity:** Medium
**Business impact:** A time-sensitive request could receive a slower
response than the customer needs, without any flag indicating the
classification might be wrong. This is a policy/tuning gap rather than a
crash, but it directly undermines the SOP's stated "round up on ambiguity"
rule.
**Evidence required:** The full message text alongside the assigned
classification, for a reviewer to judge against the stated policy.
**Likely area to investigate:** This is a question for whoever owns the
classification logic (an AI prompt, a keyword-matching rule set, or
something else) — worth raising as a design conversation, not just a bug
fix, since "how strictly should deadline mentions override the rest of the
message" is a judgment call, not a pure defect.
**Retest condition:** Re-submit the same test message post-adjustment;
confirm Urgent classification.

---

### BUG-006 — Manual corrections to a record overwrite the original value with no audit trail

**Environment:** Demonstration build
**Preconditions:** A record exists with an incorrect field (e.g.,
misclassified urgency) that staff corrects manually
**Steps to reproduce:**
1. Manually edit the Urgency field on an existing record in the Sheet
2. Check whether any trace of the original value or who made the change
   exists anywhere

**Expected:** Some form of change history exists — a notes field entry, a
version log, or similar — so a reviewer can later see that a correction was
made and by whom.
**Actual:** The original value is silently overwritten. No record of the
change, the previous value, or the person who made it exists anywhere.
**Severity:** Medium
**Business impact:** Makes it impossible to demonstrate, during a later
review or dispute, that staff caught and corrected a misclassification.
Also makes it harder to identify patterns in classification errors over
time, since corrected records look identical to records that were never
wrong.
**Evidence required:** A before/after comparison showing the edit occurred,
paired with the Sheet's actual audit capabilities (or lack thereof).
**Likely area to investigate:** This is a Sheet-structure gap rather than an
automation bug — likely requires adding a "Notes" or "Correction Log"
column and a light process convention for staff to use it, rather than a
script fix.
**Retest condition:** After adding a change-tracking mechanism, repeat a
manual correction and confirm the change is visible.

---

## LOW (2)

### BUG-007 — Acknowledgement email subject line is identical regardless of urgency level

**Environment:** Demonstration build
**Preconditions:** None
**Steps to reproduce:**
1. Submit one Routine and one Critical inquiry
2. Compare the subject lines of the two acknowledgement emails received

**Expected:** Subject line reflects urgency (e.g., "[Urgent] We received
your message" vs. a plain subject for Routine).
**Actual:** Both emails use an identical subject line with no urgency
indicator.
**Severity:** Low
**Business impact:** Minor — makes it slightly harder for staff (if
they're CC'd or monitoring the shared inbox) to visually triage at a
glance, but doesn't affect the customer-facing outcome or the backend
record.
**Evidence required:** Two email screenshots side by side.
**Likely area to investigate:** Simple template configuration — the subject
line field likely isn't pulling from the classification variable the way
the body text does.
**Retest condition:** Confirm subject line varies correctly by urgency
level post-fix.

---

### BUG-008 — Acknowledgement email renders as raw HTML tags in one older email client

**Environment:** Demonstration build; issue observed in one specific,
older email client during testing
**Preconditions:** Recipient using the affected client
**Steps to reproduce:**
1. Submit a valid form entry using an email address on the affected client
2. Open the received acknowledgement email in that client

**Expected:** Email renders as formatted HTML (matching how it renders in
Gmail and other modern clients).
**Actual:** Raw HTML tags are visible in the email body instead of rendered
formatting.
**Severity:** Low
**Business impact:** Affects a small subset of recipients using an
outdated client; the message content is still readable, just visually
messy. Not a functional blocker.
**Evidence required:** Screenshot from the affected client.
**Likely area to investigate:** Missing plain-text fallback / multipart
email format — the email is likely being sent as HTML-only rather than with
a plain-text alternative part.
**Retest condition:** Confirm the plain-text fallback renders acceptably in
the same client post-fix.

---

## SEVERITY DISTRIBUTION SUMMARY

| Severity | Count | Theme |
|---|---|---|
| Critical | 2 | Silent failure with real customer-trust or safety consequence |
| High | 2 | Structural fragility (position-dependent writes, unsafe replay) |
| Medium | 2 | Policy tuning and audit-trail gaps |
| Low | 2 | Cosmetic / minor client-compatibility issues |

**The honest framing for a buyer:** eight bugs across four severity tiers is
a normal, expected first-pass QA result — not a verdict on build quality. It
demonstrates the kind of adversarial thinking (deliberately breaking things,
simulating failures rather than only testing happy paths) that a build team
under deadline pressure rarely has time to do for itself.
