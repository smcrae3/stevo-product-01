# 01 — Lane A: Simple AI / No-Code Automation Repair — Live Demand

## Method note (read before the evidence)

This session cannot fetch live, authenticated Upwork pages (`www.upwork.com`
is blocked by this environment's egress proxy — confirmed again this turn),
and cannot fetch Reddit, RemoteOK, or Contra either (all four attempted,
all four blocked). This is the same constraint from the last report, now
confirmed against more sources. It matters directly for this correction:
the "Ranking Order" job was never actually independently verified by this
session — it was verified by Steven's own authenticated check. That's the
only way live verification has worked all along here. See
09-CHALLENGE (folded into 08-WINNER.md's Phase 9 section) for what that
means for the prior report's confidence level.

What search *can* do is surface real, currently search-indexed job
listing titles and URLs — these are real pages that exist, but their
live/open/complete status cannot be confirmed without opening them
authenticated, exactly like last time.

## Real, indexed, beginner-safe-shaped listings found (title + URL real;
status unverified)

| Title | URL | Fit signal |
|---|---|---|
| Create Zapier, Streak, and Google Sheets automation | upwork.com/job/Create-Zapier-Streak-and-Google-Sheets-automation_~0129f4def83f55eaa9/ | GREEN-shaped — Sheets + Zapier, "less than 30 hrs/week," matches the boring-and-winnable profile |
| Zapier + Airtable + Google Sheets Automation Specialist — CRM Workflow Setup | upwork.com/freelance-jobs/apply/Zapier-Airtable-Google-Sheets-Automation-Specialist-CRM-Workflow-Setup_~022022803072181311013/ | YELLOW — "CRM Workflow" needs a scope check; Airtable/Sheets/Zapier core is fine |
| Automation Expert Needed — n8n \| Make.com \| Zapier \| Agents \| Google Sheets | upwork.com/freelance-jobs/apply/Automation-Expert-Needed-n8n-Make-com-Zapier-Agents-Google-Sheets_~022080059132711737216/ | YELLOW/RED — n8n and "Agents" named alongside Make; likely scope beyond the hard rejection filter unless the actual ask is Make-only |
| GoHighLevel, Make.com & Google Sheets Automation Specialist | upwork.com/freelance-jobs/apply/GoHighLevel-Make-com-Google-Sheets-Automation-Specialist_~022070204334421802867/ | YELLOW — GoHighLevel is a CRM; depends whether the ask is basic field mapping (GREEN) or deep GHL API work (RED) |

**None of these four are nominated as verified opportunities in
04/09 — they are candidate leads only,** because their current
open/closed status, full task description, proposal count, and client
history cannot be checked from here. This is stated plainly rather than
repeating the exact mistake this correction was issued for.

## Category-level demand confirmed (aggregate evidence, real)

- Upwork's own "Best Zapier Developers" and hire pages confirm an active,
  ongoing category of small Sheets/Zapier/Make automation jobs — "get
  qualified proposals within 24 hours" for this category is a platform
  claim, not invented.
- Fiverr: single Make.com/n8n scenario builds price **$100–$300**,
  confirmed in the prior report and unchanged.
- The verified live job that triggered this correction ("Automation
  manager for Make.com," $150) — now confirmed by Steven's own
  authenticated read to have an **incomplete posting** (Job 1 text
  present, Job 2 entirely absent), unverified payment method, and
  15–20 proposals with 2 already interviewing. This is now a **hard SKIP**
  — see `CLAUDE-CLOSER/LATEST-CLOSER-DECISION.md` for the update, and it
  is not re-recommended anywhere in this showdown.

## What this correction actually teaches about Lane A

Not that demand is fake — the category-level evidence (real indexed job
titles, real Fiverr pricing, Upwork's own stated 24-hour proposal
turnaround) says otherwise. What it proves is that **any specific listing
this session flags must be treated as unverified until Steven personally
opens and reads it** — a process discipline, not a demand-level flaw.
That discipline now applies to every lane in this showdown equally,
including B and C.

## Beginner-safe filter applied to the category (not individual unverified
listings)

- Broken Make scenario / Forms→Sheets→Gmail / simple mapping / duplicate
  sends / filter-route problems / small scenario QA: **all confirmed as a
  real, recurring category** by the aggregate pricing and job-title
  evidence above.
- n8n-heavy, GoHighLevel-deep, CRM-API-deep variants of the same search
  results are explicitly flagged YELLOW/RED per the hard rejection filter
  — the category contains both safe and unsafe work mixed together, which
  is exactly why individual verification (not category-level enthusiasm)
  has to gate every bid.
