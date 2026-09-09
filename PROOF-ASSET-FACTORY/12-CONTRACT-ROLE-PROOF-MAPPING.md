# 12 — CONTRACT ROLE PROOF MAPPING

Which asset supports which role family, which résumé bullet it backs up,
and which interview story it enables. Role families match the prior
mission's `10-CONTRACT-ROLE-ENGINE.md`.

---

## PROCESS DOCUMENTATION SPECIALIST

**Best asset:** SOP / Process Documentation (all three files)
**Résumé bullet it supports:** "Produced a complete SOP from a
process-interview approach, including decision logic, exception handling,
and escalation rules — validated for internal consistency and
reader-testability."
**Interview story it supports:** *"Walk me through how you'd document a
process you know nothing about."* → Point directly to the two questions
used to build the exceptions section (what goes wrong most often; what
would you tell a new hire that isn't written anywhere) and to the process
map showing how exception and escalation paths rejoin the main flow.

## OPERATIONS COORDINATOR

**Best asset:** SOP / Process Documentation + Requirements Brief
**Résumé bullet it supports:** "Designed operational workflows including
role assignment logic, status tracking, and escalation triggers for a
customer-intake process."
**Interview story it supports:** *"Tell me about organizing something
chaotic."* → Describe the SOP's routing table (subject-area → owner) as a
concrete example of turning "whoever's available handles it" into a
repeatable assignment rule.

## IMPLEMENTATION COORDINATOR

**Best asset:** Requirements / Implementation Brief
**Résumé bullet it supports:** "Authored a requirements brief for a data-
consolidation project, including functional/nonfunctional requirements,
explicit assumptions, and a documented open-questions list."
**Interview story it supports:** *"How do you gather requirements from
someone who doesn't know what they want?"* → Reference the brief's Open
Questions section — specifically Question 1 (is the identifier truly
unique) — as an example of surfacing a question that changes the technical
design, rather than assuming an answer and building the wrong thing.

## JUNIOR BUSINESS ANALYST

**Best asset:** Requirements / Implementation Brief
**Résumé bullet it supports:** "Distinguished confirmed requirements from
assumptions in a technical brief; defined acceptance criteria and an
explicit out-of-scope boundary to prevent scope creep."
**Interview story it supports:** *A story about scoping discipline.* →
Point to the Out of Scope section as evidence of proactively bounding a
project rather than letting it expand, and the Acceptance Criteria as
evidence of defining "done" before work starts.

## QA ANALYST

**Best asset:** QA / Workflow Testing pack (all three files)
**Résumé bullet it supports:** "Designed and executed 38 test cases against
a multi-step automated workflow, including failure-simulation and
structural-fragility scenarios; documented 8 findings with severity
ranking and reproduction steps."
**Interview story it supports:** *"How do you approach testing something
you didn't build?"* → Walk through the four-category testing priority
(happy path → invalid input → simulated failure → structural fragility)
and the pattern-level finding ("silent failure" as a root cause across
multiple bugs) as evidence of thinking beyond a checklist.

## CUSTOMER EXPERIENCE OPERATIONS

**Best asset:** CX Operations Analysis
**Résumé bullet it supports:** "Analyzed customer interactions to build a
category taxonomy, identify root-cause patterns distinct from stated
reasons, and produce five ranked, actionable process improvements."
**Interview story it supports:** *"How would you reduce support volume?"*
→ Reference the finding that repeat-contact on an unresolved issue was the
strongest predictor of escalation/cancellation in the dataset — a specific,
demonstrable analytical result rather than a general claim about caring
about customers.

## AI EVALUATOR

**Best asset:** None of the six directly — this role is proven through the
prior mission's `13-AI-EVALUATION-PRACTICE.md` items, not a written
deliverable. **Closest supporting asset:** QA / Workflow Testing pack,
which demonstrates the same underlying skill (systematic judgment against
defined criteria, written justification for each finding).
**Résumé bullet it supports:** "Applied structured evaluation criteria
consistently across 38 test scenarios, documenting reasoning for each
pass/fail determination."
**Interview story it supports:** *"How do you stay consistent across many
items?"* → Reference the QA pack's severity-ranking discipline as a
parallel to rubric-consistent AI evaluation.

## SPREADSHEET / WORKFLOW CONTRACTOR

**Best asset:** Requirements / Implementation Brief
**Résumé bullet it supports:** "Designed a header-normalization and
duplicate-detection strategy for combining multiple spreadsheet exports
into one dataset, with explicit error-handling and audit-logging
requirements."
**Interview story it supports:** *"What's your Sheets/data level?"* → Use
the Header Normalization section's mapping-table approach as a concrete,
specific example of handling real-world data inconsistency, rather than a
generic claim of "comfortable with spreadsheets."
**Note:** The strongest possible asset for this specific role family — a
working Apps Script build — is asset #6 in the portfolio and requires local
verification (see `10-MASTER-PORTFOLIO-INDEX.md`). Until that exists, the
Requirements Brief is the best available substitute.

---

## QUICK-REFERENCE TABLE

| Role family | Primary asset | Secondary asset |
|---|---|---|
| Process Documentation Specialist | SOP (all 3 files) | — |
| Operations Coordinator | SOP | Requirements Brief |
| Implementation Coordinator | Requirements Brief | SOP |
| Junior Business Analyst | Requirements Brief | QA pack |
| QA Analyst | QA pack (all 3 files) | — |
| Customer Experience Operations | CX Analysis | SOP |
| AI Evaluator | QA pack (as proxy) | — |
| Spreadsheet / Workflow Contractor | Requirements Brief | *(Sheets proof, once built locally)* |
