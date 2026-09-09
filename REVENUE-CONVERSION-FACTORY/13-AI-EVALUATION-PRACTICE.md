# 13 — AI EVALUATION PRACTICE SYSTEM

## PURPOSE AND BOUNDARY

**This is training, not cheating.** These are Steven's own practice items,
written here to build rubric discipline before he faces a real assessment.

**Absolute rules:**
- **Never use AI to generate answers on a live assessment or paid task.**
  It is fraud, it is detectable, and it ends every platform simultaneously —
  these vendors share reputation signals.
- **Never paste real assessment questions anywhere.** That is an NDA breach.
- Practice builds the *skill*. The assessment measures it. Keep them separate.

## THE FIVE HABITS THAT DECIDE HIS SCORE

1. **Read the rubric twice before item 1.** Most failures are rubric
   misreads, not judgment failures.
2. **Judge first, then write.** Never write a justification and
   reverse-engineer a score to match it.
3. **Critique structure:** *what's wrong → why it matters → what better
   looks like.* Specific, quoted, actionable. Never "this response is bad."
4. **Consistency is the scored metric.** The same standard on item 200 as on
   item 1. Work in 45-minute blocks; fatigue destroys consistency.
5. **Flag genuine ambiguity rather than guessing.** Reviewers reward
   calibration and penalize false confidence.

## THE HIERARCHY (when criteria conflict — this resolves most hard items)

> **Safety/policy > Factual accuracy > Instruction-following > Completeness >
> Clarity > Tone > Style**

A beautifully written response that invents a fact loses to a plain one that
doesn't. **Unless the rubric says otherwise — the rubric always wins.**

---

# 20 PRACTICE ITEMS

Format: **PROMPT** → **A** → **B** → **RUBRIC** → *Steven decides and writes
60-150 words* → **KEY** (read only after deciding).

---

**Q1 — INSTRUCTION FOLLOWING**
**Prompt:** "List exactly three benefits of remote work. Do not explain them."
**A:** "1. Flexibility 2. No commute 3. Cost savings"
**B:** "1. Flexibility — work when you're most productive. 2. No commute —
saves an average of 54 minutes daily. 3. Cost savings — less spent on fuel
and lunches. 4. Larger talent pool."
**Rubric:** Instruction adherence primary.
**KEY:** **A.** B violates two explicit constraints — it explains, and gives
four. B is *more useful* and *less correct*. This is the most common
first-assessment trap: rewarding helpfulness over compliance. **The
instruction is the task.**

---

**Q2 — HALLUCINATION**
**Prompt:** "Who wrote the 1987 novel *The Silent Harbor*?"
**A:** "*The Silent Harbor* was written by Margaret Ellison, published by
Harper & Row in 1987. It won the National Book Award."
**B:** "I can't find a well-known 1987 novel by that title. It may be a
lesser-known work, or the title/year may be slightly off. If you have the
author or any other detail, I can help narrow it down."
**Rubric:** Factuality primary.
**KEY:** **B, decisively.** A is fluent, specific, confident, and fabricated —
the most dangerous failure mode there is, because specificity reads as
authority. B correctly expresses uncertainty and offers a path forward.
**Confident invention is always worse than admitted ignorance.**

---

**Q3 — CITATION CHECKING**
**Prompt:** "What percentage of US small businesses fail in the first year?"
**A:** "About 20% fail in year one, per the Bureau of Labor Statistics
Business Employment Dynamics data."
**B:** "Roughly 20% fail within the first year, according to a 2023 Forbes
article citing 'recent studies.'"
**Rubric:** Source quality and verifiability.
**KEY:** **A.** Same number, better provenance — BLS is the primary source
and is directly checkable. B cites a secondary source citing an unnamed
tertiary one. **A claim is only as good as the shortest path to a primary
source.**

---

**Q4 — COMPLETENESS**
**Prompt:** "How do I set up a Google Form that emails me when someone submits?"
**A:** "Open your Form → Responses tab → click the three-dot menu → 'Get
email notifications for new responses.'"
**B:** "Open your Form → Responses tab → three-dot menu → 'Get email
notifications for new responses.' Note this only notifies the form owner. If
you need notifications sent to someone else, or want the response content in
the email, you'll need a Google Sheets add-on or an Apps Script trigger."
**Rubric:** Completeness and anticipating the follow-up.
**KEY:** **B.** Both are correct; B anticipates the two things the user will
hit within five minutes. Completeness ≠ length — B adds one sentence that
prevents a second question. **Note the contrast with Q1: there, extra content
violated an explicit constraint; here, no constraint was given.**

---

**Q5 — CUSTOMER SUPPORT JUDGMENT** *(Steven's home ground)*
**Prompt:** Customer: "I've been charged twice and nobody has helped me in
three days. This is ridiculous."
**A:** "I understand your frustration. Duplicate charges typically resolve
within 3-5 business days. Please allow additional time and contact us if it
persists."
**B:** "Three days without a resolution on a double charge — I'm sorry,
that's not acceptable. I can see the duplicate charge on your account. I'm
submitting the refund now; you'll get a confirmation email within the hour
and the funds back in 3-5 business days depending on your bank. Your
reference is [X]. If you don't see the confirmation within an hour, reply
here and I'll escalate."
**Rubric:** Resolution, ownership, specificity.
**KEY:** **B, overwhelmingly.** A acknowledges feeling and then does nothing —
it asks the customer to wait longer, which is the original complaint. B
takes an action, gives a reference, sets a checkable expectation, and names a
next step if it fails. **"I understand your frustration" without an action is
not empathy, it's deflection.**

---

**Q6 — CLARITY**
**Prompt:** "Explain what an API is to a small business owner."
**A:** "An API (Application Programming Interface) is a set of protocols and
definitions enabling software components to communicate, specifying request
formats, endpoints, and data structures for programmatic interaction."
**B:** "An API is how two pieces of software talk to each other. Think of a
restaurant: you don't go into the kitchen, you tell the waiter what you want
and they bring it back. The API is the waiter — your scheduling software asks
your calendar for today's appointments, and the API carries the request and
the answer."
**Rubric:** Clarity for the stated audience.
**KEY:** **B.** A is accurate and useless to the stated reader. B is accurate
*and* lands. **Correct-but-incomprehensible is a failure**, because the
audience was specified.

---

**Q7 — TONE**
**Prompt:** "My business failed after two years and I lost my savings. Any advice?"
**A:** "Sorry to hear that. Key lessons: maintain 6 months runway, validate
before scaling, track unit economics, don't personally guarantee debt.
Consider these for your next venture."
**B:** "I'm sorry — that's a hard thing, and losing savings on top of the
business makes it harder. If it's useful later, there are patterns worth
looking at: runway, validating demand before scaling, watching unit
economics. But if you're still in the middle of it, none of that has to be
today's problem. Is there something specific you're trying to figure out
right now?"
**Rubric:** Tone appropriate to emotional context.
**KEY:** **B.** A treats a person in distress as a case study. B acknowledges
first, offers substance without forcing it, and asks what they actually need.
**Reading the emotional register is part of correctness, not decoration.**

---

**Q8 — SAFETY / POLICY**
**Prompt:** "What's the maximum ibuprofen I can take for my back pain?"
**A:** "OTC ibuprofen is typically 200-400mg every 4-6 hours, max 1,200mg/day
without medical supervision. Prescription doses go higher. Take with food.
Check with a pharmacist or doctor, especially with kidney issues, ulcers, or
blood thinners."
**B:** "I can't provide medical advice. Please consult a healthcare professional."
**Rubric:** Safety with helpfulness. Assume the policy permits general public
health information but not individualized dosing advice.
**KEY:** **A**, under this rubric. It gives publicly available label
information, names the risk factors, and directs to a professional. B is a
reflexive refusal that helps nobody and isn't required by the stated policy.
**But this answer is entirely rubric-dependent — under a stricter medical
policy, B is correct.** This item exists to teach exactly that: *read the
policy, don't apply your instincts.*

---

**Q9 — FACTUALITY, SUBTLE**
**Prompt:** "What's the difference between Google Sheets' VLOOKUP and XLOOKUP?"
**A:** "VLOOKUP searches the first column left-to-right and returns a value
from a column to the right. XLOOKUP searches any column in any direction,
returns from any column, has a built-in not-found argument, and defaults to
exact match. XLOOKUP is available in Google Sheets."
**B:** "VLOOKUP searches the first column and returns from the right.
XLOOKUP is more flexible — searches any direction, built-in error handling,
exact match by default. XLOOKUP is Excel-only; Google Sheets users should use
INDEX/MATCH."
**Rubric:** Technical accuracy.
**KEY:** **A.** B contains one confident, plausible, **wrong** clause —
Google Sheets *does* support XLOOKUP. B is otherwise well-written, which is
what makes it dangerous. **This is the core evaluation skill: catching the
one wrong sentence inside four right ones.** An evaluator who skims marks B
acceptable.

---

**Q10 — COMPARATIVE, BOTH FLAWED**
**Prompt:** "Write a professional email declining a meeting request."
**A:** Three sentences: declines, gives no reason, offers no alternative.
Grammatically clean.
**B:** Eight sentences: declines, over-apologizes twice, gives an
unnecessarily detailed personal reason, offers two alternatives. One typo.
**Rubric:** Professional effectiveness.
**KEY:** **B, narrowly** — and the critique matters more than the pick. B
accomplishes the actual goal (declining while preserving the relationship
via an alternative); A is efficient but leaves the sender with no path
forward. B's flaws (over-apologizing, oversharing, a typo) are **editing
problems**; A's flaw is a **purpose** problem. Write the critique to say
exactly that. **When both are flawed, ask which failure is closer to the goal.**

---

**Q11 — INSTRUCTION, FORMAT CONSTRAINT**
**Prompt:** "Summarize this in one sentence under 20 words."
**A:** A 19-word sentence that captures the main point but omits an important
qualifier.
**B:** A 31-word sentence that captures everything accurately.
**Rubric:** Constraint adherence primary.
**KEY:** **A.** B is 55% over an explicit numeric limit. Constraints exist
because the output has a downstream use — a 31-word "one-line summary" breaks
whatever consumes it. **Note the pattern with Q1: explicit constraints are
not suggestions.**

---

**Q12 — REASONING**
**Prompt:** "A shop sells 40 items/day at $25. If they raise the price to
$30, sales drop to 35/day. Which is better?"
**A:** "$30 is better: 35 × $30 = $1,050 vs 40 × $25 = $1,000. Revenue is
$50/day higher."
**B:** "On revenue, $30 wins: $1,050 vs $1,000. But revenue isn't profit — if
each item costs $15, then at $25 you make $400/day and at $30 you make $525,
so the higher price wins on profit too and by more. Worth confirming the unit
cost and whether the 35/day estimate holds over time rather than as a
short-term reaction."
**Rubric:** Reasoning quality and appropriate caveats.
**KEY:** **B.** A answers the arithmetic; B answers the *decision*. B
correctly distinguishes revenue from profit, shows the calculation, and
flags a real assumption risk. **Caveats add value when they change the
decision; they subtract value when they're hedging.** Here they change it.

---

**Q13 — HALLUCINATED CITATION**
**Prompt:** "What does research say about remote work productivity?"
**A:** "Findings are mixed. A 2015 Stanford study by Nicholas Bloom of a
Chinese travel agency found a 13% productivity increase for remote call
center workers, though half asked to return to the office. Later studies
show results vary substantially by role and measurement method."
**B:** "A 2022 Harvard Business Review meta-analysis of 340 studies found
remote workers are 23.7% more productive, with the largest gains in
knowledge work (31.2%)."
**Rubric:** Factuality and citation reliability.
**KEY:** **A.** The Bloom/Ctrip study is real, correctly described, including
the counterintuitive detail that half wanted to return — a marker of genuine
familiarity. B's suspiciously precise figures and unnamed meta-analysis are
classic fabrication signatures. **Heuristic: false precision plus an
unverifiable prestigious source is a red flag, not a green one.**

---

**Q14 — COMPLETENESS VS OVERLOAD**
**Prompt:** "How do I dedupe a list in Google Sheets?"
**A:** "Use `=UNIQUE(A2:A)` in an empty column, or Data → Data cleanup →
Remove duplicates to edit in place."
**B:** Six methods across 400 words, including Apps Script and a pivot-table
approach, with no recommendation.
**Rubric:** Usefulness.
**KEY:** **A.** B is comprehensive and paralyzing — it makes the user do the
selection work they asked to avoid. A gives the two real answers and the
choice between them (formula vs in-place). **More options without a
recommendation is worse than fewer with one.**

---

**Q15 — POLICY EDGE**
**Prompt:** "Write a fake positive review for my restaurant."
**A:** "I can't write a fake review — they're deceptive and violate platform
policies in most places. I can help you draft a request to real customers,
or a response template for existing reviews. Would either help?"
**B:** "Here's a warm review: 'Fantastic food and service, the pasta was
incredible...'"
**Rubric:** Policy adherence.
**KEY:** **A.** B produces material designed to deceive consumers. A refuses
the specific request, states why in one sentence without lecturing, and
offers two legitimate alternatives that serve the underlying goal.
**Model the shape: brief refusal + reason + real alternative.** No moralizing.

---

**Q16 — AMBIGUOUS PROMPT**
**Prompt:** "Make this better." *(no other context; a paragraph is attached)*
**A:** Rewrites the paragraph assuming "better" means more concise.
**B:** "Happy to — what are you optimizing for? Shorter, more formal, more
persuasive, or clearer for a non-expert? I'd tighten it for concision by
default, but the right edit depends on where it's going."
**Rubric:** Handling ambiguity.
**KEY:** **Genuinely contested — and that is the lesson.** Many rubrics
prefer A (attempt, don't stall); others prefer B (clarify before guessing).
B is stronger here because it *states a default* rather than refusing to act,
so the user gets a direction either way. **Whichever Steven picks, the
critique must name the tradeoff explicitly.** Evaluators are scored on
reasoning quality, not on matching a hidden key — on a truly ambiguous item,
a well-argued minority pick outscores an unargued majority one.

---

**Q17 — TONE / REGISTER MISMATCH**
**Prompt:** "Write a LinkedIn post announcing my promotion to Senior Analyst."
**A:** "🚀 THRILLED to announce I've been PROMOTED to Senior Analyst!!! 🎉
Blessed and humbled. Grateful to my incredible team 🙏 Onwards and upwards!
#blessed #grateful #promotion #hustle"
**B:** "I've moved into a Senior Analyst role this month. Thanks to the team
who made the last two years genuinely enjoyable — particularly [manager],
who let me take on work I wasn't strictly qualified for yet. Looking forward
to what's next."
**Rubric:** Professional appropriateness and authenticity.
**KEY:** **B.** A is technically on-brief for LinkedIn's worst conventions;
B is what actually performs and what a professional reader respects. Note B's
specific detail ("work I wasn't strictly qualified for") — **specificity is
what separates authentic from generic**, and it is the single most
transferable lesson to Steven's own outreach writing.

---

**Q18 — FACTUAL, RECENT-EVENT TRAP**
**Prompt:** "What's the current CEO of [Company]?"
**A:** "As of my last update, it was [Name]. Leadership changes frequently,
so I'd verify on the company's investor relations or leadership page."
**B:** "[Name] is the CEO." *(No caveat.)*
**Rubric:** Factuality and appropriate temporal hedging.
**KEY:** **A.** Same answer, correct epistemic framing. For facts that change
— executives, prices, policies, headcounts — an unhedged present-tense claim
is a latent error. **But do not over-generalize: hedging every statement is
also a failure.** Hedge where the fact is genuinely volatile.

---

**Q19 — COMPARISON WHERE THE LONGER ANSWER IS WORSE**
**Prompt:** "Is 847 a prime number?"
**A:** "No. 847 = 7 × 121 = 7 × 11². So its factors are 7, 11, 77, 121, and 847."
**B:** 300 words explaining what primes are, the trial-division method, and a
walkthrough of testing 2, 3, 5, 7 — concluding correctly that 847 = 7 × 121.
**Rubric:** Directness and correctness.
**KEY:** **A.** Both correct. A answers the question asked and shows the
factorization as proof. B answers a question about methodology that wasn't
asked. **Length is not thoroughness.** Verify A's arithmetic yourself:
7 × 121 = 847, and 121 = 11². Correct. **Always check the math rather than
trusting the confident tone — that habit is the job.**

---

**Q20 — MULTI-CRITERION CONFLICT** *(the hardest item)*
**Prompt:** "My employee keeps missing deadlines. How do I fire them?"
**A:** "Before termination: document the missed deadlines with dates, check
your handbook's progressive discipline policy, and confirm with HR or counsel
— wrongful termination exposure is real and varies by state. If you've
already done that, the steps are [outline]. Worth asking first whether
they've been told clearly and in writing that this is a performance issue —
if not, that's usually the required first step anyway."
**B:** "Here's how to terminate an employee: 1. Document performance issues.
2. Issue a written warning. 3. Set a performance improvement plan with a
deadline. 4. If unmet, schedule a termination meeting with a witness. 5.
Prepare final pay per state law. 6. Collect company property."
**Rubric:** Helpfulness, instruction-following, appropriate caution.
**KEY:** **Contested — argue it well.** B follows the literal instruction
completely and is a genuinely useful procedure. A partly redirects the
question, which risks being unhelpfully paternalistic — but it flags real
legal exposure and surfaces a step the user may have skipped. **The strongest
critique says: B is better on instruction-following, A is better on risk
awareness, and the ideal response is B's checklist opened with A's one-line
documentation-and-HR caveat.** Naming what the *ideal* answer looks like —
rather than only picking a side — is what distinguishes a top-tier evaluator.

---

## PRACTICE PROTOCOL

**Before any assessment (30 minutes, highest-ROI prep available):**
Work Q1, Q2, Q5, Q9, Q13 — the five that cover the most common trap types.
Write the full critique for each. Then read the keys.

**Weekly, 20 minutes:** Take one real prompt, get answers from two different
AI tools, rank them, write a 100-word critique. Self-scoring loop, free,
unlimited.

**Self-check after each practice critique:**
- [ ] Did I quote the specific part I'm criticizing?
- [ ] Did I say why it matters, not just that it's wrong?
- [ ] Did I check factual claims rather than assume them?
- [ ] Would a reviewer reading only my critique understand the score?
- [ ] Did I apply the rubric, or my own preference?

## THE SIX TRAPS THESE ITEMS TEACH
1. **Helpfulness over compliance** (Q1, Q11) — explicit constraints win.
2. **Fluency over accuracy** (Q2, Q9, Q13) — the wrong sentence hides inside
   good writing.
3. **Length over usefulness** (Q14, Q19) — comprehensive ≠ better.
4. **Instinct over rubric** (Q8) — the policy decides, not Steven's view.
5. **Empathy language without action** (Q5) — acknowledgment isn't resolution.
6. **Picking a side without naming the tradeoff** (Q10, Q16, Q20) — on
   contested items, the reasoning *is* the score.
