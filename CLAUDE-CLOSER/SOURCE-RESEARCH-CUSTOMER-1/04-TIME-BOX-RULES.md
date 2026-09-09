# 04 — Time-Box Rules

The $50 flat price only works if research time per row is actually
controlled. This is the rule that protects the economics — it's not
optional discipline, it's the difference between a fair hourly rate and a
bad one.

## The time limits

| Record type | Maximum time | What it looks like |
|---|---|---|
| **EASY** | 8 minutes | City/district site has a clear staff directory or department page naming the person, with an email printed on the page |
| **NORMAL** | 15 minutes | Level 1–3 don't have it, but Level 4 (council minutes/budget PDF) or a second official page resolves it |
| **DIFFICULT** | 25 minutes (hard cap) | Nothing at Levels 1–4; requires Level 5–7 (state RWA, state program, county) and still may not resolve |

## The rule when the limit is hit

If the time limit is reached **without a verified answer**:

1. Stop searching that record.
2. Mark it **PARTIAL** (or **UNAVAILABLE** if literally nothing was found —
   see `05-ROW-STATUS-SYSTEM.md` for the exact difference).
3. Record in `notes` exactly what was checked and what was found (e.g.,
   "checked city site, county site, and state RWA directory — no named
   contact publicly available; phone number from city site used instead").
4. Move to the next record. Do not go back and "just check one more
   thing" once the batch is moving — a second pass on flagged rows happens
   only at the end, as a deliberate step, not mid-flow.

## Modeling 20 records

Realistic mix, per the delivery simulation already done for this job:
roughly 40% easy, 40% normal, 20% difficult.

- 8 easy × ~6 min avg = 48 min
- 8 normal × ~12 min avg = 96 min
- 4 difficult × ~20 min avg (some hit the 25-min cap and get marked
  PARTIAL, some resolve faster) = 80 min

**Subtotal: ~224 minutes (~3.7 hours)** for the research itself, before QA.

Add the batch-level QA pass (`06-QA-CHECKLIST.md`) — spot-checking a
sample of "done" rows, scanning for duplicate contacts, confirming no
invented emails — call it another 20–30 minutes.

**Realistic total: ~4 hours.**

## Completion-time scenarios and gross hourly value at $50

| Completion time | Gross hourly value |
|---|---|
| 2 hours | $25.00/hr |
| 3 hours | $16.67/hr |
| 4 hours (realistic case) | $12.50/hr |
| 5 hours | $10.00/hr |

The time-box rules exist specifically to keep this batch closer to the
3–4 hour range than the 5+ hour range — a single tiny town allowed to run
to 45 minutes, repeated across even 3–4 of the 20 records, is what pushes
this into genuinely bad economics. The 25-minute hard cap on difficult
records is the single most important number in this whole file.
