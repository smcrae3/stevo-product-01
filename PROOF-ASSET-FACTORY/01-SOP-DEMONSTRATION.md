# 01 — SOP / PROCESS DOCUMENTATION PROOF ASSET

> **FICTIONAL DEMONSTRATION — NOT CLIENT WORK**
> "Harbor Line Services" is an invented company created to demonstrate SOP
> writing method and standard of finish. No real business, client
> relationship, or engagement exists. Screenshots referenced throughout use
> a demo Google Workspace account with fabricated data.

---

# STANDARD OPERATING PROCEDURE

## Customer Inquiry Intake, Triage & Response

---

### DOCUMENT CONTROL

| Field | Value |
|---|---|
| **Document ID** | SOP-CS-001 |
| **Title** | Customer Inquiry Intake, Triage & Response |
| **Owner** | Operations Lead (role, not named individual) |
| **Version** | 1.0 |
| **Status** | Demonstration draft — not deployed |
| **Effective date** | [Example: upon adoption] |
| **Review cycle** | Every 6 months, or after any process-breaking incident |
| **Approved by** | *[FICTIONAL — pending owner sign-off]* |
| **Distribution** | Front-desk / intake staff, on-call escalation contact, Operations Lead |

**Change log**
| Version | Date | Change | Author |
|---|---|---|---|
| 0.1 | — | Initial draft from stakeholder walkthrough | Documentation (AI-assisted draft) |
| 1.0 | — | Verified against live system; exceptions section added from interview | Human-verified |

---

### PURPOSE

This SOP defines a single, repeatable process for how any inquiry that
reaches Harbor Line Services — by web form, shared inbox, or phone message
routed to the shared inbox — gets reviewed, classified by urgency, logged,
assigned to an owner, acknowledged to the customer, tracked to resolution,
and closed. It exists so that:

- No inquiry is missed because "someone else probably has it."
- Response time is consistent regardless of who is on shift.
- A new hire can run intake correctly on day one without shadowing someone
  for a week.
- Urgent issues get identified and escalated within a bounded time window
  instead of sitting in a queue until someone happens to notice.

### SCOPE

**In scope:** all inbound customer inquiries arriving through the website
contact form, the shared support inbox (`support@[demo-domain]`), or a phone
message that a staff member converts into a written record.

**Out of scope:** outbound sales prospecting, vendor/supplier
correspondence, internal HR requests, and any inquiry that has already been
assigned a case number in a different system (billing disputes routed
through the finance queue, for example, follow a separate SOP).

### ROLES & RESPONSIBILITIES

| Role | Responsibility |
|---|---|
| **Intake Reviewer** (rotating, whoever is on shift) | First read of every new inquiry; validates completeness; performs urgency classification; creates the log record |
| **Assigned Owner** | The staff member responsible for resolving a specific inquiry once assigned; sends the substantive reply; updates status |
| **Operations Lead** | Reviews the queue daily for anything unassigned past SLA; handles escalations; owns this document |
| **On-Call Contact** | Reachable outside business hours for Critical-classified inquiries only |

**Ownership logic:** the Intake Reviewer does not have to be the Assigned
Owner. Assignment is based on subject area (see the classification table
below), not on who happened to open the inquiry first. If the correct owner
is unclear, assign to the Operations Lead as a temporary owner rather than
leaving the record unassigned — an unassigned record is the single most
common failure mode this SOP exists to prevent.

### DEFINITIONS

| Term | Meaning |
|---|---|
| **Inquiry** | Any inbound customer communication requiring a reply, regardless of channel |
| **Record** | The row in the Intake Log representing one inquiry, from creation to closure |
| **Owner** | The person currently responsible for moving a record forward |
| **SLA** | Service-level target for first response and for resolution (example targets only — see SLA section) |
| **Stale** | A record with no status update for longer than its SLA window, regardless of classification |

### TOOLS / SYSTEMS

- **Intake Log** — Google Sheet, one row per inquiry (field list below)
- **Shared inbox** — `support@[demo-domain]` (Gmail)
- **Web form** — feeds directly into the Intake Log via a connected Google
  Form
- **Acknowledgement template** — stored as a Gmail canned response
- **Escalation channel** — a dedicated Slack-style channel or, in its
  absence, a direct text/call to the on-call contact

**Intake Log fields (exact column names):**
`Record ID | Date/Time Received | Channel | Customer Name | Customer Email |
Customer Phone | Summary | Urgency | Status | Owner | Date Acknowledged |
Date Resolved | Escalated (Y/N) | Escalation Reason | Notes`

**Status values (use exactly these — free-text status defeats reporting):**
`New` → `Acknowledged` → `In Progress` → `Pending Customer` → `Resolved` →
`Closed`
(`Escalated` is a flag, not a status — a record can be `In Progress` and
`Escalated` at the same time.)

### TRIGGER

This process starts the moment any of the following occurs:
- A web form submission lands in the Intake Log (automatic)
- A new email arrives in the shared inbox
- A staff member takes a phone message intended for support

### PRECONDITIONS

- The Intake Reviewer has access to the Intake Log and the shared inbox
- The web form is live and connected to the Log (verify weekly — see Quality
  Checks)
- The acknowledgement template exists and reflects current turnaround
  expectations

---

### STEP-BY-STEP PROCEDURE

**Step 1 — Detect the inquiry**
Web-form submissions appear in the Intake Log automatically with a `Record
ID` and timestamp pre-filled. For email or phone-message inquiries, the
Intake Reviewer manually creates a new row using the next sequential Record
ID (format: `HL-` + four-digit sequence, e.g., `HL-0347`).

**Step 2 — Validate required information**
Confirm the record has: customer name, a working contact method (email or
phone), and enough detail to understand what's being asked.

- *If information is missing* → go to **Exception Handling, Case A**.
- *If complete* → proceed to Step 3.

**Step 3 — Classify urgency**
Read the inquiry and assign exactly one urgency level using the table below.
Do not leave this field blank and do not assign more than one level.

| Level | Definition | Example signal | First-response target |
|---|---|---|---|
| **Critical** | Safety issue, service completely down, or customer explicitly states financial/legal harm in progress | "no water," "billed twice and can't pay rent," "this is dangerous" | *Example target: 1 hour* |
| **Urgent** | Customer is blocked from something time-sensitive but not in active harm | "need this resolved before Friday's inspection" | *Example target: 4 business hours* |
| **Routine** | General question, minor issue, no stated deadline | "how do I update my billing address" | *Example target: 1 business day* |

**On ambiguous urgency:** when the inquiry doesn't clearly match one row,
classify one level *up*, not down. A false-Urgent that turns out routine
costs a wasted fast response. A false-Routine that turns out Urgent costs a
customer who is now angry *and* right. This asymmetry is the whole reason
the default direction matters — write it into training, don't leave it to
judgment calls made under time pressure.

**Step 4 — Record the classification and log the summary**
Enter the urgency level and a one-to-two sentence summary in the customer's
own words where possible. A summary that requires re-reading the entire
original email later is not a useful summary.

**Step 5 — Assign an owner**
Use the subject-area routing table:

| Subject area keyword pattern | Default owner role |
|---|---|
| Billing, invoice, payment | Billing owner |
| Service quality, scheduling, technician | Operations owner |
| Account access, login, website | Admin owner |
| Anything not matching, or spanning multiple areas | Operations Lead (temporary) |

**Step 6 — Send acknowledgement**
Send the acknowledgement template to the customer within the first-response
target for the assigned urgency level. The acknowledgement must state: that
the inquiry was received, roughly when to expect a substantive reply, and
(for anything above Routine) a direct way to reach someone if the situation
changes before that reply arrives.

*Do not* send a generic "we'll get back to you" with no timeframe — it
answers nothing and generates a follow-up inquiry asking when.

**Step 7 — Update status to Acknowledged**, and record the acknowledgement
timestamp in the Log.

**Step 8 — Owner works the inquiry**
The assigned owner investigates, takes whatever action resolves the
inquiry, and updates status to `In Progress`. If the owner needs something
from the customer before proceeding, status changes to `Pending Customer`
and the record includes exactly what's being waited on.

**Step 9 — Resolve and confirm**
Once the substantive issue is handled, the owner sends a resolution message
to the customer confirming what was done, and sets status to `Resolved`.

**Step 10 — Close the record**
After 3 business days with no further customer response (or immediately, if
the customer confirms satisfaction), set status to `Closed`. Record the
closure date.

---

### DECISION POINTS

```
Is required information present?
  NO  → Exception A (request clarification)
  YES → continue

Does the inquiry clearly match one urgency level?
  YES → classify as matched
  NO  → classify one level up from the closer match

Does the subject area match one routing keyword pattern?
  YES → assign per table
  NO  → assign to Operations Lead (temporary), reassign once area is clear

Has the customer responded within 3 business days of Resolved status?
  NO  → auto-close, log as "closed — no further response"
  YES → reopen at appropriate status, do not create a duplicate record
```

### EXCEPTION HANDLING

**Case A — Missing required information.**
Do not guess a customer's name or fabricate contact information. Reply
using the clarification template requesting only what's missing. Set status
to `Pending Customer` and urgency to *at minimum* Routine, pending
confirmation — a message that's too vague to classify is not automatically
low-priority.

**Case B — Duplicate submission.**
If the same customer submits twice about the same issue within 24 hours
(check by email address and summary similarity), do not create a second
record. Add a note to the existing record and treat the second submission
as an update, not a new inquiry. *Reasoning:* a duplicate customer contact
usually means the first one felt unacknowledged — treat it as a mild urgency
signal, not administrative noise.

**Case C — Wrong channel / not actually a support inquiry** (e.g., a vendor
pitch landed in the support inbox). Log it with status `Closed` and a note,
so it doesn't appear as an unresolved item in daily review, but it isn't
silently deleted either — deletion removes the ability to notice a pattern
(e.g., the same vendor spamming the form) later.

**Case D — Customer requests something outside policy.**
Do not improvise an exception to stated policy. Log the request accurately,
set status to `Pending Customer` if a real answer requires checking with the
Operations Lead, and give the customer an honest timeframe rather than a
premature yes or no.

**What NOT to do, explicitly:**
- Do not leave a record unassigned "until someone gets to it."
- Do not classify by gut feeling without checking the table first — the
  table exists precisely because gut feeling is inconsistent across people
  and across a single person's bad days.
- Do not close a record without a resolution message, even if the issue
  seems to have resolved itself.
- Do not reply from a personal inbox instead of the shared one — it breaks
  the audit trail and makes handoff impossible if that person is out.

### ESCALATION

**Escalate immediately (do not wait for the Operations Lead's daily review)
when:**
- A record is classified Critical
- A customer explicitly mentions legal action, injury, or media contact
- The same customer has contacted twice about the same unresolved issue
- An owner is unsure whether something is within policy and the customer is
  waiting

**How to escalate:** flag `Escalated = Y` in the Log with a one-line reason,
and contact the Operations Lead directly (not just via the Log — a flag
nobody is watching in real time is not an escalation). Outside business
hours, Critical-only escalations go to the On-Call Contact by phone.

**What happens after escalation:** the Operations Lead either takes over as
owner or explicitly confirms the current owner should continue with
guidance. Escalation should never result in an inquiry with two people who
each assume the other is handling it — the Log's Owner field is
reassigned, not merely commented on.

### QUALITY CHECKS

Run weekly, by the Operations Lead:
- [ ] Any record older than its SLA window with no status change? → follow up
- [ ] Any record stuck in `Pending Customer` past 5 business days? → owner
  should re-contact the customer, not wait indefinitely
- [ ] Spot-check 3 closed records: was the acknowledgement sent within
  target? Was the resolution message actually sent, not just implied?
- [ ] Confirm the web form is still writing correctly to the Log (submit a
  test entry monthly and delete it afterward)
- [ ] Any urgency misclassification patterns? (e.g., billing questions
  consistently under-classified) — if yes, update the routing/classification
  guidance, don't just correct the individual record

### SLA / RESPONSE-TIME TARGETS

> **Example policy for this demonstration — not a real customer promise.**
> Any real deployment must set targets the business can actually staff to,
> and state them to customers only once confirmed achievable.

| Urgency | First response | Target resolution |
|---|---|---|
| Critical | 1 hour | Same business day |
| Urgent | 4 business hours | 2 business days |
| Routine | 1 business day | 5 business days |

### FAILURE / RECOVERY

**If the shared inbox is inaccessible:** the web form still writes to the
Intake Log independently — check the Log directly rather than assuming
intake has stopped.

**If the web form stops writing to the Log** (caught by the weekly test
entry, or a gap in Record IDs): switch immediately to manually checking the
form's own response view until the connection is fixed, so submissions
aren't lost during the gap. Log an internal note on the date range affected.

**If an owner is out unexpectedly with open records assigned:** the
Operations Lead reassigns every open record under that owner's name during
the next daily review — records do not sit waiting for someone to return.

**If a record was closed in error:** reopen at the last known correct
status. Do not create a new record for the same inquiry — this breaks the
history and can cause a customer to be acknowledged twice for one issue.

### RECORD KEEPING

Every record stays in the Intake Log indefinitely (or per the company's
data-retention policy, if one exists) rather than being deleted on closure.
Closed records are the source for the weekly quality checks and for
identifying recurring issues worth fixing at the root. Customer contact
information in the Log should be handled per applicable privacy
requirements — this demonstration does not define that policy.

### CHANGE CONTROL

Any change to urgency definitions, SLA targets, or routing rules requires:
1. Written proposal describing the change and why
2. Operations Lead sign-off
3. Version increment and change-log entry in this document
4. Notification to all users of this SOP before the change takes effect

No informal "just do it this way now" changes — if the SOP doesn't reflect
actual practice, the SOP is wrong and should be fixed, not silently ignored.

### TRAINING NOTES

New staff should shadow one full day of intake before working solo, then
have their first 10 independent classifications spot-checked by the
Operations Lead. The two most common new-hire errors this kind of process
tends to produce: (1) under-classifying urgency because the customer's tone
is calm even when the situation is serious, and (2) leaving the summary field
too vague to be useful to whoever picks up the record next.

### QUICK REFERENCE

```
NEW INQUIRY ARRIVES
 → Info complete? No → request clarification, Pending Customer
 → Classify urgency (when in doubt, round UP)
 → Assign owner by subject area
 → Acknowledge within target
 → Work it → Resolved → confirm with customer → Closed (or auto-close
   after 3 business days silence)
 → Anything Critical, repeat-contact, or policy-ambiguous → ESCALATE NOW
```

### CHECKLIST — per inquiry

- [ ] Record created with next sequential ID
- [ ] Customer name and working contact method present
- [ ] One-to-two sentence summary in customer's own words
- [ ] Urgency classified (rounded up if ambiguous)
- [ ] Owner assigned per routing table
- [ ] Acknowledgement sent within target; timestamp logged
- [ ] Status updated at every stage (never left stale)
- [ ] Resolution message sent before closing
- [ ] Escalation flagged immediately if any trigger applies
- [ ] Record retained after closure, not deleted

---

*End of SOP-CS-001. This document is a demonstration of method and standard
of finish. It describes a fictional company's fictional process and was
verified for internal consistency, not against any live system.*
