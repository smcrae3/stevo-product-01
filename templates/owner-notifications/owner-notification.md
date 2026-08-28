# Owner Notification Email

**When used:** Every new lead, immediately after the customer email step
(sent even if the customer email was skipped due to a bad email address).

**Subject:** [Urgency] lead: [Service Type] — [Customer Name]

Example subjects:
- `EMERGENCY lead: Plumbing — Priya Anand`
- `Urgent lead: HVAC — Dana Kowalski`
- `New lead: Roofing (Estimate) — Tom Reyes`

**Body:**

```
New lead received.

Lead ID: [Lead ID]
Urgency: [Urgency]
Service Type: [Service Type]

Customer: [Customer Name]
Phone: [Phone]
Email: [Email]

Summary: [AI Summary]

Full message:
"[Message]"

Customer email sent: [Yes/No - reason if No, e.g. "invalid email address"]

View / update this lead:
[Link to Google Sheet row]
```

**Notes for setup:**
- If `Email` was invalid or blank, the subject and body should make that
  obvious (e.g. add "— NO EMAIL SENT, CALL CUSTOMER" to the subject) so
  the owner knows a phone call is needed instead of assuming the
  customer was already handled.
- If the lead was flagged as a possible duplicate, include that note in
  the body too (e.g. "Possible duplicate of LEAD-20260828-003") so the
  owner doesn't dispatch two technicians to the same job.
- Keep this email scannable — owners often read it on a phone between
  jobs. Lead the subject line with urgency so Emergency leads stand out
  in the inbox.
