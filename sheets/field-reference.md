# Lead Tracker — Field Reference

This describes every column in [`lead-tracker-template.csv`](lead-tracker-template.csv).
Column order matters — Apps Script and the Make.com scenario both reference
columns by name (header row), so do not rename or reorder columns without
updating `apps-script/Config.gs` and the Make.com mapping in
[`../docs/make-com-workflow.md`](../docs/make-com-workflow.md).

| Column | Type | Required | Set by | Description |
|---|---|---|---|---|
| `Lead ID` | Text | Yes | Apps Script (auto) | Unique ID, format `LEAD-YYYYMMDD-###` (e.g. `LEAD-20260828-001`). Auto-generated on new row; never edit manually. |
| `Date/Time` | Date/time | Yes | Google Form (auto) | Timestamp of the form submission, in the sheet's timezone. Google Forms fills this automatically as column A — do not remove it. |
| `Customer Name` | Text | Yes | Form input | Full name as entered by the customer. |
| `Email` | Text | Yes | Form input | Customer email address. Used for the acknowledgement email. Must be a syntactically valid email — see validation rules below. |
| `Phone` | Text | Recommended | Form input | Customer phone number, any format. Stored as text (not number) to preserve leading zeros, dashes, and formatting. |
| `Service Type` | Text (dropdown) | Yes | Form input | One of: `HVAC`, `Plumbing`, `Roofing`, `Electrical`, `Appliance Repair`, `Other`. |
| `Message` | Text | Recommended | Form input | Free-text description of the problem. Used by the AI summarize/classify steps. May be blank — see handling below. |
| `Urgency` | Text | Yes | Apps Script pre-tag → Make.com AI (final) | One of: `Emergency`, `Urgent`, `Routine`, `Estimate`. See classification rules in [`../docs/make-com-workflow.md`](../docs/make-com-workflow.md). |
| `Status` | Text (dropdown) | Yes | Apps Script (auto) → updated manually | One of: `New`, `Acknowledged`, `Owner Notified`, `In Progress`, `Scheduled`, `Completed`, `Needs Review`. Starts at `New`. |
| `Customer Response` | Text | No | Make.com (auto) | `Sent` once the acknowledgement email goes out, otherwise blank. |
| `Owner Notification` | Text | No | Make.com (auto) | `Sent` once the owner notification email goes out, otherwise blank. |
| `Follow-Up Date` | Date | No | Owner (manual) or Apps Script suggestion | Date the business should follow up if the lead hasn't converted. Apps Script suggests a default based on urgency (see below); owner can override. |
| `Notes` | Text | No | Owner (manual) | Free-text internal notes. Never emailed to the customer. |

## Validation rules (enforced by Apps Script, re-checked by Make.com)

- **Email**: must match a basic `name@domain.tld` pattern. If invalid or
  blank, `Status` is set to `Needs Review` and no customer email is sent
  (the owner is still notified so a human can call the customer instead).
- **Customer Name**: if blank, the system uses `"there"` as a safe greeting
  fallback (e.g. "Hi there,") rather than failing.
- **Service Type**: if blank or not one of the allowed values, it defaults
  to `Other` and the lead is flagged `Needs Review`.
- **Message**: if blank, urgency defaults to `Routine` (never `Emergency` or
  `Urgent`) since there's no text to classify — a human should review it.
- **Duplicate leads**: a new row is flagged as a likely duplicate if the
  same `Email` (or same `Phone`) appears in another row within the last
  24 hours. Duplicates are not deleted or merged automatically — `Notes` is
  annotated `Possible duplicate of <Lead ID>` for a human to review.

## Default Follow-Up Date offsets (suggested, editable)

| Urgency | Suggested follow-up |
|---|---|
| Emergency | Same day (+0 days) |
| Urgent | +1 day |
| Routine | +3 days |
| Estimate | +5 days |

These are starting points, not guarantees — always confirm against the
business's real response-time commitments.
