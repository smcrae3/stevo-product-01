# Workflow Diagram

This diagram mirrors the exact architecture documented in
[`make-com-workflow.md`](make-com-workflow.md). It renders automatically
on GitHub.

```mermaid
flowchart TD
    A[Google Form submission] --> B[Google Sheets: new row in Leads tab]
    B --> C{Apps Script<br/>onFormSubmit trigger}
    C --> C1[Assign Lead ID]
    C1 --> C2[Validate Email / Service Type]
    C2 --> C3[Safety-net Urgency tag]
    C3 --> C4[Set Status + suggested Follow-Up Date]
    C4 --> C5[Flag possible duplicates]
    C5 --> D[Make.com: Watch New Rows trigger]
    D --> E[Log / add row]
    E --> F[AI: Summarize lead]
    F --> G[AI: Classify urgency]
    G --> H{Urgency value valid?}
    H -- No --> H1[Fallback to Routine<br/>Status = Needs Review]
    H -- Yes --> I[AI: Draft response]
    H1 --> I
    I --> J{Email address valid?}
    J -- Yes --> K[Gmail: send customer<br/>acknowledgement email]
    J -- No --> L[Skip customer email<br/>Status = Needs Review]
    K --> M[Gmail: send owner<br/>notification email]
    L --> M
    M --> N[Update sheet:<br/>Customer Response = Sent<br/>Owner Notification = Sent<br/>Status = Owner Notified]
    N --> O[Human reviews lead in Sheet]
    O --> P{Human handles<br/>quoting / scheduling / dispatch}
    P --> Q[Human updates Status,<br/>Follow-Up Date, Notes]
```

## Scope boundary

Everything above the human review step (`O`) is automated. Everything at
and below it — actually talking to the customer, quoting a price,
scheduling a technician, dispatching a crew — is done by a person. This
system's job ends at "the customer got a fast, professional response and
the owner got notified."
