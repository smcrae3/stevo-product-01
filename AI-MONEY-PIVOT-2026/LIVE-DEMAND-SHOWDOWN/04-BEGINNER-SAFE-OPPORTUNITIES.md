# 04 — Beginner-Safe Opportunity Scoring

Per the method note in 01/02/03: no individual listing in any lane could
be independently verified live from this session. Scores below are
therefore given **at the category/pattern level**, using HIGH/MEDIUM/LOW
per the instruction to avoid fake precision — not per named job, since no
named job passed verification this turn.

| Category (lane) | Commercial Intent | Scope Clarity | Steven Understands | AI Assists | Steven Can Explain | Text-First | Technical Risk (lower=better) | Competition (lower=better) | Startup Cost (lower=better) | Speed to Feedback | Likely Good First Review |
|---|---|---|---|---|---|---|---|---|---|---|---|
| A — Broken/finish Make scenario, single-scope | HIGH | MEDIUM* | HIGH | HIGH | HIGH | HIGH | MEDIUM | MEDIUM | HIGH | HIGH | MEDIUM-HIGH |
| A — Sheets/Zapier basic mapping/routing | HIGH | HIGH | HIGH | HIGH | HIGH | HIGH | LOW | MEDIUM | HIGH | HIGH | HIGH |
| A — n8n/GoHighLevel/Agents-tagged listings | MEDIUM | LOW | LOW | MEDIUM | LOW | MEDIUM | HIGH | MEDIUM | HIGH | MEDIUM | LOW |
| B — Agency subcontracting entry-level | MEDIUM | LOW | MEDIUM | MEDIUM | MEDIUM | LOW | MEDIUM | N/A (no door found) | HIGH | LOW | N/A |
| C — VA/research/data entry | HIGH | HIGH | HIGH | HIGH | HIGH | HIGH | LOW | HIGH (low floor, global) | HIGH | HIGH | MEDIUM-HIGH |
| C — Presentation/spreadsheet cleanup | HIGH | HIGH | HIGH | HIGH | HIGH | HIGH | LOW | MEDIUM-HIGH | HIGH | HIGH | HIGH |
| C — Market/competitive research brief | HIGH | MEDIUM | HIGH | HIGH | HIGH | HIGH | LOW | MEDIUM | HIGH | HIGH | MEDIUM-HIGH |

*A's scope-clarity is starred deliberately: this is exactly the axis that
failed on the "Ranking Order" job. Scope clarity for Lane A can only be
confirmed by opening the actual listing — it is rated MEDIUM here as a
category-level average, not a promise that any given listing is clear.

## Phase 3 beginner-safe filter, applied

- **PASS (proceed to scoring above):** Basic Sheets/Zapier/Make mapping,
  routing, and QA; presentation/spreadsheet cleanup; research briefs; VA
  admin support.
- **REJECT outright:** anything tagged with n8n, deep CRM API (GoHighLevel
  internals), "Agents" (implies custom AI-agent engineering), or any
  listing Steven cannot fully read before bidding — this last rule is the
  direct lesson from the correction and is now a standing filter, not a
  one-time fix.

## What "Claude could probably solve it" does NOT qualify

Per Phase 3's explicit instruction, several near-misses were excluded
specifically because AI capability alone isn't the bar:

- GoHighLevel-deep CRM automation: AI could likely draft the config, but
  Steven could not recognize scope creep inside an unfamiliar CRM's
  internals, and could not answer a client's follow-up question
  intelligently without guessing. **REJECT.**
- Any Lane B "implementation support" role requiring unsupervised handling
  of a client relationship: AI can draft communication, but Steven cannot
  yet judge when to escalate versus when to answer directly without
  training he doesn't have. **REJECT as a first move; revisit only with an
  agency willing to explicitly scope and supervise.**
