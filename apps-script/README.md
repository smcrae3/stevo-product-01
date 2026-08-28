# Apps Script — Installation & Usage

These two files add spreadsheet-side helpers to your Google Sheet lead
tracker. They run **inside Google Sheets**, separately from the Make.com
scenario that sends emails — see the note at the top of `Code.gs` for how
the two divide responsibility.

## What it adds

- Auto-generated `Lead ID` values (`LEAD-YYYYMMDD-###`).
- Basic validation of `Email` and `Service Type`, with human-readable
  notes when something looks off.
- A keyword-based **safety-net** `Urgency` tag, used only if Make.com's AI
  classification hasn't run yet (or the value is already blank/invalid).
- A default `Status` (`New`, or `Needs Review` when something needs a
  human look) and a suggested `Follow-Up Date`.
- Duplicate-lead flagging based on matching `Email` or `Phone` within a
  24-hour window (configurable).
- A **Trades Lead Tools** menu in the Sheet with:
  - **Process New Rows Now** — manually run the logic on any row missing
    a `Lead ID` (useful for pasted-in rows).
  - **Run QA Self-Test** — runs the classification/validation logic
    against built-in test cases and reports pass/fail, without touching
    your real data.

## Install

1. Open your Google Sheet (built from `sheets/lead-tracker-template.csv`).
2. Go to **Extensions → Apps Script**.
3. Delete the default `Code.gs` placeholder content.
4. Create two script files named exactly `Code.gs` and `Config.gs`, and
   paste in the matching contents from this folder.
5. In `Config.gs`, confirm `SHEET_NAME` matches your tab name (default:
   `Leads`) and that the column names under `COLUMNS` match your sheet's
   header row exactly.
6. Save the project (any name is fine, e.g. "Trades Lead Response").
7. Reload the Google Sheet in your browser. You should see a new
   **Trades Lead Tools** menu appear.
8. Click **Trades Lead Tools → Run QA Self-Test** to confirm the script
   is installed correctly — you should see "All self-tests passed."

## Wiring up the automatic trigger (optional but recommended)

If you want new form submissions to be processed automatically (Lead ID,
validation, safety-net urgency) the moment they land in the sheet:

1. In the Apps Script editor, click the clock icon (**Triggers**) in the
   left sidebar.
2. Click **+ Add Trigger**.
3. Set:
   - Function: `onFormSubmit`
   - Event source: `From spreadsheet`
   - Event type: `On form submit`
4. Save. The first time, Google will ask you to authorize the script —
   this is normal for any Apps Script that reads/writes your own sheet.

Without this trigger, you can still process rows manually any time via
**Trades Lead Tools → Process New Rows Now**.

## Notes

- This script never sends email and never calls any external API or AI
  service — it only reads and writes cells in your own Sheet.
- It's safe to re-run on the same rows: it only fills in values that are
  blank or invalid, and never overwrites a `Lead ID`, `Urgency`, `Status`,
  or `Follow-Up Date` that's already been set (by a human or by Make.com).
