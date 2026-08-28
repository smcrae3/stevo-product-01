# Privacy & Security Notes

This repository is a **template**. It must never contain real customer
data, credentials, or API keys. Read this before customizing it for your
business.

## Never commit to this repository (or any public repo)

- Google API keys, OAuth client secrets, or service account JSON files.
- Make.com API keys or webhook URLs that are tied to your live account.
- Your AI provider's API key.
- Real customer names, emails, phone numbers, addresses, or messages.
- Your business's real Gmail address, if you'd rather keep it private
  (owner notification recipient is typically set as a Make.com scenario
  variable or connection, not hardcoded in this repo).

All of the sample data in [`../sheets/sample-leads.csv`](../sheets/sample-leads.csv)
is fictional — invented names, invented emails at `example.com` (a domain
reserved by IETF standard specifically for documentation/examples, so it
will never reach a real inbox), and invented phone numbers. Keep it that
way if you extend the sample set.

## Where your real credentials actually live

- **Google Sheets / Forms / Gmail**: authorized directly through your
  Google account when you use Apps Script or connect Make.com — no key
  ever needs to be typed into a file.
- **Make.com connections**: stored securely inside Make.com's own
  connection manager, not inside the scenario export or this repository.
- **AI provider**: connected the same way, through Make.com's connection
  manager for that app/module.

If you ever export a Make.com scenario as JSON (a `.json` blueprint file)
to back it up or share it, check it before committing anywhere — scenario
exports can sometimes embed connection names or, in rare cases, more.
When in doubt, don't commit scenario export files to a public repository.

## Handling real customer data once you go live

- Treat the Google Sheet as containing personal data (names, emails,
  phone numbers) once real leads start coming in — restrict sharing
  permissions on the Sheet to only the people who need it (owner,
  office staff, dispatcher).
- Don't paste real customer data into this repository, into an AI chat
  tool for "help debugging," or into any public place — use the
  fictional sample data in `sheets/sample-leads.csv` for that instead.
- Follow your local/regional data protection requirements for storing
  customer contact information (this varies by location — this repo
  does not provide legal advice).
- Periodically review the `Leads` sheet and archive or delete rows for
  customers who are no longer active, per your business's data retention
  practices.

## Human oversight

This system automates the *first response* only. A human should:
- Review any lead marked `Needs Review` before it's ignored.
- Never let the system be the only thing standing between a genuine
  emergency lead and a phone call — the acknowledgement email is a
  supplement to fast human follow-up, not a replacement for it.
