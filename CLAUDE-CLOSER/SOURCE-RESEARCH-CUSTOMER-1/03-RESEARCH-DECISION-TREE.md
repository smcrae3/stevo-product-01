# 03 — Research Decision Tree

Run this same sequence for every single utility row. Stop climbing the
list the moment a level produces a verified, sourced answer — don't keep
searching "to be thorough" once you have what you need.

## The levels, in order

**LEVEL 1 — Official city / utility / district website.**
Start here always. Look for a "Water," "Utilities," "Public Works," or
"Wastewater" department page.

**LEVEL 2 — Official public works or water department page.**
If Level 1 is just a homepage, drill into the department page directly —
this is usually where the name actually lives.

**LEVEL 3 — Official staff directory.**
Many city sites have a searchable directory separate from department
pages. Check it if the department page doesn't name a person.

**LEVEL 4 — Council minutes / budgets / government PDFs.**
Small towns often name their water operator in a budget line item or a
council meeting record even when there's no directory. Search the town
name + "water superintendent" or "+budget" or "+minutes."

**LEVEL 5 — State Rural Water Association.**
Confirmed real and often system-specific (e.g., some state associations
run an actual searchable systems directory). Search "[state] rural water
association" + the utility or town name.

**LEVEL 6 — State drinking-water / wastewater program records.**
State environmental or health departments sometimes publish an
"operator of record" for licensed systems. Worth a check for stubborn
small systems.

**LEVEL 7 — County government sources.**
Some small towns' water service is actually run by the county — check if
the town itself has nothing.

**LEVEL 8 — LinkedIn.**
**Name/title confirmation only.** Never a source for an email address,
ever. Use it only to double check a name found elsewhere is still current,
or to confirm a title matches "oversees plant operations."

## Outcome rules — apply after climbing the levels

| Situation | Action |
|---|---|
| **VERIFIED CONTACT FOUND** — name, title, and either a published email or you've directly opened the source page | Fill the row completely, source_url included |
| **NO VERIFIED PERSON**, but a general office contact exists | Fill contact_email or contact_form_url with the general/office channel; leave contact_name/contact_title blank; note "no named contact publicly available" |
| **CONFLICTING INFORMATION** — two sources name different people, or a name appears outdated | Flag it: status = CONFLICT, put both candidates in `notes`, do not pick one arbitrarily |
| **PLANT CLOSED / MERGED / OUTSOURCED** | Do not force a contact. Record the actual status in `notes` (e.g., "utility merged into [X] Regional Water Authority in [year], per [source]") |
| **NOTHING RELIABLE FOUND** after working through the levels within the time-box (see `04-TIME-BOX-RULES.md`) | Leave all contact fields blank, status = UNAVAILABLE, note what was checked |

## The one rule that overrides every level

**NEVER GUESS.** Not the email format, not the name spelling, not which
title is "probably" the right one when two are equally plausible. A blank
field with an honest note is always the correct output; a wrong-looking
fact is never acceptable, no matter how far down the tree you had to go.
