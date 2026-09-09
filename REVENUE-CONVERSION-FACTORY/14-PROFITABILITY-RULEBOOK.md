# 14 — DELIVERY PROFITABILITY RULEBOOK

**Run this before accepting any paid work. Every time. No exceptions for
"this one feels different."**

---

## THE CALCULATOR

```
TRUE EFFECTIVE HOURLY RATE
==========================

  NET PAY  =  PRICE  −  platform fee  −  cost of Connects/bids spent

  TOTAL HOURS =  Scoping & comms
              +  Setup / access / intake
              +  Core delivery
              +  Failed work & rework          ← the one people skip
              +  QA & verification
              +  Revisions (expected, not hoped)
              +  Handover & follow-up
              +  Acquisition hours ÷ win rate  ← the one that decides it

  TRUE RATE = NET PAY ÷ TOTAL HOURS
```

**The two lines people skip are the two that decide the answer.**

**Failed work multiplier — apply honestly:**

| Work type | Multiplier on core delivery |
|---|---|
| Known, done before | **1.2x** |
| Similar, new client | **1.5x** |
| New type of work | **2.0x** |
| Verification/sourcing at volume | **2.5x** |
| Anything technical Steven can't debug unaided | **3.0x** |

That last row is not pessimism. It is the honest cost of grade-B skill: when
AI-generated code is wrong, finding out why takes longer than writing it.

**Acquisition hours ÷ win rate — the multiplier nobody models:**

| Channel | Hrs to win one job | Effective add per job |
|---|---|---|
| Warm network | 0.2 | negligible |
| Agency (established relationship) | 0.2 | negligible |
| Agency (first job) | 10-25 hrs, amortized over the relationship | 1-3 hrs |
| Contract application | ~0 at delivery (salaried) | 0 |
| **Upwork cold, no reviews** | **3-5 hrs (10-20 proposals)** | **3-5 hrs** |
| Fiverr (after ranking) | 0.3 | negligible |

> **This single table explains the entire strategy.** Identical work,
> identical delivery hours, and the true rate varies by **3x** purely by
> channel.

---

## WORKED EXAMPLES — using Steven's four real proposals

### The $225 firefighter research (fixed, cold Upwork)
Scoping 1 + research 10 + verification 2 + writing 2.5 + revisions 1.5 = 17 hrs
core. Failed-work multiplier for volume verification: already included.
Acquisition: ~4 hrs (proposals that didn't win).
Net: $225 − 10% fee − ~$1 Connects = **$201.50**
**$201.50 ÷ 21 hrs = $9.60/hr** → **RED.**

### The $150 Google Forms + QR (fixed, cold Upwork)
Scoping 0.5 + build 2 + testing 1 + QR/docs 0.5 + revisions 1 = 5 hrs.
New-type multiplier 1.5x on the build → 6 hrs. Acquisition ~4 hrs.
Net: $150 − 10% = **$135**
**$135 ÷ 10 hrs = $13.50/hr** → **RED** (barely above floor, before any surprise).

### The $28/hr Sheets merge (hourly, cold Upwork)
Delivery paid at $28. Acquisition ~4 hrs unpaid across proposals.
If the contract runs **5 hrs**: $140 − 10% = $126 ÷ 9 hrs = **$14/hr** → YELLOW.
If it runs **20 hrs**: $504 ÷ 24 hrs = **$21/hr** → **GREEN.**

> **The lesson in one line: on hourly work, contract *length* matters more
> than rate.** A $28/hr job that runs 20 hours beats a $40/hr job that runs
> three. Always ask "how many hours do you expect?" before celebrating a rate.

### The same $150 of work, delivered for an agency that sent it
Delivery 5 hrs. Acquisition ~0.2 hrs. No platform fee.
**$150 ÷ 5.2 = $28.80/hr** → **GREEN.**

---

## THE ELEVEN QUESTIONS

Ask all eleven, in order, before saying yes.

1. **Hourly or fixed?** Fixed with unknowns → stop, restructure.
2. **What unknowns exist?** Name them out loud. Can't name them → that *is*
   the unknown.
3. **Can I inspect the output?** If Steven can't verify it's right, he can't
   deliver it safely.
4. **Can AI safely assist?** Reading/structuring/drafting → yes.
   Building/debugging/designing → no compression, price accordingly.
5. **What must I personally understand?** If the answer is "more than I do" →
   hourly or decline.
6. **What can go wrong?** Write down the three worst outcomes. Any of them
   catastrophic and uninsurable → decline.
7. **How many failed attempts per successful output?** Verification work at
   volume: assume **2-4 screened per 1 delivered**.
8. **How much QA?** Typically **25-40%** of core delivery time. Not optional.
9. **What's my revision exposure?** Capped in writing → fine. Uncapped →
   hourly only.
10. **What's the platform fee?** Upwork 0-15% (model 10%). Contra 0%. Direct 0%.
11. **What's the true effective rate?** Run the calculator. **This number
    decides, not enthusiasm.**

---

## GREEN / YELLOW / RED

### 🟢 GREEN — accept
- True rate **≥ $25/hr**
- Hourly, **or** fixed with a countable deliverable ≤ 4 hrs
- Steven can explain the whole delivery in three sentences
- All unknowns named and bounded
- Buyer is warm, referred, or an established relationship
- Revisions capped in writing
- Failure mode is "it's not great," not "something breaks"

### 🟡 YELLOW — accept only with a restructure
- True rate **$15-25/hr**
- Some unknowns, but they're identifiable
- New type of work with real skill-building value
- Cold buyer with verified payment and hire history

**Required restructures — do at least one:**
- Convert fixed → hourly
- Insert a paid trial: *"Let's start with 2 hours / $150 on the smallest real
  slice, then scope the rest accurately"*
- Cut scope until it's countable and ≤4 hrs
- Raise the price to clear $25/hr at the **worst** honest hour estimate
- Cap revisions in writing

**Restructure refused → treat as RED.**

### 🔴 RED — decline, regardless of how much Steven wants the work
- True rate **< $15/hr**
- Fixed price on open-ended scope *(the #1 killer — proposals #2 and #3)*
- Any research with an **open source list** at fixed price
- **Any** automation or Apps Script work at fixed price. Always.
- Steven can't inspect or verify the output
- Requires grade-D skill (n8n, CRM implementation, SQL, security)
- Live production system access without supervision
- Buyer unverified, $0 spend, vague post
- Unpaid test over 30 minutes
- Deliverable size wildly out of proportion to budget
- Steven can't explain the delivery plan out loud
- **Gut says something's off** — this is a legitimate RED and it is usually right

---

## THE FIVE STANDING RULES

**1. DEFAULT TO HOURLY.** Fixed price is the exception and must be earned.

**2. Fixed price requires ALL FIVE:**
countable deliverable · done this exact thing before · ≤4 hrs estimated ·
revisions capped in writing · **≥$30/hr at the worst honest hour estimate**.
Any one fails → hourly or decline.

**3. FIXED PRICE IS FORBIDDEN on:** open-scope research · unseen data ·
**any** automation or scripting · undefined "done" · first engagement with an
unverified buyer.

**4. THE PAID-TRIAL SCRIPT** — use it everywhere:
> "Rather than guess at a fixed price, let's start with a small paid piece —
> 2 hours or $150 on [smallest real slice]. You see the quality on something
> real, I see the actual data, and then we scope the rest accurately. If it's
> not right, you've risked two hours."

De-risks the buyer (raising win rate), caps Steven's downside, and converts
an unknown into a measurement. It does three jobs with one sentence.

**5. MILESTONES.** If a client insists on fixed price for something large:
break into milestones **≤$300 each**, independently scoped and escrow-funded,
with the right to re-scope between them. Never one large milestone.

---

## THE FLOOR
**$15/hr true effective rate is the hard floor.** Below it, Steven is
converting scarce hours into less than his opportunity cost, and — worse —
into evidence that the wrong strategy is working.

**Exceptions, and there are only three:**
1. It produces a **case study or testimonial** he can't get otherwise
   *(once, deliberately, for a named purpose)*
2. It builds a **specific skill** with a named next use
3. It opens a **relationship** with real repeat potential *(an agency's
   first $150 pilot — this one is explicitly designed as a loss leader)*

**Never for "it might lead to something."** That is not a reason, it is a hope.

---

## THE POST-MORTEM (5 minutes after every job — this is how the rulebook learns)
1. Estimated hours vs **actual** hours?
2. What did I not anticipate?
3. What was the true effective rate?
4. Would I take this again at this price?
5. **What multiplier should I have used?** → update the table above.

After five jobs Steven's estimates stop being guesses. That is worth more
than any single contract in this pack.
