# 22 — CODEX TRIGGERS

## THE HONEST HEADLINE

**Right now, Codex has almost nothing to do — and that is a finding, not a
gap.**

None of the four cash engines require software engineering:

| Engine | Engineering required? |
|---|---|
| E1 AI evaluation | **None.** Steven is the product. |
| E2 Agency subcontract | **None.** Documentation, QA, research — all writing and judgment. |
| E3 Contract roles | **None.** Applications and interviews. |
| E4 Productized services | **Minimal.** Sheets formulas and small AI-assisted Apps Script. |

If Steven finds himself using Codex heavily in the next 30 days, **that is a
warning sign** — it means he has drifted back toward building instead of
selling, which is the exact pattern that produced four proposals and zero
customers.

---

## THE DECISION TEST

Use Codex only when **all four** are true:

1. The output is **code, a repo, or a technical artifact** — not prose,
   research, or strategy.
2. It is **complex enough that Claude's inline help isn't sufficient** —
   multi-file, needs iteration, needs to actually run and be tested.
3. It **directly serves a paying engine or a proof asset** — not curiosity,
   not learning, not "this would be cool."
4. **Steven can inspect and explain the result.** If he can't understand what
   comes back, he cannot sell it, maintain it, or defend it — and shipping
   code he doesn't understand is how a client relationship ends badly.

**Any one fails → not a Codex job.**

---

## USE CODEX FOR

### 1. Building the P1 proof asset properly
The Form → Sheet → confirmation email → daily digest workflow in `07`.
Two Apps Script triggers, error handling, timezone handling on the scheduled
job. **Trigger condition:** Steven has tried with Claude's help and is stuck
on the timezone or trigger configuration.
**Constraint:** he must be able to walk through what every function does —
the proof piece explicitly claims he tested and documented it.

### 2. A reusable spreadsheet cleanup toolkit
An Apps Script or Python utility he runs on client files: dedupe with
configurable match rules, phone/email/state normalization, a change log, and
a reconciliation report showing where every removed row went.
**Why it qualifies:** turns a 3-hour job into a 1-hour job, **repeatedly**,
across Engine 4 and agency module M16. Real compounding leverage.
**Trigger:** after the **third** paid cleanup job — not before. Building
tooling for work he hasn't sold yet is the trap.

### 3. A QA test-harness template
A structured template that generates a test-case skeleton from a workflow
description, plus a bug-sheet format with consistent severity rules.
**Why:** serves agency modules M3, M4, M5 and the P4 proof piece.
**Trigger:** after the second paid QA pass.

### 4. Fixing an automation Steven has already sold
He took hourly work (per `15` Gate 3, always hourly), hit something he can't
debug, and the clock is running.
**Trigger:** he has spent **one hour** stuck.
**Constraint:** he must understand the fix before delivering it. "Codex fixed
it and I don't know how" is not a deliverable — it is a future support
disaster with his name on it.

### 5. Packaging proof assets
Converting a working demo into a clean, shareable, self-contained artifact —
sanitizing test data, generating a sample dataset, producing a runnable copy.
**Trigger:** when a proof piece is functionally done but messy.

### 6. A scoreboard that maintains itself
If manual scoreboard updates start getting skipped, a small Sheets + Apps
Script tool that pulls the weekly rollup and computes true $/hr.
**Trigger:** **only** if Steven has actually missed two weekly reviews.
Otherwise a plain spreadsheet is correct and building a tool is procrastination.

---

## DO NOT USE CODEX FOR

| Not this | Use instead |
|---|---|
| Research of any kind | Claude, or Antigravity for live browsing |
| Emails, outreach, applications, proposals | Claude |
| Strategy, prioritization, pricing | Claude / Astra |
| SOPs, documentation, reports | Claude |
| Résumés and profiles | Claude |
| Interview prep | Claude |
| Live browsing, job scouting, company research | Antigravity |
| Learning a new platform "for later" | **Nothing. Don't.** |
| Building a product with no buyer | **Nothing. Don't.** |
| Anything client-facing Steven can't explain | **Decline the work.** |

---

## THE THREE HARD RULES

**1. NEVER ship code Steven cannot explain.**
If a client asks "what does this do?" and the honest answer is "I'm not
sure," he has sold something he cannot support. That is worse than declining
the job, because it converts a lost opportunity into a damaged relationship.

**2. NEVER let Codex expand what Steven sells.**
Codex making something possible does not make it sellable. Selling it means
owning it — the 2am breakage, the "it stopped working" email six months
later, the client who now depends on it. Per `15` Gate 3, automation work is
**hourly only**, supervised, and bounded.

**3. NEVER build tooling before the work exists.**
Every tool in the "use for" list is triggered by a **count of jobs already
sold** — the third cleanup, the second QA pass. Building efficiency tools for
work Steven hasn't sold is the single most seductive form of procrastination
available to a technically-minded person, because it feels exactly like
progress.

---

## THE 30-DAY CODEX BUDGET

| Week | Expected Codex use |
|---|---|
| 1 | **Zero.** Proof pieces are writing, not engineering. |
| 2 | **Possibly one session** on P1's Apps Script triggers, if genuinely stuck. |
| 3 | **Zero.** |
| 4 | **Zero**, unless paid automation work has actually been sold. |

**Expected total for the month: 0-2 sessions.**

If Steven has used Codex ten times by week 3, the correct response is not to
celebrate productivity. It is to ask: **what did I build, who is paying for
it, and what did I stop doing to build it?**

## THE REVISIT TRIGGER
Reassess Codex's role once Steven has **three paying clients or a running
contract**. At that point tooling has a real ROI because there is real
repeated work to compress. Until then, the highest-value thing Codex can do
is stay unused.
