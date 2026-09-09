# 02 — SOP PROCESS MAP (TEXT-BASED)

> **FICTIONAL DEMONSTRATION — NOT CLIENT WORK**
> Maps the process defined in `01-SOP-DEMONSTRATION.md`. Antigravity or any
> diagramming tool can render this into a visual flowchart — the structure
> below is written to translate directly (each `├─`/`└─` branch is a
> decision diamond, each plain arrow is a process box).

---

## FULL PROCESS MAP

```
START
  │
  ▼
INQUIRY RECEIVED
  (web form / shared inbox / phone message)
  │
  ▼
CREATE / DETECT RECORD IN INTAKE LOG
  (web form: automatic — email/phone: manual, next sequential Record ID)
  │
  ▼
VALIDATE REQUIRED INFORMATION
  (name + working contact method + enough detail to act)
  │
  ├─ INCOMPLETE ──────────────────────────► [EXCEPTION PATH A]
  │                                          │
  │                                          ▼
  │                                    Send clarification request
  │                                    Status → Pending Customer
  │                                    Urgency → at least Routine
  │                                          │
  │                                          ▼
  │                              Customer responds? ──NO──► auto-close
  │                                          │                (after 3
  │                                         YES               business
  │                                          │                days silence)
  │                                          ▼
  │                              (rejoin main flow at VALIDATE)
  │
  └─ COMPLETE
        │
        ▼
  DUPLICATE CHECK
  (same customer + same issue within 24h?)
        │
        ├─ YES ─────────────────────────────► [EXCEPTION PATH B]
        │                                       │
        │                                       ▼
        │                              Add note to EXISTING record
        │                              Treat as update, not new inquiry
        │                              (do not branch further — record
        │                               continues at its current status)
        │
        └─ NO
              │
              ▼
        CLASSIFY URGENCY
              │
              ├─ CRITICAL ──────► [ESCALATION PATH]
              │                     │
              │                     ▼
              │              Flag Escalated = Y + reason
              │              Contact Operations Lead directly
              │              (outside hours → On-Call Contact by phone)
              │                     │
              │                     ▼
              │              Ops Lead takes over OR confirms
              │              current owner continues w/ guidance
              │                     │
              │                     ▼
              │              (rejoin main flow at ASSIGN OWNER,
              │               owner may now be Ops Lead)
              │
              ├─ URGENT
              │     │
              │     ▼
              ├─ ROUTINE
              │     │
              │     ▼
              │  (ambiguous? round UP one level before proceeding)
              │     │
              ▼     ▼
        LOG SUMMARY (customer's own words, 1-2 sentences)
              │
              ▼
        ASSIGN OWNER
        (subject-area routing table)
              │
              ├─ No clear match ──► Assign Operations Lead (temporary)
              │                       │
              │                       ▼
              │                     Reassign once subject area is clear
              │                       │
              └───────────────────────┤
                                       ▼
                            SEND ACKNOWLEDGEMENT
                            (within first-response target for urgency level)
                                       │
                                       ▼
                            STATUS → Acknowledged
                            (timestamp logged)
                                       │
                                       ▼
                            OWNER WORKS THE INQUIRY
                            STATUS → In Progress
                                       │
                                       ├─ Needs something from customer?
                                       │        │
                                       │       YES
                                       │        ▼
                                       │  STATUS → Pending Customer
                                       │  (note exactly what's awaited)
                                       │        │
                                       │        ▼
                                       │  Stuck > 5 business days?
                                       │        │
                                       │       YES ──► Owner re-contacts
                                       │        │       customer directly
                                       │        NO
                                       │        │
                                       │        ▼
                                       │  Customer responds ──► rejoin
                                       │  at OWNER WORKS THE INQUIRY
                                       │
                                       └─ No blocker
                                                │
                                                ▼
                                    ISSUE RESOLVED
                                                │
                                                ▼
                                    SEND RESOLUTION MESSAGE TO CUSTOMER
                                    (confirms what was done)
                                                │
                                                ▼
                                    STATUS → Resolved
                                                │
                                                ▼
                                    Customer responds within
                                    3 business days?
                                                │
                                    ┌───────────┴───────────┐
                                   YES                       NO
                                    │                         │
                                    ▼                         ▼
                          Reopen at appropriate      STATUS → Closed
                          status (do NOT duplicate)  (auto-close, log
                                    │                 "no further response")
                                    ▼                         │
                          (rejoin at OWNER WORKS,              ▼
                           or close if satisfaction        END
                           confirmed)                  (record retained,
                                                         never deleted)
                                    │
                                    ▼
                                   END
```

---

## THE THREE PATHS, ISOLATED

### HAPPY PATH
```
Received → Validated → No duplicate → Classified → Assigned → 
Acknowledged → Worked → Resolved → Confirmed by customer or 
silence 3 days → Closed
```
**Steps: 8. Typical for Routine and most Urgent inquiries.**

### EXCEPTION PATH (missing information)
```
Received → Validation FAILS → Clarification requested → 
Pending Customer → [wait] → Customer responds → 
rejoin Validation → (continues as happy path)
```
**Adds: 1 loop-back. Risk if mishandled: silent record if customer never
responds and no auto-close discipline exists — this is why auto-close after
3 business days is written into the SOP rather than left to memory.**

### ESCALATION PATH (Critical)
```
Received → Validated → Classified CRITICAL → Escalation flagged 
IMMEDIATELY (not at daily review) → Ops Lead or On-Call contacted 
directly → Ownership confirmed/reassigned → 
rejoin at Assign Owner → (continues as happy path, but under 
1-hour first-response target)
```
**Key difference from happy path: escalation happens before assignment,
not after — a Critical record should never sit in an unassigned or
unnoticed state even briefly.**

### CLOSEOUT — ALL PATHS CONVERGE HERE
```
Resolved → 3-business-day window → 
  Response received → reopen, no duplicate record
  No response → auto-close, retain record permanently
```

---

## WHAT THIS MAP IS FOR

A process map earns its place when it answers a question faster than the
prose SOP does. This one exists to let a reviewer (an agency evaluating
Steven's work, a hiring manager, or a new employee) see in ten seconds:

1. There is exactly **one** entry point and **one** exit point — no inquiry
   can vanish partway through without hitting a decision node that redirects
   it.
2. Every exception loop **rejoins the main flow** rather than dead-ending —
   nothing requires a second, separate procedure to finish.
3. Escalation is the only path that **jumps ahead** of normal sequencing
   (flagged before assignment), which is deliberate and visible here in a
   way that's easy to miss reading prose top to bottom.

## ANTIGRAVITY / VISUAL RENDERING NOTE

This text map is written so each `├─`/`└─` fork becomes a decision diamond
and each arrow becomes a process box in a standard flowchart tool (Lucidchart,
Miro, draw.io, or Google Drawings). Recommended visual conventions: diamonds
for the three questions in `VALIDATE`, `DUPLICATE CHECK`, and `CLASSIFY
URGENCY`; a distinct color for the escalation path; and the closeout box
rendered once with all three paths merging into it, matching the "all paths
converge" section above.
