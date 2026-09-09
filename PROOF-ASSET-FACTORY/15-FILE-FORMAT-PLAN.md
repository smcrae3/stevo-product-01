# 15 — FILE FORMAT PLAN

Recommended final delivery format per asset, matched to how each buyer type
actually consumes the material. Per the mission brief: this cloud session
does not reliably produce polished binary files (PDF/DOCX/XLSX with custom
formatting) inside the conversation itself — all six assets exist right now
as clean, complete Markdown source. This file specifies the target format
and the conversion path, not a claim that the binary already exists.

---

## FORMAT DECISIONS

| Asset | Best final format | Why | Conversion path |
|---|---|---|---|
| **1. SOP** | **PDF** (primary) + editable **Google Doc** (secondary) | Buyers expect an SOP as a document they can print, share, or drop into their own doc system; the editable version matters because a real client would want to customize it | `docx` skill → export to PDF, or paste Markdown into Google Docs and use its native PDF export |
| **2. QA Test Pack** | **Google Sheet** (primary) + PDF summary (secondary) | Test-case tables are native spreadsheet content — a buyer evaluating QA work expects to filter/sort a real sheet, not scroll a static document | Import the Markdown table into Google Sheets directly (copy-paste preserves table structure reasonably well); PDF export of the same for a static-viewing option |
| **3. QA Bug Reports** | **PDF** or **Google Doc** | Bug reports are narrative-structured, not tabular — better as a formatted document than a spreadsheet | `docx`/`pdf` skill conversion |
| **4. Requirements Brief** | **PDF** (primary) + **DOCX** (if a client wants to edit/comment in Word) | Requirements docs are commonly shared as PDF for review, DOCX when a client's own process requires tracked-changes editing | `docx` skill produces both from the same source |
| **5. CX Operations Analysis** | **PDF** | Reads as a finished analytical report; no editing use case for a buyer | `docx`/`pdf` skill |
| **6. Source-Checked Research** | **Google Sheet** (primary) | The schema is inherently tabular (claim/source/confidence columns) and a buyer may want to filter by confidence level | Direct Sheets import once populated |
| **7. Apps Script proof** | **Live Google Sheet link** + screenshots embedded in a short **PDF** write-up | The workflow itself lives in Google Workspace; a PDF write-up with screenshots is the shareable artifact for someone who won't get direct access | Native Google Workspace + screenshot compilation |
| **Master Portfolio Index** | **PNG/PDF landing page** or a simple webpage (if hosted) | Acts as the front door — should be the lightest-weight, fastest-loading format since it's the first thing any reviewer opens | Could be a simple one-page PDF, or (if Steven sets up a lightweight personal site later) an HTML page — not required for this mission |

---

## WHAT NOT TO DO

- **Do not deliver anything as raw `.md` files to a buyer.** Markdown is the
  correct authoring format for this session but reads as unfinished/
  technical to a non-technical buyer (an agency owner, a hiring manager).
  Every asset needs at least one conversion pass before it's shown.
- **Do not over-produce formats.** Not every asset needs both PDF and DOCX
  — the table above marks "primary" and "secondary" specifically to avoid
  Steven spending time exporting five versions of something that only ever
  gets viewed as a PDF.
- **Do not generate a fake binary file just to have a file extension.** If a
  conversion tool isn't available in a given moment, ship the clean Markdown
  and note the target format — an honest, well-formatted Markdown document
  beats a broken or empty PDF.

## RECOMMENDED NEXT STEP FOR CONVERSION

Once this mission's Markdown files are finalized, run the `docx` skill (or
`pdf` skill, per asset) as a follow-up conversion pass per the "Best final
format" column above — this is straightforward mechanical conversion work
that doesn't need to happen inside this same production pass, and doing it
as a distinct step avoids mixing content authoring with formatting work.
