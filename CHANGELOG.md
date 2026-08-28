# Changelog

All notable changes to the Trades Lead Response System are documented
here. Format loosely follows [Keep a Changelog](https://keepachangelog.com/).

## [1.0.0] — 2026-08-28

Initial V1 build — email-first lead response system.

### Added
- Google Sheets lead tracker template (`sheets/lead-tracker-template.csv`)
  and field reference documentation.
- Fictional sample lead data covering 8 scenarios: normal request, urgent
  HVAC failure, possible emergency, estimate request, incomplete lead
  (missing phone), blank optional fields, malformed input (bad email/
  phone/service type), and a duplicate lead.
- Google Apps Script helpers (`apps-script/Code.gs`, `Config.gs`):
  auto-generated Lead IDs, field validation, safety-net urgency
  classification, duplicate detection, suggested follow-up dates, and a
  built-in QA self-test.
- Make.com workflow documentation describing the exact scenario
  architecture: Google Form → Google Sheets → Make.com watch → log/add
  row → AI summarize → AI classify → AI draft → Gmail customer email →
  Gmail owner email.
- Email templates for customer acknowledgements (Emergency, Urgent,
  Routine, Estimate), owner notifications, and a two-step follow-up
  sequence.
- Beginner-friendly setup guide, troubleshooting guide, and
  privacy/security notes.
- Mermaid workflow diagram.
- Technical QA report (`PRODUCT-01-TECHNICAL-QA.md`) documenting tests
  run against this build and defects found/fixed during development.

### Scope
- Email-first only: no SMS, no phone automation, no paid APIs beyond an
  AI provider (for summarize/classify/draft) and Gmail.
- Human remains in control of quoting, scheduling, and dispatch.
