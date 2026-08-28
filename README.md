# Trades Lead Response System (V1)

An **email-first** lead-response and follow-up system for small home-service
businesses — HVAC, plumbing, roofing, electrical, and similar trades.

When a lead comes in, this system helps a small business:

1. Capture the lead in a Google Sheet (via a Google Form).
2. Automatically summarize and classify the lead's urgency.
3. Send the customer a fast, professional acknowledgement email.
4. Notify the owner/office immediately so a human can follow up.
5. Track lead status and follow-up dates in one place.

A human always makes the final call on quoting, scheduling, and dispatch.
This system exists to make sure no lead sits unanswered for hours while the
crew is on a roof or under a sink — not to replace the business owner.

---

## Who this is for

- Solo operators and small teams (1–15 people) in HVAC, plumbing, roofing,
  electrical, garage door, appliance repair, and similar home-service trades.
- Businesses that already collect leads through a website form, Google Form,
  or a simple contact form, and want faster, more consistent first-response
  emails without hiring a full-time dispatcher.
- Owners who are comfortable with (or willing to learn) Google Sheets,
  Google Forms, Gmail, and Make.com — no custom software installation
  required.

This is **not** a CRM replacement, not a phone/SMS system, and not a
dispatch/scheduling tool. It is a lightweight first-response layer that sits
in front of whatever the business already uses.

---

## What V1 includes

- A **Google Sheets lead tracker template** with a consistent field
  structure (see [`sheets/`](sheets/)).
- **Fictional sample lead data** covering normal, urgent, emergency,
  estimate, incomplete, and malformed cases, for testing and demos
  (see [`sheets/sample-leads.csv`](sheets/sample-leads.csv)).
- **Google Apps Script** helpers that run inside the Sheet to assign Lead
  IDs, validate incoming rows, flag likely duplicates, and pre-tag urgency
  as a safety net (see [`apps-script/`](apps-script/)).
- **Make.com workflow documentation** describing the exact automation
  architecture used to summarize, classify, draft, and send emails
  (see [`docs/make-com-workflow.md`](docs/make-com-workflow.md)).
- **Email templates** for customer acknowledgements (by urgency level),
  owner notifications, and follow-ups (see [`templates/`](templates/)).
- A **step-by-step setup guide**, **troubleshooting guide**, and
  **privacy/security notes** (see [`docs/`](docs/)).
- A **workflow diagram** in Mermaid (renders directly on GitHub).
- A **technical QA report** documenting the tests run against this V1 build
  (see [`PRODUCT-01-TECHNICAL-QA.md`](PRODUCT-01-TECHNICAL-QA.md)).

## What V1 deliberately does NOT include

- No SMS or phone automation (no Twilio or similar).
- No paid APIs beyond what's necessary (an AI provider used inside Make.com
  for summarizing/classifying/drafting, and Gmail for sending — both
  optional and swappable).
- No real customer data anywhere in this repository — sample data only.
- No storage of credentials, API keys, or secrets in this repository.

---

## How it works (high level)

```
Google Form submission
  → response lands as a new row in Google Sheets
  → Make.com watches for new Sheet rows
  → Make.com logs / normalizes the row
  → AI step: summarize the lead
  → AI step: classify urgency (Emergency / Urgent / Routine / Estimate)
  → AI step: draft a response
  → Gmail: send acknowledgement email to the customer
  → Gmail: send notification email to the owner/office
```

See [`docs/workflow-diagram.md`](docs/workflow-diagram.md) for the full
Mermaid diagram and [`docs/make-com-workflow.md`](docs/make-com-workflow.md)
for the exact scenario architecture, module-by-module.

---

## Repository structure

```
stevo-product-01/
├── README.md                          ← you are here
├── CHANGELOG.md                       ← version history
├── PRODUCT-01-TECHNICAL-QA.md         ← QA test results for this build
├── docs/
│   ├── setup-guide.md                 ← beginner step-by-step setup
│   ├── make-com-workflow.md           ← exact Make.com scenario architecture
│   ├── workflow-diagram.md            ← Mermaid diagram of the full flow
│   ├── troubleshooting.md             ← common problems and fixes
│   └── privacy-and-security.md        ← credentials / data handling rules
├── sheets/
│   ├── lead-tracker-template.csv      ← importable Google Sheets template
│   ├── field-reference.md             ← what each column means and expects
│   └── sample-leads.csv               ← fictional test leads (8 scenarios)
├── apps-script/
│   ├── Code.gs                        ← main Apps Script logic
│   ├── Config.gs                      ← configurable constants
│   └── README.md                      ← how to install/use the script
└── templates/
    ├── customer-emails/                ← acknowledgement emails by urgency
    ├── owner-notifications/            ← owner/office alert email
    └── follow-up/                      ← follow-up email sequence
```

---

## Quick start

1. Read [`docs/setup-guide.md`](docs/setup-guide.md) start to finish.
2. Copy [`sheets/lead-tracker-template.csv`](sheets/lead-tracker-template.csv)
   into a new Google Sheet.
3. Install the Apps Script from [`apps-script/`](apps-script/) into that
   Sheet (optional but recommended — adds Lead IDs, validation, and a
   safety-net urgency tag).
4. Build the Google Form and Make.com scenario as described in
   [`docs/make-com-workflow.md`](docs/make-com-workflow.md).
5. Customize the templates in [`templates/`](templates/) with your business
   name, hours, and contact details.
6. Test using the fictional leads in
   [`sheets/sample-leads.csv`](sheets/sample-leads.csv) before going live.

---

## License / usage

This repository is a digital product template. Replace all placeholder
business details (`[Business Name]`, `[Phone]`, etc.) with your own before
using it with real customers. No warranty is expressed or implied — test
thoroughly with your own sample data first.
