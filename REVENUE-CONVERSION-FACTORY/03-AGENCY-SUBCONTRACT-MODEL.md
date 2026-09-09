# 03 — AGENCY SUBCONTRACT MODEL (18 SERVICE MODULES)

## THE STRUCTURAL ARGUMENT, IN FOUR LINES

1. Small agencies bill for **build hours**.
2. Every build drags a non-billable tail: docs, QA, research, cleanup, handoff.
3. The tail gets done badly, late, by the most expensive person, on a Friday.
4. Bad handoff → support tickets → churn. It costs them money and they know it.

They will not hire full-time for the tail. They will pay per unit. **That
tail is Steven's A-grade skill set**, not his grade-B technical one — which
is exactly why this works.

## TARGET AGENCY CATEGORIES, RANKED

| Rank | Category | Pain | Best module | Why |
|---|---|---|---|---|
| 1 | **Automation agencies** (Make/Zapier/n8n) | Ship fast, document never | M1, M4 | Steven speaks enough of the language to be useful |
| 2 | **No-code agencies** (Bubble/Airtable/Webflow) | Handoff docs, user guides | M1, M2 | Same, plus heavy end-user documentation need |
| 3 | **Small RevOps / process consultancies** | Sell process, hate writing it up | M6, M7 | Pure A-grade fit |
| 4 | **AI implementation shops** | Everything is new, nothing is written | M1, M9, M14 | AI-output QA is a brand-new felt need |
| 5 | **Marketing-ops agencies** | Constant research, thin margins | M10, M11 | High volume, low liability |
| 6 | **CRM consultants** | Data migration prep, user docs | M12, M13 | Prep only — never the live import |
| 7 | **Process-improvement firms** | Doc production bottleneck | M6, M7 | |
| 8 | **Customer-experience consultancies** | Ticket analysis, CS process | M17, M18 | **T-Mobile CSR background is real credibility here** |
| 9 | **Research agencies** | Overflow, verification | M10, M15 | |
| 10 | **VA agencies** | Capacity spikes | M16 | Rate floor near Steven's minimum — backup only |
| 11 | **Content-ops agencies** | Fact-checking AI drafts | M14 | Growing fast |
| 12 | **MSPs / IT shops** | Runbooks, client documentation | M6, M8 | Underserved, real budgets |

Start with **1, 2, 3**. Shortest decision chain — the owner decides alone,
in one conversation, without procurement.

---

## THE 18 SERVICE MODULES

Ordered by **how easy it is for an agency owner to say yes**, not by price.

### M1 — CLIENT HANDOFF PACKET
- **Input:** access to the finished build + 30-min walkthrough with the builder
- **Output:** 4-8 page packet — what was built, how it works, how to use it,
  what to do when it breaks, who to contact, screenshots
- **Time:** 3-5 hrs · **Price:** $250-400 or $30-40/hr
- **AI leverage:** HIGH (structure + first draft from the transcript)
- **Human QA:** Walk every documented step in the live system. Every one.
- **Out of scope:** modifying the build; supporting the end client directly
- **SOP:** record walkthrough → AI transcript → AI draft → **Steven walks
  each step and corrects** → screenshots → agency template → self-QA → deliver
- **Why lead with this:** highest felt pain. It is what gets a reply.

### M2 — END-USER GUIDE / TRAINING DOC
- **Input:** the build + who the end users are + their skill level
- **Output:** task-oriented user guide, written for a non-technical reader
- **Time:** 3-5 hrs · **Price:** $250-400
- **AI:** HIGH · **QA:** test the instructions on someone who doesn't know
  the system — if they get stuck, the doc is wrong, not the reader
- **Out of scope:** video production, LMS setup
- **SOP:** identify the 5-8 tasks users actually perform → document each as a
  standalone path → screenshot → test → deliver

### M3 — PRE-DELIVERY QA PASS
- **Input:** access + spec of what it should do
- **Output:** bug sheet — issue / severity / repro steps / expected vs actual /
  screenshot / suggested fix
- **Time:** 2-4 hrs · **Price:** $150-300 or $25-35/hr
- **AI:** MEDIUM (test-case generation) · **QA:** every bug reproduced twice
  before it goes on the sheet
- **Out of scope:** **fixing anything.** Steven reports; the agency fixes.
- **Why this is the safest module in the pack:** he finds problems, he cannot
  cause them. Zero liability. Easiest first yes.

### M4 — AUTOMATION TEST-CASE SET
- **Input:** workflow description or scenario export
- **Output:** structured test cases — happy path, edge cases, failure modes,
  expected behavior — as a reusable sheet
- **Time:** 2-4 hrs · **Price:** $175-300
- **AI:** HIGH · **QA:** Steven must understand the workflow well enough to
  invent a case the builder didn't think of. That is the value.
- **Out of scope:** building error handling

### M5 — REGRESSION CHECKLIST
- **Input:** existing build + change history
- **Output:** a repeatable "check these 20 things before every release" sheet
- **Time:** 2-3 hrs · **Price:** $150-250
- **AI:** MEDIUM · **Out of scope:** automated test infrastructure
- **Note:** natural retainer conversion — they use it every release

### M6 — SOP PRODUCTION (internal or client-facing)
- **Input:** 30-min recorded interview with whoever does the work
- **Output:** 2-4 page SOP — purpose, when to use, prerequisites, numbered
  steps with screenshots, exceptions, escalation, version + date
- **Time:** 2-4 hrs · **Price:** $200-350 or $30-40/hr
- **AI:** HIGH · **QA:** walk the steps; test on a naive reader
- **Out of scope:** changing the process, only documenting it
- **The two questions that make it good:** *"What goes wrong most often?"* and
  *"What would you tell a new person that isn't written anywhere?"*

### M7 — PROCESS MAP / CURRENT-STATE WRITE-UP
- **Input:** 30-min call + any existing artifacts
- **Output:** visual map, decision points, bottlenecks, ranked automation
  candidates by effort/impact
- **Time:** 4-6 hrs · **Price:** $300-500
- **AI:** HIGH · **Out of scope:** implementing anything
- **Note:** excellent paid discovery — it *sells* the agency's next phase

### M8 — RUNBOOK / OPERATIONS MANUAL
- **Input:** system access + failure history
- **Output:** "when X breaks, do Y" runbook with escalation paths
- **Time:** 3-5 hrs · **Price:** $250-400
- **AI:** MEDIUM · **QA:** verify every recovery step actually works
- **Out of scope:** being on call

### M9 — IMPLEMENTATION CHECKLIST / ONBOARDING PACKET
- **Input:** their standard delivery process
- **Output:** reusable client-onboarding checklist — kickoff, access,
  milestones, sign-off gates
- **Time:** 3-4 hrs · **Price:** $250-400
- **AI:** HIGH · **Note:** reusable across all their clients → high perceived value

### M10 — WHITE-LABEL RESEARCH PACK
- **Input:** research question + their template + source constraints
- **Output:** sourced research brief, every claim cited, on their brand
- **Time:** 3-5 hrs · **Price:** $200-400 or $25-35/hr
- **AI:** HIGH · **QA:** **every citation opened and verified.** One
  fabricated source ends the relationship permanently.
- **Out of scope:** paywalled/proprietary databases; regulated-domain advice

### M11 — COMPETITOR / MARKET SNAPSHOT
- **Input:** market + named competitors
- **Output:** 8-12 competitor grid, positioning summary, sourced appendix
- **Time:** 3-5 hrs · **Price:** $250-400
- **AI:** HIGH · **Out of scope:** strategic recommendations Steven can't defend

### M12 — DATA MIGRATION PREP
- **Input:** source export + target field schema
- **Output:** mapped, cleaned, deduped, validated file ready to import +
  exceptions log + mapping doc
- **Time:** 4-8 hrs · **Price:** $300-600 or $30-40/hr
- **AI:** HIGH · **QA:** row counts reconciled; spot-check 5%
- **Out of scope:** **performing the import.** Prep only. The agency or
  client presses the button. This boundary is non-negotiable — it is what
  keeps a data disaster from being Steven's.

### M13 — LEAD-LIST VERIFICATION
- **Input:** their existing list
- **Output:** verified / unverified / dead, with a source column and a
  rejects log
- **Time:** 3-6 hrs · **Price:** $175-350
- **AI:** HIGH · **QA:** spot-check 10%
- **Pricing rule:** **price per verified row, never per row attempted.**
  A 500-row "verified" list can require screening 1,500 candidates.

### M14 — AI-OUTPUT VERIFICATION PASS
- **Input:** their AI-drafted deliverable
- **Output:** claim-by-claim check — verified / corrected / unverifiable —
  with sources and confidence flags
- **Time:** 2-4 hrs · **Price:** $175-350
- **AI:** MEDIUM · **QA:** total. This *is* QA.
- **Why it matters now:** agencies ship AI-drafted work and are quietly
  terrified of a hallucination reaching a client. New category, real fear.

### M15 — REQUIREMENTS SUMMARY FROM CALL RECORDINGS
- **Input:** discovery-call recording
- **Output:** structured requirements — must-have, nice-to-have, out of
  scope, open questions, assumptions, risks
- **Time:** 1-2 hrs · **Price:** $150-250
- **AI:** VERY HIGH · **QA:** flag every ambiguity rather than resolving it
  silently — the open-questions list is the most valuable section
- **Note:** fastest module. Highest $/hr. Natural retainer.

### M16 — SPREADSHEET CLEANUP & NORMALIZATION
- **Input:** the messy file + written definition of "clean"
- **Output:** cleaned file + change log + rules doc so it stays clean
- **Time:** 2-5 hrs · **Price:** $150-300
- **AI:** HIGH · **QA:** row counts, spot-checks, no silent data loss
- **Out of scope:** ongoing maintenance unless retained

### M17 — SUPPORT-TICKET / CS QUALITY REVIEW
- **Input:** ticket or transcript export (anonymized)
- **Output:** scored sample, top themes with frequency, deflection
  opportunities, coaching notes
- **Time:** 4-8 hrs · **Price:** $300-600
- **AI:** HIGH · **Steven's edge:** real T-Mobile CS quality-review
  experience. This is the one module where he has *direct, unaided,
  professional* credibility. Underused.

### M18 — CLIENT-FACING REPORT ASSEMBLY
- **Input:** their raw data/findings + template
- **Output:** assembled, proofed, consistent client report
- **Time:** 2-4 hrs · **Price:** $150-300
- **AI:** MEDIUM · **Out of scope:** design/branding work

---

## PRICING & POSTURE RULES

1. **Fixed price only when the deliverable is countable and ≤4 hours.**
   Everything else hourly. (See `14`.)
2. **First engagement: a $150-300 paid pilot.** Never free. Free work
   signals no price and attracts agencies that never convert.
3. **Never contact their clients. Ever.** One violation ends the channel
   permanently, and the agency world talks.
4. **Three live relationships minimum.** Single-agency dependence is how the
   rate gets compressed with no counter.
5. **Turnaround is the differentiator, not price.** Delivering in 48 hours
   when they expected a week beats being $5/hr cheaper — and it is the one
   variable Steven fully controls on day one.
6. **Deliver early. Every time.** This is the entire retention strategy.

## THE UNIVERSAL DELIVERY SOP (applies to all 18)

1. **Intake, 15-30 min.** Who's the end client? What's the deliverable?
   Template? What is "done"? Deadline? What access — and what must I not touch?
2. **Restate scope in writing. Get a yes.** One paragraph. This single step
   prevents most scope disputes.
3. Gather source material.
4. **AI first draft — raw material, never the deliverable.**
5. **Steven's verification pass.** Every step, claim, and screenshot checked
   against the real system. *This pass is the product.*
6. Format to their template and voice.
7. Self-QA against the module checklist.
8. **Deliver early** with a 3-line note: what's included, what's not, what
   he'd flag.
9. Ask one question that shows he understood their business. This is how a
   one-off becomes a retainer.

## THE LADDER INSIDE ONE ACCOUNT
**M3 (QA, easiest yes) → M1 (docs, biggest pain) → M10/M15 (research) →
M12/M16 (data) → supervised build-assist.**
Each rung raises rate and trust. Most of Steven's revenue growth in this
engine comes from **climbing inside existing accounts**, not from finding
new agencies.
