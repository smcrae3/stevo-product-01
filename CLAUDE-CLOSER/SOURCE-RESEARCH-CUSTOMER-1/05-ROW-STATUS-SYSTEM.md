# 05 — Row Status System

Add an internal `status` column (Steven's own tracking column, not part of
the client's 7 required columns) so the spreadsheet is scannable at a
glance. Remove or keep this column when delivering based on whether the
client would find it useful — it's a working tool either way.

| Status | Exact meaning |
|---|---|
| **VERIFIED** | Name, title, and either a published email or confirmed general contact — all with a real source_url that was personally opened and checked |
| **PARTIAL** | Some fields filled (e.g., phone and source found, but no named contact within the time-box), rest deliberately left blank, `notes` explains what's missing and why |
| **UNAVAILABLE** | Nothing reliable found after working the decision tree within the time-box — all contact fields blank, `notes` states what was checked |
| **CONFLICT** | Two or more sources disagree on the name/title; both candidates recorded in `notes`, no field arbitrarily chosen |
| **CLOSED/MERGED** | The utility itself is closed, outsourced, or merged into another system; `notes` states the current status and source, no contact forced |

## Why this matters

A glance down the status column tells Steven (and, if shown, the client)
exactly which rows are solid, which need a possible second pass, and which
were correctly left incomplete rather than guessed. It turns "is this
batch done?" into a five-second visual check instead of re-reading every
row.
