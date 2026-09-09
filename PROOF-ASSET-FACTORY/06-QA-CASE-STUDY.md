# 06 — QA CASE-STUDY PAGE

> **FICTIONAL DEMONSTRATION — NOT CLIENT WORK**

---

## How I QA an AI-Assisted Workflow Before It Reaches a Customer

### WHY TESTING MATTERS

An AI-assisted workflow (a form feeding an AI summarizer feeding an
automated classification feeding automated emails) looks finished the
moment the happy path works once. It usually isn't. The gap between "works
when I tested it" and "works when a real customer submits something messy"
is exactly where QA lives — and it's the gap most builders don't have time
to close themselves, because they're testing their own work with their own
assumptions about how people will use it.

### WHAT I TEST

Four categories, in this order of priority:

1. **The happy path once**, to establish a working baseline before hunting
   for problems.
2. **Missing and malformed input** — blank fields, invalid formats, messages
   that break assumptions about length or content.
3. **Failure conditions deliberately simulated** — what happens when a
   downstream service (the Sheet, the email service, the AI classifier)
   fails, times out, or returns something unexpected. This is the category
   most workflows have never actually experienced before they ship.
4. **Structural fragility** — what happens when something outside the
   automation's control changes: a column gets reordered, a header gets
   renamed, a customer replies to an old thread.

### FAILURE MODES I LOOK FOR SPECIFICALLY

- **Silent failure** — the system fails but nothing anywhere records that it
  failed. This is the single most dangerous pattern, because it means the
  business has no way to know something is broken until a customer
  complains.
- **Optimistic status flags** — a field says "Notified: Yes" because the
  attempt was made, not because it was confirmed delivered.
- **Position-dependent logic** — code that assumes a spreadsheet column will
  always be in the same place, which breaks the first time a human edits
  the sheet.
- **Unsafe replay** — no way to manually retry a failed step without
  re-running everything and creating duplicates.

### HOW I SEPARATE AI DISCOVERY FROM HUMAN VERIFICATION

AI is genuinely useful for generating an initial list of test-case
categories quickly — happy path, missing fields, invalid formats, and so
on, drafted in minutes rather than an hour of staring at a blank test plan.

What AI does not reliably do is invent the specific edge cases that come
from understanding how a particular system actually behaves — the
column-reorder case, the timezone-boundary case, the "what if the same
customer submits twice" case. Those come from thinking about the system
adversarially, and from having personally dealt with something similar
before. In this demonstration, several of the 38 test cases — particularly
the structural-fragility and recovery-related ones — came from that kind of
targeted thinking rather than a generated checklist.

Every test case in the pack was then **executed conceptually against the
described system behavior** and the result recorded — I don't report a test
as "Pass" or "Fail" without being able to explain specifically what
happened and why.

### HOW I HANDLE UNSUPPORTED OUTPUT

If I can't verify something — for instance, I can't confirm from outside
the system exactly *why* the on-call notification failed to fire, only that
it did — I say so directly, as a hypothesis rather than a diagnosis (see
"Likely Area to Investigate" on each bug report). Presenting a guess as a
confirmed root cause wastes an engineer's time chasing the wrong thing; a
clearly labeled hypothesis saves it.

### WHY REPLAY / IDEMPOTENCY MATTERS

A workflow that can only be run start-to-finish, with no way to safely
retry a single failed step, will inevitably accumulate a backlog of
"can't fix this without risking a duplicate" records. This is a
compounding problem, not a one-time inconvenience — every partial failure
becomes technically unfixable in practice, because the fix is worse than
the failure. I flag this pattern specifically (BUG-004) because it's a
structural decision, not a bug that gets patched — it needs to be designed
in from the start or retrofitted deliberately.

### WHAT THE TEST PACK PROVES

That I can look at a described workflow, generate a genuinely broad and
adversarial set of test conditions (not just the obvious ones), execute
them against the stated behavior, and write up findings in a format an
engineer can act on immediately — without vague language like "this seems
off" standing in for a specific, reproducible defect.

---

*This case study describes a fictional demonstration workflow. No real
build, client engagement, or production system is represented.*
