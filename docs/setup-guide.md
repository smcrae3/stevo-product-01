# Setup Guide (Beginner-Friendly)

This guide assumes no prior experience with Google Apps Script or
Make.com. You'll need:

- A Google account (for Forms, Sheets, and Gmail)
- A free or paid [Make.com](https://www.make.com) account
- Access to an AI provider supported by Make.com (for the summarize /
  classify / draft steps)

No local software installation is required — everything runs in your
browser.

---

## Step 1: Create the Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new
   blank spreadsheet.
2. Rename the first tab to `Leads` (bottom-left tab name).
3. Open [`../sheets/lead-tracker-template.csv`](../sheets/lead-tracker-template.csv)
   from this repository and copy its header row.
4. Paste the header row into row 1 of your `Leads` tab, one field per
   column, in the same order:
   `Lead ID | Date/Time | Customer Name | Email | Phone | Service Type |
   Message | Urgency | Status | Customer Response | Owner Notification |
   Follow-Up Date | Notes`
5. (Optional but recommended) Read
   [`../sheets/field-reference.md`](../sheets/field-reference.md) so you
   know what each column expects.

## Step 2: Try it with sample data first

1. Open [`../sheets/sample-leads.csv`](../sheets/sample-leads.csv) — this
   is fictional test data, safe to paste into your sheet.
2. Paste a few rows below your header row to see how the columns should
   look once fully processed.
3. Delete these sample rows once you're comfortable with the layout —
   don't leave fictional data mixed in with real leads.

## Step 3: Install the Apps Script helper

1. Follow [`../apps-script/README.md`](../apps-script/README.md) start to
   finish. This adds automatic Lead IDs, validation, a safety-net urgency
   tag, and duplicate detection directly in your Sheet.
2. Confirm it's working by running **Trades Lead Tools → Run QA
   Self-Test** from the Sheet's menu bar.

## Step 4: Build the Google Form

1. Go to [Google Forms](https://forms.google.com) and create a new form.
2. Add these questions, matching the field reference:
   - **Customer Name** (short answer, required)
   - **Email** (short answer, required — turn on Forms' built-in "Response
     validation → Email" if available in your account)
   - **Phone** (short answer)
   - **Service Type** (dropdown: HVAC, Plumbing, Roofing, Electrical,
     Appliance Repair, Other)
   - **Message** (paragraph, describe the issue)
3. Under the Form's **Responses** tab, click the green Sheets icon and
   choose **Select existing spreadsheet** → pick the Sheet from Step 1.
   Google will create a "Form Responses 1" tab — either point the Apps
   Script `SHEET_NAME` config at that tab name instead of `Leads`, or set
   the Form to append directly to your `Leads` tab if your account
   supports it. Keeping everything on one tab named `Leads` is simplest.
4. Test the form yourself with a fake submission and confirm a new row
   appears in the Sheet with a `Lead ID` filled in automatically.

## Step 5: Build the Make.com scenario

1. Log into [Make.com](https://www.make.com) and create a new scenario.
2. Follow [`make-com-workflow.md`](make-com-workflow.md) module by
   module — it lists the exact modules, order, and field mappings.
3. Connect your Google Sheets, Gmail, and AI provider accounts to
   Make.com when prompted (Make.com handles this connection securely —
   you never need to copy/paste an API key into this repository).
4. Use the templates in [`../templates/`](../templates/) as the base
   content for the AI draft-response step and the owner notification
   step. Replace every `[Bracketed Placeholder]` with your real business
   details.
5. Save the scenario but leave it turned **off** for now.

## Step 6: End-to-end test with fictional data

1. Turn the Make.com scenario **on**.
2. Submit a real test through your Google Form using your own email
   address as the "customer" (use a fake name — never test with a real
   customer's information).
3. Watch the Make.com scenario execution log to confirm each module ran
   successfully.
4. Check that you received both the customer acknowledgement email (at
   the test address) and the owner notification email.
5. Confirm the Sheet row updated: `Urgency`, `Status`, `Customer
   Response`, `Owner Notification`, and `Follow-Up Date` should all be
   filled in.
6. Repeat with a couple of the scenarios from
   [`../sheets/sample-leads.csv`](../sheets/sample-leads.csv) (e.g. an
   urgent-sounding message, a blank message) to confirm the urgency
   classification and validation behave as expected.

## Step 7: Go live

1. Replace any test data in the Sheet with a clean, empty `Leads` tab
   (keep the header row).
2. Share the Google Form link on your website / wherever leads come
   from.
3. Read [`troubleshooting.md`](troubleshooting.md) and
   [`privacy-and-security.md`](privacy-and-security.md) before handling
   real customer data.

---

## What "done" looks like

- A customer fills out the Form → within a couple of minutes they get a
  professional acknowledgement email, and the owner gets notified with a
  summary and urgency level, without anyone touching a keyboard.
- The owner opens the Sheet at any time and sees every lead, its status,
  and when it needs a follow-up — one place, not scattered across texts,
  emails, and sticky notes.
