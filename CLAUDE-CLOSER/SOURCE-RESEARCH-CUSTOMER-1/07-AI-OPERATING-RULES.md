# 07 — AI Operating Rules

## The one-line rule

**AI DISCOVERS. SOURCE PROVES. STEVEN APPROVES.**

Nothing is "verified" because AI said so. It's verified because Steven
personally opened the source and read it himself.

## AI MAY

- Search for candidate sources per utility (city site, county site, state
  RWA, state drinking-water records).
- Suggest search queries when the obvious ones don't turn anything up.
- Identify which pages on a site are likely to hold the answer.
- Extract the visible text of a page Steven then opens and confirms
  himself.
- Organize rows, pre-fill draft cells for Steven to check, and keep the
  spreadsheet tidy.
- Flag contradictions between two sources for Steven's attention.
- Help run the QA checklist (e.g., scanning for emails that look
  pattern-generated) — as a flag for Steven to check, never as a final
  verdict.

## AI MAY NOT

- Independently decide a row is "verified" without Steven opening the
  source.
- Fabricate or construct an email address, even a plausible-looking one.
- Hallucinate a source that doesn't actually contain the claimed
  information.
- Fill a blank because it "looks incomplete" — a justified blank is a
  correct, finished answer, not a gap to be closed by guessing.
- Mark a title as matching "oversees plant operations" without Steven
  confirming that judgment call himself — title-matching is exactly the
  YELLOW-rated judgment skill from the earlier capability review, and it
  stays a human decision.

## Simple QA procedure Steven runs, using AI as a tool, not a verifier

1. AI proposes a candidate answer with the page it came from.
2. Steven opens that exact page.
3. Steven confirms with his own eyes: is the name/email/phone actually
   printed there, attached to this utility, and current enough to trust?
4. If yes → mark VERIFIED, keep the source_url.
5. If no, or unsure → do not accept the AI's draft; either re-search
   deeper down the decision tree or mark PARTIAL/UNAVAILABLE, whichever
   the time-box and decision tree indicate.

The failure mode this exists to prevent isn't AI lying on purpose — it's
AI sounding confident about something it read quickly, and Steven
accepting that confidence instead of checking it. The rule fixes that by
making "Steven opened the page" the only thing that counts as proof,
regardless of how sure AI's draft sounded.
