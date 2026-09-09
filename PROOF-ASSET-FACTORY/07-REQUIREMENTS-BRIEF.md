# 07 — REQUIREMENTS / IMPLEMENTATION BRIEF

> **FICTIONAL DEMONSTRATION — NOT CLIENT WORK**
> Uses the same general problem class as a "combine quarterly spreadsheets
> into one dataset" job — a common, generic category of Google Sheets work
> — without referencing any specific client, their data, or their
> confidential details. All company names, file names, and data fields
> below are invented for this demonstration.

---

# REQUIREMENTS BRIEF: Quarterly File Consolidation

**Client (fictional):** "Meridian Supply Co." — a small distributor
**Prepared for:** Demonstration purposes
**Status:** Draft requirements — not a delivered or accepted scope

---

### BUSINESS PROBLEM

Meridian Supply Co. produces one spreadsheet export per quarter from its
order-management system (four files per year: Q1.xlsx, Q2.xlsx, Q3.xlsx,
Q4.xlsx). Each file lives separately in a shared drive. Anyone who needs a
full-year view — total orders, a specific customer's order history across
quarters, year-over-year comparison — currently has to open all four files
and manually combine what they need, every time. This is slow, error-prone
(numbers get mistyped during manual copying), and nobody trusts the
combined totals because there's no single source of truth for how the
combination was done last time.

### CURRENT STATE

- Four separate quarterly export files, same general structure but not
  guaranteed identical (see Header Normalization below)
- No master file exists
- Combination, when needed, is done manually and inconsistently by whoever
  needs the answer that week
- No record of which files have already been incorporated into any past
  combination attempt

### DESIRED STATE

A single master dataset that:
- Contains all quarters' data in one place, correctly combined
- Can be updated each quarter by adding the new file, without re-doing the
  prior quarters' work
- Flags rather than silently drops any row that doesn't match the expected
  structure
- Can be regenerated from scratch if something goes wrong, without manual
  reconstruction

---

### FUNCTIONAL REQUIREMENTS

**FR-1.** The system shall read data from each quarterly file and append it
to a master dataset.

**FR-2.** The system shall normalize column headers across files before
combining, since export files from the same source system are not
guaranteed to use identical header text quarter to quarter (see Header
Normalization).

**FR-3.** The system shall detect and prevent duplicate rows if the same
quarterly file is processed more than once (see Duplicate Logic).

**FR-4.** The system shall maintain a record of which files have already
been processed, so re-running the process doesn't require re-identifying
what's new (see Processed-File Registry).

**FR-5.** The system shall flag, rather than silently drop or silently
guess at, any row with data that doesn't match the expected structure
(e.g., a missing required field, an unrecognized column).

**FR-6.** The master dataset shall be readable and usable directly in
Google Sheets without requiring the end user to run any script to view
results.

### NONFUNCTIONAL REQUIREMENTS

**NFR-1.** The process must be operable by a non-technical staff member
after initial setup — dropping in a new file and clicking a single trigger,
not editing code.

**NFR-2.** The process must complete within a few minutes for a
typical-sized quarterly file (see Data Volume Questions — exact volume is
not yet known).

**NFR-3.** The process must be re-runnable without data loss or duplication
if it's interrupted partway through.

**NFR-4.** Historical data (already-combined quarters) must never be
altered by processing a new quarter — the process only appends, and any
correction to historical data is a separate, deliberate, logged action.

---

### INPUT FILE ASSUMPTIONS

*(Marked as assumptions because they haven't been confirmed against real
files — see Open Questions.)*

- Each quarterly file has one header row and one data row per order
- Files are in .xlsx or Google Sheets format (not .csv — to be confirmed)
- Each file covers exactly one quarter with no overlap in date range
  between files
- A unique order identifier exists in every file (assumed column name:
  `Order ID`, but see Header Normalization)

### HEADER NORMALIZATION

Real-world exports from the same source system frequently drift in header
naming between exports — "Order ID" in one quarter, "OrderID" in another,
"Order #" in a third. The consolidation process needs a **mapping table**
maintained separately from the code, so that when a new header variant
appears, someone can add a mapping entry without needing a developer:

| Canonical field | Known variants seen so far |
|---|---|
| `Order ID` | "OrderID", "Order #", "Order Number" |
| `Customer Name` | "Customer", "Client", "Client Name" |
| `Order Date` | "Date", "OrderDate" |
| `Total Amount` | "Total", "Amount", "Order Total" |

**Any column not matching a known canonical field or variant is flagged for
manual review, not silently discarded** — an unmapped column might be a new
field the business added, not junk data.

### DUPLICATE LOGIC

A row is considered a duplicate if it matches an existing row in the master
dataset on **Order ID** (the assumed unique identifier). If Order ID is
missing or not actually unique in practice (an open question), a fallback
composite check — Customer Name + Order Date + Total Amount all matching —
flags a probable duplicate for manual review rather than auto-merging or
auto-discarding it. **The system should never silently drop a row it
believes is a duplicate without a way to review that decision** — a wrong
duplicate judgment either loses real data or keeps genuine duplicates,
and both failure modes are worse than a short manual review queue.

### PROCESSED-FILE REGISTRY

A separate tracking sheet (or tab) lists every file that has been
successfully processed, with: file name, date processed, row count added,
and any rows flagged during that run. This prevents the two failure modes
of manual tracking: reprocessing a file that's already in the master
(creating duplicates) and forgetting to process a file that was received
but never run.

### TRIGGER OPTIONS

Three options, to be decided with the client rather than assumed:
1. **Manual trigger** — staff member clicks a menu item or button after
   uploading the new quarterly file
2. **Time-based trigger** — an automated check runs quarterly and looks for
   a new file matching an expected naming pattern
3. **File-drop trigger** — processing runs automatically when a new file
   appears in a designated folder

*Recommendation for this demonstration: start with manual trigger.* It's
the simplest to build, the easiest for a non-technical user to understand
and trust, and it avoids the risk of an automated trigger firing on a
partially-uploaded or wrong file. Automate later once the manual process is
proven reliable.

### ERROR HANDLING

- **Missing required field** (e.g., blank Order ID) → row flagged in a
  separate "Needs Review" section, not silently included or excluded from
  the master dataset
- **File structure doesn't match any known pattern at all** → processing
  stops for that file entirely, with a clear message, rather than
  attempting a partial or guessed combination
- **Duplicate detected** → flagged for review, not auto-resolved (see
  Duplicate Logic)
- **Process interrupted partway through** → per NFR-3, must be safely
  re-runnable; the Processed-File Registry (checked before, not after,
  each file's data is written) is what makes this possible

### AUDIT LOG

Every run of the process logs: timestamp, which file was processed, how
many rows were added, how many rows were flagged and why, and whether the
run completed successfully or stopped with an error. This is separate from
the Processed-File Registry (which tracks file-level state) — the audit log
tracks run-level history, useful for diagnosing "why does the master
dataset look different than I expected" after the fact.

### DATA VOLUME QUESTIONS

*(Genuinely open — flagged rather than assumed, because the right technical
approach depends on the answer.)*

- Approximately how many rows per quarterly file? (Under 1,000? Over
  10,000? This affects whether a simple Apps Script approach is sufficient
  or whether a different tool is warranted.)
- Is historical data (prior years, before this process existed) expected to
  be backfilled into the master dataset, or does tracking start fresh from
  the next quarter?
- Will additional data sources beyond the quarterly exports ever need to
  feed into the same master dataset?

### ACCEPTANCE CRITERIA

- [ ] All four quarters' data appears correctly in one master dataset with
  no missing rows (compared against a manual row-count check of each source
  file)
- [ ] Running the process twice on the same file does not create duplicate
  rows
- [ ] A row with a header variant not yet in the mapping table is flagged
  for review, not silently dropped or misfiled
- [ ] The Processed-File Registry accurately reflects which files have been
  incorporated
- [ ] A non-technical staff member can successfully run the process
  end-to-end following written instructions, without developer assistance
- [ ] Re-running an interrupted process does not lose or duplicate data

### OPEN QUESTIONS

1. Is Order ID actually guaranteed unique across all quarters, or could the
   same numbering restart each quarter? *(This changes the duplicate-logic
   design significantly.)*
2. What should happen to a flagged row after manual review — is there a
   defined "resolve and re-include" step, or does resolution happen by
   directly editing the master dataset?
3. Who is the intended long-term owner of the header-mapping table when a
   new variant appears?
4. Is there a need to eventually combine more than four files a year, or is
   quarterly the fixed cadence indefinitely?

### OUT OF SCOPE

- Building any reporting, dashboards, or visualizations on top of the master
  dataset — this brief covers consolidation only
- Correcting historical data errors that predate this process
- Integrating directly with the order-management system's API (this
  assumes manual export/import of quarterly files, not a live connection)
- Data validation against external sources (e.g., verifying customer names
  against a CRM)

### RISKS

- **Header drift risk:** if the source system's export format changes
  significantly (not just a renamed column, but a restructured file), the
  mapping-table approach may not be sufficient and could require a
  structural redesign
- **Uniqueness assumption risk:** if Order ID turns out not to be reliably
  unique (Open Question 1), the duplicate-detection logic needs to be
  redesigned before the first real run, not discovered after data is
  already merged incorrectly
- **Adoption risk:** if the manual trigger process isn't genuinely simpler
  than the current manual-combination process, staff may revert to the old
  method and the master dataset goes stale

### TEST PLAN

1. **Structural test:** process one quarterly file alone; confirm every row
   appears correctly in the master dataset with correct field mapping
2. **Header-variant test:** introduce a deliberately renamed column in a
   test file; confirm it's either correctly mapped (if a known variant) or
   flagged (if unknown) — never silently dropped
3. **Duplicate test:** process the same file twice; confirm no duplicate
   rows result and the second run is logged as producing zero new rows
4. **Missing-field test:** introduce a row with a blank required field;
   confirm it's flagged for review rather than included as-is
5. **Interruption test:** simulate stopping the process partway through;
   confirm re-running completes correctly without duplicating already-
   written rows
6. **End-to-end volume test:** once real data volume is known (see Data
   Volume Questions), test with a realistically-sized file to confirm
   NFR-2's timing expectation is achievable

---

*This document is a demonstration of requirements-gathering method and
structure. "Meridian Supply Co." is fictional. No client data, real
business, or delivered engagement is represented.*
