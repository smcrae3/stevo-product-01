# 20 — QA PRODUCTIZED OFFER ASSESSMENT: "WORKFLOW QA CHECK"

## THE QUESTION

Should a second productized offer — "Workflow QA Check," $125-250 — launch
alongside "SOP in 48 Hours"?

## THE OFFER, DEFINED

**INPUT.** Access (or a walkthrough/description) of one completed
automation or workflow, plus a plain statement of what it's supposed to do.

**OUTPUT.** A structured test-case set (15-25 cases scaled to the workflow's
size) plus a bug/issue log for anything found, using the same format as
`04-QA-TEST-PACK.md` and `05-QA-BUG-REPORTS.md` — severity-ranked, with
reproduction steps.

**WHAT IS TESTED.** Happy path, missing/invalid input, obvious edge cases
(duplicates, malformed data), and — where feasible without live system
access — a light pass at failure-condition behavior (what happens if a
step doesn't complete).

**WHAT IS NOT TESTED.** Load/performance testing, security/penetration
testing, anything requiring credentials to systems Steven doesn't have
supervised access to, and deep structural-fragility testing (the
column-reorder, header-rename category of findings in the demonstration
pack) — that tier of testing takes longer than a bounded productized
service can absorb and belongs in hourly agency subcontract work instead.

**TIME.** 2-4 hours for a workflow of comparable size to the demonstration
(roughly 5-8 steps, one or two branching points).

**PRICE.** **$150** to launch (within the stated $125-250 range, priced
toward the lower-middle to reflect that this is a new, unproven productized
offer rather than an established one).

**WHEN HOURLY IS REQUIRED INSTEAD OF FIXED PRICE:**
- The workflow has more than ~10 steps or multiple integrated systems
- Steven doesn't have direct access and must test based on description
  alone (materially increases risk of missing real behavior)
- The client wants ongoing/recurring QA rather than a one-time check
- Any request to also *fix* what's found — that's separate work, quoted
  separately, never bundled into the QA price

## HOW THE PROOF ASSET SUPPORTS THIS OFFER

`04-QA-TEST-PACK.md` and `05-QA-BUG-REPORTS.md` are not abstractly
related to this offer — they **are** a worked example of exactly what a
buyer receives. A prospective buyer can be shown the demonstration pack and
told, directly and truthfully: "this is the same format and depth you'd get
for your own workflow, scaled to its size." That is a stronger sales
position than any of the other productized services from the prior mission
have, because most of them (Sheet Rescue, SOP) rely on described process
rather than a full worked artifact of the deliverable itself.

## RISK ASSESSMENT

**In favor of launching:**
- Lowest liability of any productized service Steven offers — he finds
  problems, he cannot cause them (same reasoning as the prior mission's
  Offer 2 for agencies)
- Directly proven by an existing, complete demonstration asset — no new
  proof-building required
- Fills a real gap: automation builders (direct clients and agency-adjacent
  freelancers alike) very rarely test their own work adversarially before
  shipping
- Fits the same $75-300 productized band already validated in the prior
  mission's economic analysis

**Against launching immediately, or launching at full scope:**
- **Testing without live system access is meaningfully weaker than testing
  with it** — several of the demonstration pack's most valuable findings
  (BUG-003, BUG-004 — the structural fragility and unsafe-replay findings)
  came from simulating conditions directly against the system, which
  requires actual access, not just a description. A productized version
  sold sight-unseen risks either overpromising this depth or underdelivering
  against the demonstration's own standard.
- **Scope discipline is harder to enforce on QA than on SOP.** An SOP has a
  natural, visible finish line (the document is done). A QA pass can always
  find "one more thing to check," making it more vulnerable to the exact
  scope-creep failure mode the prior mission's profitability rulebook
  warns against for open-ended work.
- No live buyer feedback yet on whether this specific packaging (as opposed
  to QA sold hourly to agencies, which is already planned) has standalone
  demand.

## DECISION: **LAUNCH CANDIDATE — WITH A NARROWED SCOPE**

Launch, but with two guardrails not present in the general assessment
above:

1. **Require live access or a working demo link as a condition of the fixed
   $150 price.** Description-only QA (no direct access) automatically
   converts to hourly, disclosed upfront — this directly prevents the
   access-quality risk from becoming a delivery problem after the price is
   already agreed.
2. **Cap the fixed-price deliverable at 20 test cases and 8 findings
   maximum**, explicitly stated in the offer terms, with anything beyond
   that surfaced as "additional findings available at $X/hour to continue"
   rather than silently expanding scope to match whatever's found. This
   mirrors the demonstration pack's own actual size (38 cases, 8 reports)
   scaled down proportionally for a smaller, faster, lower-priced version.

**This is not a hedge to avoid launching — it's the same discipline
`14-PROFITABILITY-RULEBOOK.md` (prior mission) already requires for any
fixed-price work: countable deliverable, bounded scope, done before at a
similar size.** Both conditions are met once the two guardrails above are
in place.
