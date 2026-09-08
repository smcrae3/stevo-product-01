# 02 — Business Model Ranking

Scale: 0–100. For every "lower is better" axis (competition, startup cost,
technical difficulty, acquisition difficulty, platform risk, refund risk)
the number shown is already inverted so higher always = better across the
whole table. These are reasoned estimates from the Phase 1 evidence, not
measured data — flagged as such, no false precision implied.

| # | Model | Demand | Competition¹ | Speed¹ | Cost¹ | Tech¹ | Acq¹ | AI Lev. | Margin | Platform Risk¹ | Refund Risk¹ | Steven Fit | P(first $100 / 30d) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | AI-assisted freelancing (Upwork/Fiverr automation) | 75 | 45 | 70 | 90 | 55 | 65 | 70 | 60 | 55 | 85 | 75 | **65** |
| 2 | Automation troubleshooting/implementation (subset of #1) | 75 | 55 | 75 | 90 | 60 | 70 | 75 | 65 | 55 | 85 | 80 | **70** |
| 3 | Agency subcontracting / white-label delivery | 65 | 40 | 30 | 85 | 45 | 20 | 60 | 55 | 50 | 75 | 40 | 20 |
| 4 | AI-assisted local-business services | 55 | 50 | 40 | 80 | 55 | 30 | 60 | 55 | 65 | 80 | 55 | 30 |
| 5 | Digital products (templates/SOPs/workflow kits) | 55 | 30 | 55 | 95 | 75 | 25 | 65 | 90 | 70 | 90 | 60 | 30 |
| 6 | Shopify branded ecommerce | 50 | 30 | 25 | 40 | 45 | 20 | 45 | 40 | 55 | 60 | 25 | 10 |
| 7 | Traditional (AliExpress-style) dropshipping | 45 | 20 | 30 | 45 | 55 | 25 | 40 | 25 | 45 | 40 | 20 | 10 |
| 8 | TikTok Shop / social-commerce dropshipping | 60 | 25 | 35 | 45 | 45 | 40 | 55 | 30 | 50 | 45 | 25 | 15 |
| 9 | Print on demand (niche) | 55 | 40 | 45 | 75 | 60 | 30 | 55 | 55 | 65 | 70 | 30 | 20 |
| 10 | Marketplace resale / arbitrage | 40 | 30 | 40 | 60 | 65 | 30 | 30 | 35 | 50 | 65 | 30 | 15 |
| 11 | AI content-production services | 60 | 25 | 65 | 90 | 65 | 45 | 75 | 65 | 55 | 80 | 65 | 45 |
| 12 | Research / reporting / information products | 45 | 35 | 50 | 90 | 70 | 30 | 70 | 70 | 60 | 85 | 55 | 30 |
| 13 | Lead-generation services | 55 | 35 | 45 | 85 | 55 | 35 | 60 | 60 | 55 | 75 | 45 | 30 |
| 14 | AI-assisted admin/ops (VA-style) services | 65 | 45 | 60 | 90 | 70 | 55 | 65 | 55 | 60 | 85 | 70 | **60** |
| 15 | Creator-support services (editing, thumbnails, repurposing) | 50 | 30 | 55 | 90 | 65 | 40 | 65 | 55 | 55 | 80 | 45 | 30 |
| 16 | Etsy printable/planner digital products | 45 | 25 | 45 | 95 | 80 | 20 | 55 | 90 | 65 | 90 | 40 | 20 |
| 17 | AI chatbot/agent build services | 55 | 25 | 40 | 85 | 25 | 40 | 65 | 75 | 55 | 70 | 25 | 15 |

¹ Already inverted (higher = better / lower risk-cost-difficulty).

## Reading the table

**Top cluster (rows 1, 2, 14):** all converge on the same buyer — a small
business owner who wants less manual work — reached through a marketplace
where the buyer initiates contact. This is the only cluster where Steven
Fit and P(first $100) are simultaneously high. Row 2 (narrow automation
troubleshooting/implementation, i.e. what Steven is already doing but
scoped smaller and boring) scores highest overall.

**Why ecommerce rows (6–9) score low despite real consumer demand:** the
demand columns are genuinely respectable (45–60), but competition,
acquisition difficulty, and — critically — Steven's fit and 30-day
probability collapse the total. The bottleneck isn't whether people buy
physical products; it's that winning requires either ad spend Steven
doesn't want to risk on unvalidated products, or content/creative
production at a volume and quality his time and skill set don't currently
support. Full reasoning in 03-ECOMMERCE-REALITY-CHECK.md.

**Why digital products (5, 16) score high on economics but low on P(first
$100):** margin and cost are excellent, but acquisition is the unsolved
variable — nothing in the Phase 1 evidence explains how a brand-new
listing gets found. Good secondary-asset play (see 09), bad primary bet.

**Why subcontracting (3) and chatbot builds (17) score low on Steven Fit
despite real demand:** subcontracting requires an existing relationship
Steven doesn't have (cold-start problem, again); chatbot/agent builds
skew toward the deep-API, deep-JS end of the spectrum the Phase 7
understanding test is built to reject.

**AI leverage note (Phase 6 discipline applied):** rows scored above 70 on
AI Leverage are ones where AI plausibly removes hours from an otherwise
fixed task (writing a scenario diagnosis, drafting a proposal, producing
copy) *and* the buyer is paying for the outcome, not the technique — so
the leverage shows up as margin, not as a commodity anyone can replicate
with the same single prompt. Rows where "AI can help" doesn't change the
underlying economics (ecommerce logistics, ad testing) score lower on this
axis even where AI nominally "assists."
