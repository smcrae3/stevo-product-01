# 18 — RAW INPUT PACK (SOP DEMONSTRATION SOURCE MATERIAL)

> **FICTIONAL DEMONSTRATION — NOT CLIENT WORK**
> This is the invented "before" material that produces the SOP in
> `01-SOP-DEMONSTRATION.md`. It's built to be genuinely messy — the kind of
> raw input a real small-business owner would actually hand over — not a
> cleaned-up version that makes the transformation look easier than it is.

---

## SOURCE 1 — OWNER VOICE-NOTE TRANSCRIPT

*(Transcribed as spoken — filler words and disorganization intact, since
that's what a real voice note produces.)*

> "Okay so, um, how we handle the — when someone emails us or fills out the
> form thing on the website. So basically whoever sees it first just kind
> of... deals with it? Like if I see an email come in I'll usually just
> reply myself if it's quick. But if Danny sees it he might just leave it
> for me because he's not sure what to say. And that's kind of a problem
> because sometimes stuff sits there for like two days and I don't even
> know it's there.
>
> Um, the urgent stuff — like if someone says their thing is broken or
> whatever, like really needs help — that should get handled fast obviously.
> But I don't know, sometimes people say 'urgent' and it's not really that
> urgent, and sometimes people don't say urgent but it actually is bad. So
> that's kind of tricky.
>
> We had this one thing where a customer emailed like three times about the
> same problem and nobody realized it was the same person because — I think
> Danny answered the first one, and then I answered the second one without
> knowing Danny already talked to them, and it was just a mess. She was
> pretty annoyed by the third one, honestly, and I don't blame her.
>
> Oh and billing stuff, that goes to — actually I'm not sure, I think
> whoever gets to it just handles it? We should probably have Danny do
> billing since he's better with the numbers. Actually no wait, sometimes I
> do billing too if it's simple. Ugh, I don't know, we should figure that
> out.
>
> What else... oh, sometimes people call instead of emailing and then
> whoever answers the phone just writes it on a sticky note or remembers it
> and that's — yeah that one's not great, stuff has definitely gotten lost
> that way before.
>
> I guess what I want is just — everybody knows who's supposed to handle
> what, urgent stuff actually gets treated as urgent, and nothing falls
> through the cracks like that billing lady did. That's really it."

---

## SOURCE 2 — SLACK-LIKE NOTES (from a group chat, screenshotted and pasted
into a document by the owner)

```
[Owner, 9:14am]: hey can we talk about how we're handling the contact form
stuff, feels disorganized

[Danny, 9:20am]: yeah honestly i never know if i should reply or if youre
already on it

[Owner, 9:21am]: same lol. maybe we need like. a system

[Danny, 9:35am]: what about the urgent ones tho, like some ppl put urgent
in the subject line but its not actually urgent

[Owner, 9:36am]: right and then the actually bad ones dont say urgent at all
sometimes

[Danny, 9:52am]: also should billing go to me? i dont mind doing it but i
wasnt sure if thats "my job" now or what

[Owner, 10:03am]: yeah probably? unless its like a really quick one then
whoever

[Danny, 10:04am]: ok but how do we know if its quick before we look at it
lol

[Owner, 10:15am]: fair point. ok we need to actually write this down at
some point
```

---

## SOURCE 3 — SCATTERED BULLET NOTES (owner's own attempt at documentation,
found in a Google Doc titled "process stuff ??")

```
- someone emails/fills out form → someone answers?? (who)
- urgent = fast, but what counts as urgent
- billing → danny (mostly)
- phone calls — write it down somewhere, not just remember it
- the [customer name redacted] thing — 3 emails, nobody knew, bad
- need a way to see what's outstanding, right now nobody can tell at a
  glance what's been answered
- should we say "we got your message" even if we can't fix it same day?
  probably yes
- what if it's not really support at all, like a vendor thing, does that
  still count
```

---

## THE EXCEPTIONS AND CONFLICTS — what a messy input actually contains

Real raw material like this always has (a) missing details, (b) at least
one direct conflict between sources, and (c) implied requirements that were
never stated outright. This demonstration includes all three, deliberately:

**Conflict:** Source 1 (voice note) says "we should probably have Danny do
billing... actually no wait, sometimes I do billing too if it's simple" —
an unresolved contradiction. Source 2 (Slack) shows the same unresolved
question days later ("should billing go to me? ... yeah probably? unless
its like a really quick one"). **Neither source actually answers the
question of what counts as "quick" for billing routing.**

**Missing detail:** No source specifies what "urgent" should actually mean
in concrete terms — only that misclassification in both directions has
happened and caused problems.

**Implied requirement, never stated outright:** The repeated-customer
incident (the "customer emailed three times" story, referenced in both
Source 1 and Source 3) implies a need for duplicate detection — but nobody
in the raw material actually says the words "we need to detect duplicate
contacts." That requirement has to be inferred from the story about the
failure, not read off a bullet point.

**Ambiguous scope:** Source 3's last bullet ("what if it's not really
support at all, like a vendor thing") raises a scope question the owner
never resolves — is out-of-scope handling part of this SOP or not?

---

## QUESTIONS I WOULD ASK THE CLIENT

*(This section is the actual demonstration of requirements-gathering skill
— a good SOP writer doesn't just transcribe messy notes, they identify
exactly what's still unknown and ask before guessing.)*

1. **"You mentioned Danny should 'probably' handle billing unless it's
   quick — what makes something quick? Can you give me two examples: one
   that's quick enough for anyone to handle, and one that should always go
   to Danny?"** *(Resolves the unresolved billing-routing conflict directly,
   rather than guessing at a threshold.)*

2. **"When you say urgent — can you walk me through the last time something
   was genuinely urgent, and separately, the last time someone said 'urgent'
   but it wasn't? What was actually different between those two?"**
   *(Converts a vague feeling into concrete classification signal — this is
   exactly what became the urgency table's example-signal column in the
   final SOP.)*

3. **"With the customer who emailed three times — what would have needed to
   be true for the second person to know the first email already existed?"**
   *(Surfaces the duplicate-detection requirement explicitly, rather than
   leaving it implied.)*

4. **"Should vendor emails or things that aren't really customer support
   go through this same process at all, or somewhere else entirely?"**
   *(Directly resolves the scope ambiguity from Source 3's last bullet.)*

5. **"If nobody responds to a resolved inquiry, how long should it sit
   before you consider it done? Is there a point where you'd want it to
   just close automatically?"** *(This question doesn't appear anywhere in
   the raw material at all — it's a gap the SOP needs filled that the
   client hadn't even thought to mention, which is exactly the kind of
   question that separates a good intake interview from a transcription
   exercise.)*

6. **"Do you want acknowledgement emails to go out even for stuff you can't
   fix same day?"** *(Directly answers the raw material's own open
   question — "probably yes" in Source 3 — by confirming rather than
   assuming.)*

---

*This raw input pack and its resulting SOP are both fictional
demonstrations built for portfolio purposes. No real business, owner, or
employee is represented.*
