# QA Checklist — SOP Service Capability Test

Fictional demonstration only. Each item below was actually checked against
the produced files (not asserted from memory).

| Check | Result | Evidence |
|---|---|---|
| No factual inventions | **PASS** | Full reconciliation in `04-FACT-RECONCILIATION.md` — every SOP line traces to a raw-notes fact |
| No missing mandatory facts | **PASS** | All 17 distinct facts (after collapsing 1 deliberate repetition) present in the final SOP |
| Numbered sequence is understandable | **PASS** | Procedure is split into 5 time-phases (A–E) with continuous numbering 1–17 across them; each step is a single, single-verb action, not a compound instruction |
| Headings are consistent | **PASS** | Uses Word's built-in Heading 1/2/3 styles throughout (verified in the generated XML/rendered PDF, not just visually) |
| Instructions use clear action verbs | **PASS** | Every procedure step opens with an imperative verb (Email, Request, Confirm, Check, Assemble, Schedule, Submit, Meet, Walk, Watch, Call, Join) |
| Ambiguous items flagged rather than guessed | **PASS** | The undocumented remote/hybrid first-week case is explicitly marked "Not yet defined" in Escalation / Clarification, not silently resolved |
| Document can be edited | **PASS** | `.docx` opens as a normal editable Word file (standard docx-js output, verified by unzip integrity test and successful LibreOffice conversion) |
| PDF exports correctly | **PASS** | Converted via LibreOffice headless (`writer_pdf_Export` filter); produced 3 pages for the SOP and 1 page for the raw notes |
| No clipping | **PASS** | All 4 rendered pages inspected visually at 100 DPI — no text cut off at margins, no overlapping elements |
| No broken formatting | **PASS** | Headings, numbered list, bullets, checkboxes, and colored warning/clarification callouts all render as designed across both light-content pages |

## What this test does NOT claim

- It does not claim the $99 / ~10-page pricing hypothesis is validated by
  buyer evidence — that question is explicitly out of scope for this test
  per the mission instructions.
- It does not claim every possible SOP job would go this smoothly — this
  is one fictional, deliberately tractable example (an admin process with
  no legal, medical, financial, or safety-critical content). See
  `06-STEVEN-GUIDE.md` for the job types this capability test does *not*
  clear Steven to accept.
