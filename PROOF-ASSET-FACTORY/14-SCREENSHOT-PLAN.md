# 14 — SCREENSHOT / VISUAL PLAN

**Rule: maximum 4 screenshots per asset.** More than that dilutes attention
and signals padding rather than selectivity. Every screenshot listed below
earns its place by showing something the prose alone doesn't make visible
at a glance.

---

## 1. SOP / Process Documentation

1. **Cover page** — Document Control table visible (shows professional
   formatting standard at a glance)
2. **Decision table** — the urgency classification table (Critical/Urgent/
   Routine with definitions and response targets)
3. **A procedure step with its exception branch** — e.g., Step 2 (validate
   information) alongside Exception Case A, showing how the main procedure
   and exception handling connect
4. **The checklist** — the per-inquiry checklist at the end, since a
   checklist is the fastest thing a reviewer can visually verify as "usable"

**Antigravity capture instructions:** Format the Markdown source into a
clean document (Google Docs or a PDF export) with consistent heading
styles, a light table border, and adequate whitespace before capturing —
raw Markdown rendered as plain text will look unfinished in a screenshot.

---

## 2. QA / Workflow Testing

1. **The test-case table** — a representative slice (6-8 rows) showing the
   full column structure (Test ID through Notes), including at least one
   Critical-severity fail
2. **One complete bug report** — BUG-001 or BUG-002, formatted cleanly,
   showing the full structure from Bug ID through Retest Condition
3. **The pass/fail summary table** — the severity distribution counts (8
   pass / 30 fail, broken down by severity)
4. **The pattern-observations section** — shows synthesis beyond raw test
   execution, which is what separates a QA analyst from a checklist-runner

**Antigravity capture instructions:** If possible, render the test-case
table in an actual spreadsheet (Google Sheets) rather than a Markdown table
for the screenshot — it reads as more "production-tool-native" to a buyer
evaluating QA work, which typically happens in spreadsheet or ticketing
tools.

---

## 3. Requirements / Implementation Brief

1. **The functional requirements list** (FR-1 through FR-6)
2. **The header-normalization mapping table** — this is the single most
   concrete, specific artifact in the whole document and screenshots well
3. **The acceptance criteria checklist**
4. **The open questions section** — deliberately included because it shows
   the discipline of flagging uncertainty, which is rarer and more valuable
   to show than a document that looks falsely complete

**Antigravity capture instructions:** No special formatting needed beyond
clean Markdown-to-PDF conversion; this document reads well as straight text.

---

## 4. Customer Experience Operations Analysis

1. **The category taxonomy table** with percentages
2. **The top 5 ranked operational improvements** (numbered list with bolded
   headers)
3. **One fully-worked example** — interaction row + its category assignment
   + underlying-signal read, to show the analytical judgment in action at
   the individual-item level, not just the aggregate

**Antigravity capture instructions:** Keep to 3 screenshots for this asset
(under the 4-max, not over) — the taxonomy, the recommendations, and one
worked example cover the demonstrable skill without needing a fourth.

---

## 5. Source-Checked Research

**Do not capture screenshots of this asset until the Antigravity
live-verification pass is complete** (see `09-SOURCE-CHECKED-RESEARCH.md`).
A screenshot of the placeholder schema would visually communicate
"incomplete," which is accurate but not useful as a proof asset. Once
completed:

1. **The completed schema table** for one organization, showing all fields
   populated with a real, checkable source
2. **The confidence-scale explanation**
3. **One example of a deliberately blank field** — this is actually the
   most persuasive screenshot possible for this asset, since it directly
   demonstrates the "leave it blank rather than guess" discipline in action,
   not just in description

---

## 6. Google Sheets / Apps Script Workflow

**Cannot be captured until the local build exists.** Once built (per
`25-ANTIGRAVITY-FINISHING-MISSION.md`):

1. The Form as a user sees it
2. The Sheet with test rows and status column
3. The Apps Script editor showing the trigger functions (enough to show
   real code exists, not so much that it reads as a code-review artifact)
4. The received confirmation email

*(This exact 4-shot list already exists in the prior mission's
`07-PROOF-PORTFOLIO.md` — repeated here for completeness of this mission's
screenshot plan, not duplicated effort.)*

---

## GENERAL CAPTURE STANDARDS (apply to all assets)

- **Redact nothing sensitive because nothing sensitive exists** — all data
  is fictional or demonstration-only, so no redaction step is needed, but
  double-check that no screenshot accidentally includes a real email
  address, real account name, or real file path from Steven's own systems.
- **Consistent visual style** — same font, same table style, same margin
  treatment across all screenshots in the portfolio, so it reads as one
  coherent body of work rather than five mismatched documents.
- **Annotate only where a callout adds clarity** — a numbered arrow pointing
  at the specific field being discussed in the accompanying text, used
  sparingly, not on every screenshot.
- **Resolution:** capture at a size that stays legible when scaled down to a
  LinkedIn post or an email attachment thumbnail — test this before
  finalizing.
