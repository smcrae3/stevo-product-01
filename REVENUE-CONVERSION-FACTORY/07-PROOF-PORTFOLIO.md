# 07 — PROOF PORTFOLIO

## THE ARCHITECTURE

**Every piece carries this label, visibly, at the top:**

> **DEMONSTRATION — NOT CLIENT WORK**
> Built to show method and standard of finish. No client data, no real
> customer names, no engagement implied.

This is not a disclaimer to hide. **It is a selling point.** Agency owners
and hiring managers have seen a hundred portfolios with vague implied
clients. A person who volunteers "this is a demonstration, here's exactly
what I did and what AI did" reads as someone who will also tell them the
truth when a project is going badly. That is the single most valuable signal
a new subcontractor can send.

**Absolute rules:**
- No fake testimonials. Not one. Not even "a client said."
- No invented company names presented as real engagements.
- No implied roster ("clients like…", "teams I've worked with…").
- Every piece states **what Steven did** and **what AI did**.
- Real screenshots of real systems Steven actually built or used.

**Hosting:** one Google Drive folder, public link, PDFs.
`Steven McRae — Work Samples` → six PDFs + a one-page index.
Link it from every application, every profile, every outreach message.

**Build order and time budget (total ~9-11 hrs across 2 weeks):**
P3 SOP (2 hr) → P4 QA sheet (1.5 hr) → P1 Sheets/Apps Script (2 hr) →
P2 research (2 hr) → P6 CS analysis (1.5 hr) → P5 requirements brief (1 hr).

**P3 and P4 alone unlock Engines 2, 3, and 4.** If Steven only ever builds
two, build those two. Everything after is upside.

---

## P1 — GOOGLE SHEETS / APPS SCRIPT WORKFLOW PROOF

**TITLE:** *Form-to-Sheet Intake with Automated Confirmation and Daily Digest*

**PROBLEM.** A small service business collects requests by email. Nothing is
tracked, nothing is acknowledged, and the owner re-reads the inbox each
morning to figure out what's outstanding.

**INPUT.** A Google Form (7 fields), a destination Sheet, a Gmail account.

**PROCESS.** Form → structured Sheet with validation and a status column →
Apps Script trigger sends a confirmation email on submit → a second
time-driven trigger sends the owner a daily digest of open items → a status
tab summarizes counts by state.

**OUTPUT.** Live working form, structured sheet, two working scripts,
annotated screenshots of a real submission flowing end to end, and a 1-page
maintenance note.

**WHAT STEVEN DID.** Designed the field structure and validation rules.
Defined the statuses and the digest logic. Tested with 12 deliberately messy
submissions including blanks, duplicates, and a bad email address. Found and
fixed the case where a blank required field silently wrote an empty row.
Wrote the maintenance note.

**WHAT AI DID.** Wrote the initial Apps Script for both triggers, and helped
debug the timezone handling on the daily trigger.

**WHAT WAS VERIFIED.** Every submission path tested manually. Confirmation
email received and inspected. Digest verified across a date boundary.
Duplicate handling confirmed.

**SCREENSHOTS NEEDED.** Form as the user sees it · Sheet with real test rows
and the status column · the script editor showing both trigger functions ·
the received confirmation email · the daily digest email · the trigger
configuration screen.

**WHAT IT PROVES.** Steven can design a working intake workflow, test it
adversarially, and document it so someone else can maintain it.

**WHAT IT DOES NOT PROVE.** That he can write Apps Script unaided; that he
can architect or debug a complex production integration; that he has done
this at client scale. **State this explicitly on the sample.**

---

## P2 — SOURCE-CHECKED RESEARCH PROOF

**TITLE:** *Vendor Shortlist — Scheduling Software for a 12-Person Service Business*

**PROBLEM.** An owner needs to choose a scheduling tool and has neither the
time nor the criteria to compare eight options honestly.

**INPUT.** A stated requirement set: ≤$150/mo, mobile app for techs, Google
Calendar sync, SMS reminders, ≤2 weeks to implement.

**PROCESS.** Criteria defined first → 8 candidates identified → each scored
against the criteria → pricing verified **on the vendor's own pricing page**
on a stated date → 3 finalists with tradeoffs → an explicit recommendation
with the reasoning shown.

**OUTPUT.** 3-page brief: criteria matrix, 8-row comparison table, three
finalists with pros/cons, one recommendation, and a source column with a URL
and access date for every single factual claim.

**WHAT STEVEN DID.** Defined the criteria. Opened and verified every pricing
page personally. Rejected two AI-suggested candidates that turned out to be
discontinued or repriced. Wrote the tradeoff reasoning.

**WHAT AI DID.** Generated the initial candidate list and drafted the
comparison table structure.

**WHAT WAS VERIFIED.** **Every URL opened by hand.** Every price confirmed
on the vendor's live pricing page with the date recorded. Two AI-supplied
"facts" were found wrong and corrected — **and the sample says so, in a
short "corrections made" note.**

That corrections note is the most valuable paragraph in the whole portfolio.
It is direct evidence that Steven catches AI errors instead of forwarding
them, which is precisely what a buyer of research is paying for.

**SCREENSHOTS NEEDED.** The criteria matrix · the comparison table · the
source column with URLs and dates · the corrections note.

**WHAT IT PROVES.** Verification discipline. That AI output goes through a
human who checks it.

**WHAT IT DOES NOT PROVE.** Domain expertise in scheduling software; the
ability to do regulated or paywalled-database research.

---

## P3 — SOP / PROCESS DOCUMENTATION PROOF ⭐ BUILD FIRST

**TITLE:** *SOP — Handling an Inbound Service Request from Form to Closed*

**PROBLEM.** The process lives in one person's head. A new hire needs three
weeks and constant interruptions to learn it.

**INPUT.** A 30-minute recorded walkthrough of the P1 workflow being operated.

**PROCESS.** Record → transcript → AI structural draft → **Steven walks every
step in the live system and corrects the draft** → screenshots → exceptions
section → test on a reader who doesn't know the process → revise where they
got stuck.

**OUTPUT.** A 3-page SOP: Purpose · When to use · Prerequisites · 9 numbered
steps with annotated screenshots · Exceptions and edge cases · Escalation ·
Version and date.

**WHAT STEVEN DID.** Ran the interview, including the two questions that
produce the real content — *"What goes wrong most often?"* and *"What would
you tell a new person that isn't written anywhere?"* Walked every step
himself. Wrote the exceptions section (the AI draft had none, because
exceptions never appear in a happy-path transcript). Tested it on a naive
reader and rewrote steps 4 and 7 where they got stuck.

**WHAT AI DID.** Transcribed the recording and produced the first structural
draft.

**WHAT WAS VERIFIED.** Every step performed by Steven in the live system.
Every screenshot current. Reader-tested end to end.

**SCREENSHOTS NEEDED.** Page 1 with the header block · a numbered step with
an annotated screenshot · the exceptions table · the version/change log.

**WHAT IT PROVES.** He can turn undocumented tacit knowledge into something
a new person can follow. **This is the single most commercially valuable
proof piece he owns** — it serves Engine 2 (Offer 1), Engine 3 (SOP writer
roles at $28-47/hr), and Engine 4 (the $250 SOP product).

**WHAT IT DOES NOT PROVE.** Experience documenting complex enterprise or
regulated processes.

---

## P4 — QA / TEST-CASE PROOF ⭐ BUILD SECOND

**TITLE:** *Pre-Delivery QA Pass — Intake Automation*

**PROBLEM.** Builds ship on the happy path and break the first time a real
user does something unexpected.

**INPUT.** The P1 workflow and a written statement of what it should do.

**PROCESS.** Derive test cases from the spec → happy path → edge cases →
deliberate failure modes → execute each → reproduce every failure **twice**
before logging it → severity-rank → suggest a fix for each.

**OUTPUT.** Two artifacts: a **test-case sheet** (18 cases: 6 happy path, 8
edge, 4 failure) and a **bug sheet** (7 findings: 2 critical, 3 medium, 2
cosmetic) with ID / severity / repro steps / expected vs actual / screenshot
/ suggested fix.

**WHAT STEVEN DID.** Designed every test case, including the ones the builder
wouldn't think of — double submission, a blank required field, an apostrophe
in a name, a submission at 11:59pm crossing the digest boundary. Executed
all 18. Reproduced each failure twice. Wrote the repro steps precisely enough
that someone else can follow them.

**WHAT AI DID.** Suggested an initial test-case list, which Steven extended
with the four edge cases that actually found bugs.

**WHAT WAS VERIFIED.** Every logged bug reproduced twice. Every repro step
followed from scratch to confirm it works as written.

**SCREENSHOTS NEEDED.** The test-case sheet · the bug sheet · one bug's
screenshot evidence · a before/after of one fix.

**WHAT IT PROVES.** Structured, adversarial thinking and the discipline to
write a bug report an engineer can act on without asking questions.

**WHAT IT DOES NOT PROVE.** Automated testing, security or load testing,
QA at enterprise scale.

---

## P5 — REQUIREMENTS / IMPLEMENTATION BRIEF

**TITLE:** *Requirements Summary from a Discovery Call*

**PROBLEM.** Discovery calls produce a recording nobody re-listens to, and
half the requirements are lost or misremembered by build time.

**INPUT.** A 20-minute mock discovery call (Steven plays both roles, or uses
a public sample call — **stated openly on the sample**).

**PROCESS.** Transcript → extract must-have / nice-to-have / explicitly out
of scope → list assumptions → **list open questions rather than resolving
them silently** → flag risks.

**OUTPUT.** 2-page brief: Objective · Must-have (7) · Nice-to-have (4) ·
Out of scope (3) · Assumptions (5) · **Open questions (6)** · Risks (3) ·
Suggested next step.

**WHAT STEVEN DID.** Separated what was actually said from what was implied.
Wrote the open-questions list — the section that prevents the expensive
misunderstanding. Flagged the two places where the client contradicted
themselves.

**WHAT AI DID.** Transcribed and produced the first extraction pass.

**WHAT WAS VERIFIED.** Every requirement traced back to a specific timestamp
in the transcript.

**SCREENSHOTS NEEDED.** The brief · the open-questions section · the
requirement-to-timestamp trace.

**WHAT IT PROVES.** Requirements-gathering discipline, and the judgment to
surface ambiguity instead of guessing — the difference between a useful
summary and a dangerous one.

**WHAT IT DOES NOT PROVE.** Business-analyst experience on a real project.

---

## P6 — CUSTOMER-SERVICE PROCESS IMPROVEMENT ANALYSIS

**TITLE:** *Ticket Theme Analysis and Deflection Opportunities*

**PROBLEM.** A support team answers the same questions repeatedly and nobody
has counted which ones.

**INPUT.** 100 synthetic support tickets Steven writes from patterns he saw
first-hand at T-Mobile — **clearly labeled as synthetic, no real customer
data, ever.**

**PROCESS.** Classify by theme → count frequency → estimate handling time →
identify the top 5 deflection opportunities → rank by (volume × time) ÷
effort to fix → write coaching notes for the two themes with the worst
resolution quality.

**OUTPUT.** 3-page analysis: theme table with frequency and estimated time,
top 5 deflection opportunities ranked, two coaching notes, and a
recommended first action.

**WHAT STEVEN DID.** **All of it — this is the one piece where his
professional experience is the substance, not the framing.** Built the
classification scheme from real observed patterns. Wrote the coaching notes
from actual quality-review experience. Judged which deflections are realistic
versus which just push the problem to another channel.

**WHAT AI DID.** Helped format the tables and tighten the prose. **The
analysis and judgment are entirely Steven's.**

**WHAT WAS VERIFIED.** The classification scheme applied consistently across
all 100 tickets, then re-checked on a 20-ticket sample for drift.

**SCREENSHOTS NEEDED.** The theme table · the ranked deflection list · a
coaching note.

**WHAT IT PROVES.** That Steven's customer-service background is an
analytical asset, not just a job history. **This is his most defensible
piece** — nobody can out-credential him on his own experience.

**WHAT IT DOES NOT PROVE.** Work with real production support data, or
experience with a specific helpdesk platform.

---

## THE INDEX PAGE (first PDF in the folder)

> **Steven McRae — Work Samples**
> Augusta, GA · [email] · [phone] · [LinkedIn]
>
> **All six pieces are demonstrations, not client work.** I'm building a
> freelance and contract practice in documentation, QA, research, and
> operations support. Rather than describe what I can do, these show the
> method and the standard of finish, and each one states plainly what I did
> and what AI assisted with.
>
> 1. **SOP — Inbound Service Request** — process documentation
> 2. **Pre-Delivery QA Pass** — test cases and bug reporting
> 3. **Form-to-Sheet Intake Workflow** — Google Sheets / Apps Script
> 4. **Vendor Shortlist** — source-checked research
> 5. **Requirements Summary** — discovery-call extraction
> 6. **Ticket Theme Analysis** — customer-service operations
>
> Background: [X] years in customer service and retention at T-Mobile —
> quality review, requirements gathering, and explaining complicated things
> to frustrated people. I'm applying that upstream.

## WHAT THIS PORTFOLIO DELIBERATELY DOES NOT DO
- It does not claim clients. There are none yet, and pretending otherwise
  would collapse on the first reference check.
- It does not hide AI assistance. Disclosing it is what makes the
  verification claims credible.
- It does not overstate the technical pieces. P1 says outright that Steven
  cannot write Apps Script unaided — which is what makes the rest believable.
