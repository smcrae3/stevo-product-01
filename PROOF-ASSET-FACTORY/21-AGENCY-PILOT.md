# 21 — AGENCY PILOT DESIGN

## THE PILOT

> "Give me one completed automation before client handoff. I'll produce a
> QA checklist, 10-20 test cases, an issue log, and a handoff SOP — within
> 24-48 hours."

This is deliberately the **combination** of two of the prior mission's
separate agency offers (Offer 1: documentation, Offer 2: QA) packaged as a
single, low-risk trial rather than asking an agency to commit to an
ongoing relationship on the first interaction.

## WHY THIS SPECIFIC PACKAGE, NOT A SINGLE-SERVICE PILOT

A pure QA-only pilot proves Steven can test. A pure documentation-only
pilot proves he can write. **Neither alone proves he can do the full
pre-handoff production cycle an agency actually needs** — test it, find
what's wrong, and document what's right, on the same build, in sequence.
Bundling both into one bounded pilot is a stronger first demonstration
precisely because it mirrors the real, combined need rather than an
artificially narrow slice of it.

## DESIGN PARAMETERS

**PRICE.** **$225 flat** for the combined pilot. *(Anchored between the
prior mission's Offer 1 sample price ~$200-250 and Offer 2 sample price
~$150-300 — priced as a single bundled deliverable, not simply the sum of
the two.)*

**HOURLY VS FIXED: FIXED — with a strict scope cap.** This is one of the
few cases where fixed price is appropriate for automation-adjacent work,
specifically because:
- The deliverable is genuinely countable (one build, one test set within a
  stated case-count cap, one SOP)
- Steven has now completed a directly comparable demonstration
  (`04`/`05`/`01`) at a larger scale, so the time estimate is grounded in
  actual completed work, not a guess
- The scope is capped explicitly (see Deliverable Limits below), which is
  exactly the condition the prior mission's profitability rulebook requires
  before fixed price is acceptable

**TIMEBOX.** **48 hours** from receiving access to the completed build.
Not 24 — the demonstration pack shows that a proper pass (happy path,
invalid input, at least some failure simulation, plus a full SOP) takes
real hours; compressing to 24 risks either rushing the QA pass or
short-changing the documentation, and a rushed first pilot is worse for the
relationship than an honestly-timed one.

**DELIVERABLE LIMITS** *(the guardrail that makes fixed price safe here)*:
- Up to **15 test cases** (roughly proportional to the demonstration pack's
  38, scaled to a smaller single-build pilot rather than a full workflow
  audit)
- Up to **5 bug/issue reports**, severity-ranked
- **One handoff SOP** covering the build's operation and maintenance
  (equivalent scope to `01-SOP-DEMONSTRATION.md`)
- Findings beyond these caps are **listed but not fully written up** in the
  pilot — flagged as "additional items identified, available to complete at
  [hourly rate]" rather than either silently included (scope creep) or
  silently dropped (incomplete work presented as complete)

**REVISION LIMIT.** **One round**, limited to clarifying or correcting
something in the delivered documents (e.g., a misunderstood field name in
the SOP) — not re-scoping to test additional builds or add more test cases,
which would be new work at the hourly rate.

## WHY THIS IS THE LOWEST-RISK PILOT AVAILABLE

Compared to any alternative first-engagement structure (an ongoing
retainer, an open-ended "help us with QA" arrangement, or unpaid trial
work):

- **Bounded in time** (48 hours) and **bounded in scope** (the caps above),
  so neither party is exposed to unlimited commitment on a first
  interaction
- **Priced to be approved by one person without an internal budget
  conversation** — $225 is a decide-alone amount for almost any agency
  owner
- **Directly backed by an existing, inspectable demonstration** of the same
  deliverable at a larger scale — the agency isn't taking Steven's word for
  what they'll get, they can see the shape of it in `04`/`05`/`01` first
- **Never touches the agency's client relationship** — Steven works on the
  build itself, pre-handoff, with zero client-facing exposure, which
  removes the single highest-liability element from a first engagement

## WHAT SUCCESS LOOKS LIKE

The pilot converts into the standing agency-ladder relationship described
in the prior mission's `05-AGENCY-OFFERS.md` — QA and documentation work
continuing on future builds, priced hourly or per-deliverable going
forward, once trust from this bounded first pass is established. The pilot
itself is explicitly a **relationship-opener, not a repeatable product** —
it should not be re-offered at the same bundled price to the same agency a
second time; a second engagement is priced and scoped per the standard
Offer 1/Offer 2 structure instead.
