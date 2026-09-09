# 10 — Antigravity Sample Audit

## SAMPLE AUDIT PENDING (re-checked a third time, branch still not found)

Third attempt, run specifically because this turn's mission said
Antigravity was fixing the missing Git handoff: `git fetch origin
antigravity/source-research-sample` again returned `fatal: couldn't find
remote ref antigravity/source-research-sample`. A full `git fetch` of
every branch on `origin` followed by `git branch -r` still shows only six
branches in this repository (`main` and five `claude/*` session branches)
— no `antigravity/*` branch of any name has appeared yet. Each branch's
file tree was also checked directly for `SOURCE-CHECKED-RESEARCH-SAMPLE`
or `WATER-UTILITY` by name — nothing found on any of them.

This session's GitHub access is scoped to `smcrae3/stevo-product-01`
only; if Antigravity pushed to a different repository, a fork, or hasn't
pushed at all yet, none of that would be visible from here. That's stated
as a fact about this environment, not a judgment on Antigravity's work.

**No audit was performed, because there is nothing here to audit — for the
third consecutive check.** Per this turn's explicit instruction ("if
branch still does not exist: write SAMPLE AUDIT PENDING. Do not
fabricate"), that's exactly what this file records. No claim about the
sample's contents (3 utilities, 3 verified, 0 guessed, 18 minutes,
mentioned in prior mission text) is treated as confirmed — that remains
Antigravity's/Steven's own reported claim, not an independent
verification. The audit method below stays ready to run the moment the
branch actually appears and is reachable from this repository.

## Audit method (to run immediately once the files exist — read-only, no edits)

For every row in the sample:

1. **Open the cited source_url directly.** Confirm it loads (not dead,
   not paywalled).
2. **Check each material field against the page**: does the name, title,
   email, and phone actually appear on that exact page, for that exact
   utility?
3. **Look specifically for guessed/inferred emails** — does the email
   look copy-pasted from the page, or does it look pattern-generated
   (firstname.lastname@domain) without direct textual confirmation on the
   page?
4. **Check source quality** — is it an official/primary source (city,
   utility, county, state) or a low-trust secondary source (an aggregator,
   an outdated cache, a directory site with no primary confirmation)?
5. **Check whether the title really means operational responsibility** —
   is "Public Works Director" or "City Clerk" or whatever title is used
   actually the person overseeing plant operations, or a plausible-looking
   but wrong role?
6. **Check whether anything is overstated** — does `03-METHOD-AND-QA.md`
   (if it exists) claim a stronger verification process than the actual
   rows demonstrate, or claim paid-client-equivalent rigor for what is
   still a self-built demonstration?

## Classification to apply once audited

- **PASS** — every row's material facts are independently confirmed on
  their cited sources, no guessed/inferred emails found, titles correctly
  matched to operational responsibility, method write-up accurately
  describes what was actually done.
- **PASS WITH CORRECTIONS** — the method is sound and no fabrication is
  found, but specific rows or claims need a fix (e.g., one email looks
  pattern-generated, one title is mismatched, the method doc overstates
  rigor) before this sample is used as the reference example.
- **FAIL** — any invented/guessed contact information found, or a source
  that doesn't actually support its claimed fact, anywhere in the sample.

## Standing rule until this audit actually runs

Do not describe Antigravity's sample as verified, audited, or
"PASS"-anything in any client-facing material (the proposal in
`01-FINAL-PROPOSAL.md` and the screening answer in `02-SCREENING-ANSWERS.md`
both already avoid this — they reference it only as a self-built
demonstration, conditionally, and only if it exists by the time it's
needed). This file will be updated in place once the sample is available
and actually reviewed — not before.
