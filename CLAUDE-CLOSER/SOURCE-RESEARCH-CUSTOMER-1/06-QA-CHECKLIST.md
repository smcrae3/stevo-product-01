# 06 — QA Checklist

## Per-row checklist (run on every single row before it counts as done)

- [ ] **Source exists?** — a source_url is filled in, not left implied.
- [ ] **Source opens?** — the link actually loads, isn't dead or paywalled.
- [ ] **Name actually appears?** — the contact_name is visible in the text
      of that exact page, not remembered from a different tab.
- [ ] **Title actually appears?** — the contact_title as recorded matches
      what the page says, not a paraphrase that changes its meaning.
- [ ] **Email actually published?** — the email is copy-pasted from the
      page, visibly printed there, not typed from memory or a pattern.
- [ ] **Phone actually published?** — same standard as email.
- [ ] **Email was NOT inferred?** — a second, explicit check: could this
      email have been guessed from a naming pattern instead of read off
      the page? If there's any doubt, it fails this check and gets
      re-verified or blanked.
- [ ] **Contact actually relates to this utility?** — not a same-named
      person at a different utility, not an old page for a utility that's
      since merged.
- [ ] **Source current enough to trust?** — check for a visible date; an
      undated staff directory is usually fine, but a 2015 council PDF
      naming a superintendent needs a second, more current source before
      it's trusted alone.
- [ ] **Conflicts checked?** — if a second source was consulted and it
      disagreed, status is CONFLICT, not silently resolved.
- [ ] **Notes added when needed?** — any PARTIAL, UNAVAILABLE, CONFLICT,
      or CLOSED/MERGED row has a clear, specific note, not a blank
      explanation field.

## Batch-level QA (run once, after all 20 rows are done)

- [ ] **Row count correct** — exactly 20 rows, matching the client's
      original CSV, no rows dropped or duplicated.
- [ ] **Count by status** — tally VERIFIED / PARTIAL / UNAVAILABLE /
      CONFLICT / CLOSED-MERGED; this count is worth mentioning to the
      client proactively (see `08-CLIENT-RESPONSES.md`, response A).
- [ ] **Count blanks** — confirm every blank field is a deliberate,
      justified blank (per its row's notes), not an accidentally skipped
      cell.
- [ ] **Duplicate contacts checked** — scan for the same name/email
      appearing across multiple utilities; flag for a second look if
      found (could be legitimate — one person over multiple small
      systems — but should be confirmed, not assumed).
- [ ] **Reopen a random sample** — pick 3 rows already marked VERIFIED and
      re-open their sources from scratch, as if checking someone else's
      work, before calling the batch done.
- [ ] **CSV columns unchanged** — the client's original columns
      (utility name, city, state, plant size) are untouched; only the 7
      new columns were added.
- [ ] **Client's original data preserved** — no reformatting, reordering,
      or renaming of the client's existing columns or rows.
- [ ] **No invented emails anywhere** — final full-column scan for any
      email that looks pattern-generated (firstname.lastname@utilitydomain
      guessed rather than confirmed) rather than copy-pasted from a source.
