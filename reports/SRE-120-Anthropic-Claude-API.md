# SRE-120 — Anthropic Claude API

| Field | Value |
| --- | --- |
| Subject | Anthropic Claude — AI assistant offered via chat and API (Claude / Claude Instant) |
| T0 (frozen date) | 2023-03-14 |
| Industry domain | AI Computing / Foundation-model API applications |
| T0 sources | (1) Anthropic News — “Introducing Claude”, March 14, 2023 (`anthropic.com/news/introducing-claude`); (2) Anthropic Product page — Claude product / API FAQ (`anthropic.com/product`; Internet Archive capture `20230316145444`, contemporaneous with the March 14 launch) |
| Standards applied | `SRE_PRODUCT_SPEC.md` v1.0, `RESEARCH_REPORT_STANDARD.md` v1.1 (repository; sprint attribution / confidence / traceability rules applied as stated for this run), `VALUE_CAPTURE_METHODOLOGY.md` v1.0, `SRE_GLOSSARY.md` v1.0, `MISSION.md` |

Two-source report. All content derives from the P0 Anthropic materials above — the earliest official Claude API announcement identified for this case, plus the contemporaneous official product/API page — cited as **[Anthropic, Introducing Claude, 2023-03-14]** and **[Anthropic, Product page, 2023-03-14/16]**. Nothing published after T0 is used. Later Claude versions, marketplace listings, funding disclosures, and third-party coverage are excluded.

**Source-retrieval note.** The frozen case date is **2023-03-14** (Introducing Claude). Product-page facts are taken from the Internet Archive capture dated **2023-03-16** of `anthropic.com/product`, which links Product News to “Introducing Claude” dated Mar 14, 2023. Whether any character-level difference exists versus the product page as first served on March 14 is **Unknown**; the retrieved bodies are used as the official T0 texts.

Evidence labels used: Evidence-supported, Reasoned Inference, Hypothesis, Unknown (`SRE_GLOSSARY.md` v1.0). Confidence levels: High, Medium, Low (`VALUE_CAPTURE_METHODOLOGY.md` §6).

---

## 1. Executive Summary

Anthropic announced Claude, an AI assistant previously in closed alpha with Notion, Quora, and DuckDuckGo, and stated it was offering Claude more broadly via a chat interface and API through Anthropic’s developer console, with a request-access path [facts 1–8, 34]. Anthropic describes Claude as trained toward helpful, honest, and harmless (HHH) behavior, including Constitutional AI / constitutional training on the product page, and lists use cases such as summarization, search, writing, Q&A, and coding, plus steerable and less-harmful positioning [facts 4–5, 9–12, 39, 58–59]. Two versions are offered: Claude (high-performance / most powerful) and Claude Instant (lighter, less expensive / faster and cheaper) [facts 13–16, 52–54]. The API is described as a backend that accepts text and returns responses via server-sent events, with Python and TypeScript examples, ~9000-token combined context, no internet access, and no embeddings; model pricing is linked but dollar rates are not stated in the captured text [facts 50–51, 55, 57, 62–63]. Named partners embed Claude in Poe, Notion AI, DuckAssist, tutoring, legal contract review, and transcription products; Poe users are said to compare Claude with other chatbots including ChatGPT [facts 18–33]. *(Evidence-supported)*

**Key conclusion.** Value migrates from closed-alpha, partner-only Claude access toward a broader Anthropic-controlled chat-and-API surface with dual commercial SKUs (Claude / Instant) — if request-access converts to sustained paid usage and partners keep embedding the models. *(Reasoned Inference, Medium)*

**Tier 1 is assigned; magnitude is not established.** Anthropic (Anthropic PBC) owns the Claude models, chat and API surfaces, developer console, access gating, Constitutional AI / HHH framing, and the linked pricing path [facts 6, 13–16, 34–36, 39, 49–55, 58–59, 65]. No dollar list prices, margins, or exclusive partner terms appear in the T0 texts [see the §2 Unknown list]. The position is evidenced; the share retained is **Unknown**. *(Reasoned Inference for the position, Medium; Unknown for the share)*

**Top companies for further research — not recommendations, not ranked by attractiveness.**

- **Anthropic (Anthropic PBC)** — owns Claude chat/API and both SKUs; Tier 1 in §7. Listing status not established by the T0 sources. *(Reasoned Inference, Medium)*
- **Notion; Quora; DuckDuckGo; Juni Learning; Robin AI; AssemblyAI** — named embedding partners; Tier 2 in §7. Listing status not established. *(Evidence-supported, Medium)*

Market blind spot: treating the news as another chatbot launch while underweighting the structural claim — a gated commercial API with two cost/performance SKUs, Constitutional AI / HHH as the trust product, and partner distribution already live in consumer and vertical apps. *(Reasoned Inference, Medium)*

---

## 2. Evidence

Verified facts only. Each is stated in a T0 Anthropic source without interpretation. Future-tense content appears only where Anthropic states it, attributed to Anthropic.

### Source A — Anthropic, “Introducing Claude” (2023-03-14)

1. The post is titled “Introducing Claude,” dated Mar 14, 2023, on Anthropic News. [Anthropic, Introducing Claude, 2023-03-14]
2. Anthropic states Claude has been in a closed alpha with Notion, Quora, and DuckDuckGo. [Anthropic, Introducing Claude, 2023-03-14]
3. Anthropic states it is now offering Claude more broadly. [Anthropic, Introducing Claude, 2023-03-14]
4. Anthropic describes Claude as an AI assistant based on Anthropic’s research into training helpful, honest, and harmless AI systems. [Anthropic, Introducing Claude, 2023-03-14]
5. Anthropic states users can talk with Claude about thoughts, ideas, and tasks, and that Claude can help with writing, answering questions, decision-making, and more. [Anthropic, Introducing Claude, 2023-03-14]
6. Anthropic states users can talk with Claude via a chat interface or API through Anthropic’s developer console. [Anthropic, Introducing Claude, 2023-03-14]
7. Anthropic states Claude can perform a wide variety of conversational and text processing tasks while maintaining a high degree of reliability and predictability. [Anthropic, Introducing Claude, 2023-03-14]
8. Anthropic states Claude’s users have described Claude as a well-informed colleague or a trustable personal assistant. [Anthropic, Introducing Claude, 2023-03-14]
9. Anthropic states Claude can help with use cases including summarization, search, creative and collaborative writing, Q&A, and coding. [Anthropic, Introducing Claude, 2023-03-14]
10. Anthropic states Claude is steerable. [Anthropic, Introducing Claude, 2023-03-14]
11. Anthropic states Claude is less likely to produce harmful outputs. [Anthropic, Introducing Claude, 2023-03-14]
12. Anthropic states that early customers say Claude is much easier to use. [Anthropic, Introducing Claude, 2023-03-14]
13. Anthropic states Claude is available in two versions: Claude and Claude Instant. [Anthropic, Introducing Claude, 2023-03-14]
14. Anthropic states Claude is its high-performance model. [Anthropic, Introducing Claude, 2023-03-14]
15. Anthropic states Claude Instant is a lighter, less expensive, and much faster option. [Anthropic, Introducing Claude, 2023-03-14]
16. Anthropic states Claude Instant can handle casual dialogue, text analysis, summarization, and document comprehension. [Anthropic, Introducing Claude, 2023-03-14]
17. Anthropic attributes to itself: “We’ll have more updates in the coming weeks, as we continue to make Claude even more helpful, honest, and harmless.” [Anthropic, Introducing Claude, 2023-03-14]
18. Anthropic quotes Richard Robinson, CEO of Robin AI, on Claude in product use (user engagement, feedback, and deals). [Anthropic, Introducing Claude, 2023-03-14]
19. Anthropic quotes Steve Fischer, Chief Business Officer of DuckDuckGo, on partnership for DuckAssist quality and privacy requirements. [Anthropic, Introducing Claude, 2023-03-14]
20. Anthropic quotes Autumn Besselman, Head of People and Comms at Quora, on user descriptions of Claude’s answers and conversation. [Anthropic, Introducing Claude, 2023-03-14]
21. Anthropic states Quora uses Claude for its Poe app. [Anthropic, Introducing Claude, 2023-03-14]
22. Anthropic states Quora’s Poe users have compared Claude’s responses with those of other AI chatbots, including ChatGPT. [Anthropic, Introducing Claude, 2023-03-14]
23. Anthropic states Quora’s users ranked Claude’s responses as higher quality. [Anthropic, Introducing Claude, 2023-03-14]
24. Anthropic states Juni Learning uses Claude as a computer science tutor for students. [Anthropic, Introducing Claude, 2023-03-14]
25. Anthropic states Claude outperformed Juni Learning’s previous AI tutor, and that Claude’s steerability makes Claude safer for children. [Anthropic, Introducing Claude, 2023-03-14]
26. Anthropic states Notion uses Claude to power many of Notion AI’s features. [Anthropic, Introducing Claude, 2023-03-14]
27. Anthropic states Notion AI helps users write and think faster, and that Claude’s writing quality and speed help Notion’s users get more done. [Anthropic, Introducing Claude, 2023-03-14]
28. Anthropic states DuckDuckGo uses Claude to summarize instant answers in DuckAssist. [Anthropic, Introducing Claude, 2023-03-14]
29. Anthropic states Claude’s summarization capability and DuckDuckGo’s privacy standards made Claude a natural choice for DuckDuckGo. [Anthropic, Introducing Claude, 2023-03-14]
30. Anthropic states Robin AI uses Claude to power its legal contract review platform. [Anthropic, Introducing Claude, 2023-03-14]
31. Anthropic states Claude’s reliability, writing quality, and safety features help Robin AI’s customers more quickly and safely finalize contracts. [Anthropic, Introducing Claude, 2023-03-14]
32. Anthropic states AssemblyAI uses Claude to add generative AI features to its transcription and understanding platform. [Anthropic, Introducing Claude, 2023-03-14]
33. Anthropic states Claude’s advanced generative AI capabilities help AssemblyAI’s customers get more out of their audio and video data. [Anthropic, Introducing Claude, 2023-03-14]
34. Anthropic invites readers to request access to Claude. [Anthropic, Introducing Claude, 2023-03-14]
35. The page footer identifies © 2023 Anthropic PBC. [Anthropic, Introducing Claude, 2023-03-14]

### Source B — Anthropic Product page (Wayback capture 2023-03-16 of anthropic.com/product)

36. The product page presents Claude as a next-generation AI assistant for tasks “no matter the scale,” with a Request Access call to action. [Anthropic, Product page, 2023-03-14/16]
37. Anthropic states Claude can be a company representative, research assistant, creative partner, task automator, and more, and that personality, tone, and behavior can be customized. [Anthropic, Product page, 2023-03-14/16]
38. Anthropic states Claude can be incorporated into products or toolchains with minimal effort via standard APIs. [Anthropic, Product page, 2023-03-14/16]
39. Anthropic states that thanks to Constitutional AI and harmlessness training, customers can trust Claude to represent their company, including handling unpleasant or malicious conversational partners. [Anthropic, Product page, 2023-03-14/16]
40. Anthropic states Claude is available 24/7, with servers designed to scale and meet demanding workloads. [Anthropic, Product page, 2023-03-14/16]
41. Anthropic lists example work domains including Customer Service, Legal, Coaching, Search, Back-office, and Sales. [Anthropic, Product page, 2023-03-14/16]
42. Anthropic states Claude can ensure speedy and friendly resolution of customer service requests, saving costs and increasing customer satisfaction, and can be taught when to hand off to a human CSR. [Anthropic, Product page, 2023-03-14/16]
43. Anthropic states Claude can parse legal documents and answer questions about them so lawyers can reduce costs and focus on higher-level work. [Anthropic, Product page, 2023-03-14/16]
44. Anthropic states Claude can integrate into web search and private search over knowledge bases, synthesizing results into natural language answers. [Anthropic, Product page, 2023-03-14/16]
45. Anthropic states Claude can handle rote office work including extracting information from emails and documents, categorizing and summarizing survey responses, and wrangling text. [Anthropic, Product page, 2023-03-14/16]
46. Anthropic states Claude can act as a virtual sales representative and can be customized with brand personality and tone. [Anthropic, Product page, 2023-03-14/16]
47. Anthropic states Claude can process large volumes of text: edit, rewrite, summarize, classify, extract structured data, and do Q&A based on content. [Anthropic, Product page, 2023-03-14/16]
48. Anthropic states Claude can take on roles in dialogue when given role details and an FAQ; has extensive general knowledge from its training corpus; can speak a variety of common languages as well as programming languages; and can handle basic instructions and logical scenarios including formatting outputs and if-then evaluations. [Anthropic, Product page, 2023-03-14/16]
49. Anthropic states Claude uses industry-standard best practices for data handling and retention, and that all commercial deployments are covered by Anthropic’s Data Protection Addendum, available upon request. [Anthropic, Product page, 2023-03-14/16]
50. Anthropic states the API is designed as a backend that incorporates Claude into applications: the application sends text to the API and receives a response via server-sent events, a streaming protocol for the web. [Anthropic, Product page, 2023-03-14/16]
51. Anthropic states it provides API documentation with drop-in example code in Python and Typescript. [Anthropic, Product page, 2023-03-14/16]
52. Anthropic states it currently offers two versions of Claude. [Anthropic, Product page, 2023-03-14/16]
53. Anthropic states Claude is its most powerful model, excelling at sophisticated dialogue, creative content generation, and detailed instruction following. [Anthropic, Product page, 2023-03-14/16]
54. Anthropic states Claude Instant is a faster and cheaper yet still capable model for casual dialogue, text analysis, summarization, and document question-answering. [Anthropic, Product page, 2023-03-14/16]
55. Anthropic states model pricing is available via a linked pricing page (specific dollar rates are not stated in the captured product-page text). [Anthropic, Product page, 2023-03-14/16]
56. Anthropic states Claude has the most training in English, performs well in a range of other common languages, and has some ability in less common languages, plus extensive knowledge of common programming languages. [Anthropic, Product page, 2023-03-14/16]
57. Anthropic states Claude cannot access the internet; it is designed to be self-contained, though users can provide text from the internet for Claude to use. [Anthropic, Product page, 2023-03-14/16]
58. Anthropic states constitutional training trains a model to adhere to a “constitution” of desired behavior, and that the core Anthropic model has been finetuned with constitutional training toward being helpful, honest, and harmless. [Anthropic, Product page, 2023-03-14/16]
59. Anthropic defines HHH as Helpful, Honest, and Harmless alignment goals for systems like Claude, and states that while no existing model is close to perfection on HHH, Anthropic is pushing the research frontier and expects to continue to improve. [Anthropic, Product page, 2023-03-14/16]
60. Anthropic states Claude’s behavior can be extensively modified using prompting. [Anthropic, Product page, 2023-03-14/16]
61. Anthropic states that in the vast majority of cases well-crafted prompts suffice without fine-tuning, but some large enterprise users may benefit from fine-tuned models and should contact Anthropic. [Anthropic, Product page, 2023-03-14/16]
62. Anthropic states the combined context window for input and output is about 9000 tokens (roughly 5000 words, or 15 pages, depending on content type). [Anthropic, Product page, 2023-03-14/16]
63. Anthropic states Claude models cannot do embeddings at that time, and that Anthropic finds open source SBERT embeddings good enough for most purposes. [Anthropic, Product page, 2023-03-14/16]
64. The product page links Product News to “Introducing Claude” dated Mar 14, 2023. [Anthropic, Product page, 2023-03-14/16]
65. The product page footer identifies © 2023 Anthropic PBC. [Anthropic, Product page, 2023-03-14/16]

**Not stated in the T0 sources, and therefore Unknown:** dollar list prices or unit economics for Claude / Claude Instant; conversion from request access to paid usage; public-listing or ticker status for Anthropic PBC or any named partner; commercial contract terms between Anthropic and Notion, Quora, DuckDuckGo, Juni Learning, Robin AI, or AssemblyAI; compute-provider identity; and whether ChatGPT’s vendor retains or loses share versus Claude. *(Unknown)*

---

## 3. Customer Problem

**What end-user or builder problem changed.** Builders and teams need steerable, integrable conversational and text-processing assistance — summarization, search synthesis, writing, Q&A, coding, document work — that can be embedded in products via API or used in chat, with explicit performance versus cost/latency options and enterprise data-handling expectations [facts 5–6, 9–16, 36–38, 41–51, 49]. *(Evidence-supported as Anthropic’s claim)*

Distinguishable components:

- **Product integration of assistant capabilities.** Chat or API via developer console; standard APIs; SSE streaming; Python/TypeScript examples [facts 6, 38, 50–51]. *(Evidence-supported)*
- **Text-heavy workflow load.** Summarization, search, writing, Q&A, coding, classification, extraction, legal and back-office tasks [facts 9, 16, 41–47]. *(Evidence-supported)*
- **Trust / harmlessness / steerability constraints.** HHH, Constitutional AI, less harmful outputs, child-safe tutoring claim, DPA for commercial deployments [facts 4, 10–12, 25, 39, 49, 58–59]. *(Evidence-supported as Anthropic’s / partners’ claims)*
- **Cost and latency tradeoffs across workloads.** Dual SKUs: high-performance Claude vs Instant as less expensive / faster / cheaper [facts 13–16, 52–54]. *(Evidence-supported)*

**Who is worse off without it:** product builders who need an embeddable assistant API; end users of partner products (Poe, Notion AI, DuckAssist, Juni, Robin AI, AssemblyAI) [facts 21–33]. How large the unmet demand is, and what buyers currently pay alternatives, is **Unknown**.

---

## 4. Industry Change

**The concrete change.** Anthropic moves Claude from closed alpha with Notion, Quora, and DuckDuckGo to a broader offer of chat plus API access (request access), with two commercial model versions and a documented API integration path [facts 2–3, 6, 13–16, 34, 36, 50–54]. *(Evidence-supported)*

**Which system requirement shifts.**

1. **From closed-alpha partner access toward broader chat + API availability.** Facts 2–3, 6, 34, 36. *(Evidence-supported)*
2. **From a single unnamed access mode toward dual SKUs (Claude vs Instant) with performance vs cost/speed positioning.** Facts 13–16, 52–54. *(Evidence-supported)*
3. **From opaque integration toward a documented backend API (text in / SSE out) with example code.** Facts 50–51. *(Evidence-supported)*
4. **From generic assistant claims toward productized Constitutional AI / HHH trust framing for commercial representation.** Facts 4, 39, 58–59. *(Evidence-supported as Anthropic’s claim)*

**Why the prior solution becomes insufficient.** Anthropic frames expansion after alpha and partner demand for quality, privacy, steerability, and writing/summarization performance [facts 2–3, 18–33]. Competitive necessity versus ChatGPT or other chatbots is evidenced only as Poe user comparison, not as industry-wide displacement [facts 22–23]. *(Reasoned Inference)*

**Structural or cyclical.** Structural if proprietary foundation-model APIs with dual SKUs and Constitutional AI-style trust become a required way builders ship assistant features [facts 6, 13–16, 38–39, 50]. At T0 access is still request-gated and dollar prices are undisclosed in-source [facts 34, 55]. *(Reasoned Inference)*

---

## 5. Value Chain Analysis

**Purpose.** Map how value flows after §4. No winner is identified here.

| Layer | Role | Scarcity | Bottleneck | Expected Value Change | Evidence Label |
| --- | --- | --- | --- | --- | --- |
| Model research & HHH / Constitutional AI training | Produce steerable, less-harmful Claude models [facts 4, 39, 58–59] | Unknown | Yes | ↑ | Reasoned Inference |
| Model SKUs (Claude; Claude Instant) | Deliver high-performance vs cheaper/faster inference options [facts 13–16, 52–54] | Unknown | Yes | ↑ | Reasoned Inference |
| Claude API & developer console | Backend text/SSE integration; docs; examples [facts 6, 50–51] | Unknown | Yes | ↑ | Reasoned Inference |
| Claude chat interface | End-user conversational access [fact 6] | Unknown | No | ↑ | Reasoned Inference |
| Access control & commercial terms | Request access; linked pricing; DPA on request [facts 34, 36, 49, 55] | Unknown | Yes | ↑ | Reasoned Inference |
| Optional enterprise fine-tuning | Contact path for large users [fact 61] | Unknown | No | → | Unknown |
| Partner application embedding | Poe, Notion AI, DuckAssist, tutoring, legal, transcription [facts 21–33] | Unknown | No | ↑ | Evidence-supported |
| Compared alternative chatbots (incl. ChatGPT as named) | Poe users compare Claude responses [facts 22–23] | Unknown | Unknown | ↓ | Hypothesis |
| End users of partner / Claude products | Consume assistant features [facts 5, 8, 21–33] | No | No | ↑ | Hypothesis |
| Compute / hosting substrate (unnamed) | Servers said to scale [fact 40] | Unknown | Unknown | Unknown | Unknown |

**Layers with no participant named.** No compute cloud, chip vendor, or reseller marketplace is named. Per `RESEARCH_REPORT_STANDARD.md` §5, none is inferred. ChatGPT is named only as a comparison product in partner-user feedback [facts 22–23], not as a mapped supply-chain owner.

**Reading notes.**

- Three layers carry `Bottleneck: Yes` as `Reasoned Inference`: model training, model SKUs, and API/console access — required to deliver the announced Claude API offer [facts 6, 13–16, 50–54]. Scarcity versus rivals is **Unknown**.
- Partner embedding is `↑` on named deployments [facts 21–33].
- ChatGPT / other chatbots are `↓` only as `Hypothesis` from Poe comparisons [facts 22–23].

No winner is identified in this section.

---

## 6. Value Migration

**Where value moves — origin and destination both named.**

| From (origin layer) | To (destination layer) | Basis |
| --- | --- | --- |
| Closed-alpha, partner-limited Claude access | Broader Anthropic chat + API surface (request access) | Facts 2–3, 6, 34, 36 |
| Undifferentiated single-model access (as contrasted by dual offer) | Dual SKUs: Claude vs Claude Instant | Facts 13–16, 52–54 |
| Builder DIY / non-API assistant integration (as contrasted by documented API) | Documented Claude API backend (text / SSE) | Facts 38, 50–51 |
| Partner product feature gaps (prior tutors, summarization, writing) | Partner apps embedding Claude | Facts 21–33 |

**Why the migration follows.**

1. Anthropic ends closed-alpha exclusivity and offers Claude via chat and API with request access [facts 2–3, 6, 34]. *(Evidence-supported)*
2. It packages two SKUs with explicit performance vs cost/speed positioning and links pricing [facts 13–16, 52–55]. *(Evidence-supported)*
3. It documents API integration (SSE, examples) and Constitutional AI / HHH trust claims for commercial use [facts 39, 50–51, 58–59]. *(Evidence-supported)*
4. Named partners already route product features through Claude [facts 21–33]. *(Evidence-supported)*
5. Therefore value migrates toward Anthropic-controlled Claude API/chat distribution and partner-embedded surfaces — if access converts commercially. *(Reasoned Inference)*

**Links not established.** Magnitude of profit migration is **Unknown**. Dollar prices are **Unknown** [fact 55]. Whether ChatGPT or other chatbots lose share is **Unknown** [facts 22–23]. *(Unknown)*

**Confidence on the migration as a whole: Medium.** *(Reasoned Inference)* Direction matches Anthropic’s alpha→broader API structure and dual-SKU packaging. Against that: request gating, undisclosed rates, and competition named only anecdotally. Under `VALUE_CAPTURE_METHODOLOGY.md` §6, those gaps cap confidence below High.

**Statement of standing.** Potential value reallocation. Requires later market verification.

---

## 7. Value Capture

Per `VALUE_CAPTURE_METHODOLOGY.md`: value creation is not value capture. Offering helpful assistants is a *creation* claim [facts 4–5, 9]; the question is who retains surplus. Every conclusion below carries exactly one evidence label and one confidence level.

**Step 1 — Industry bottleneck.** Supplying steerable, commercially integrable foundation-model chat/API capacity with dual performance/cost SKUs and stated harmlessness controls [facts 6, 10–16, 39, 50–54]. *(Reasoned Inference, Medium)*

**Step 2 — Scarce capability.** Anthropic’s Claude / Claude Instant models, Constitutional AI / HHH training stack, and developer-console API [facts 4, 6, 13–16, 39, 50–51, 58–59]. Whether rivals can match that bundle is **Unknown** (ChatGPT named only in user comparisons) [facts 22–23]. *(Reasoned Inference, Medium)*

**Step 3 — Value migration.** As in §6: toward Anthropic Claude API/chat and partner embeddings; away from closed-alpha-only access.

**Step 4 — Economic profit capture.** Pricing page linked but dollar rates not stated; request access; no margins [facts 34, 55]. Magnitude of capture is **Unknown**. *(Unknown, Low)*

**Step 5 — Ranking.**

### Tier 1 — Direct Value Capturer

**Anthropic (Anthropic PBC)** *(Reasoned Inference, Medium)*

Retention mechanism, in three parts:

1. **Owns the proprietary Claude model SKUs.** Claude and Claude Instant are Anthropic’s high-performance and cheaper/faster offerings [facts 13–16, 52–54, 35, 65]. *(Reasoned Inference, Medium)*
2. **Owns the API and chat distribution.** Developer console, text/SSE API, docs/examples, request-access gate [facts 6, 34, 36, 50–51]. *(Reasoned Inference, Medium)*
3. **Owns the trust/product framing used to differentiate commercial deployments.** Constitutional AI / HHH, DPA path, optional enterprise fine-tuning contact [facts 39, 49, 58–59, 61]. Commercial take rates Unknown. *(Reasoned Inference, Low)*

**Counter-evidence recorded.** Access still request-gated [facts 34, 36]; list prices not in-source [fact 55]; Poe users compare Claude with ChatGPT and other chatbots [facts 22–23]; technical limits (no web access, ~9k context, no embeddings) [facts 57, 62–63]. These keep confidence at Medium and magnitude at Unknown. *(Reasoned Inference, Medium)*

**Magnitude of capture: Unknown.** *(Unknown, Low)*

### Tier 2 — Direct Beneficiary

**Notion; Quora; DuckDuckGo; Juni Learning; Robin AI; AssemblyAI** *(Evidence-supported, Medium)*

Retention mechanism: first-order product features powered by Claude (Notion AI, Poe, DuckAssist, tutoring, legal contract review, transcription generative features) [facts 21–33]. They do not own the Claude API bottleneck; economics improve as partners/customers of Anthropic. Contract terms **Unknown**.

### Tier 3 — Indirect Beneficiary

**None assigned as capturers.** ChatGPT is named only as a comparison product in Poe user feedback [facts 22–23]; no capture path to ChatGPT’s vendor is established. *(Unknown, Low)*

### Tier 4 — Potential Beneficiary

- **End users of Claude chat and partner apps** *(Hypothesis, Low)* May gain surplus via better or cheaper assistance [facts 5, 8, 42–43] if Instant pricing and quality deliver; magnitude Unknown.
- **Builders evaluating Claude versus other assistants including ChatGPT** *(Hypothesis, Low)* Competitive evaluation is evidenced at quote level only [facts 22–23].

**Alternative explanations.** That request access never becomes generally available paid API usage — possible [facts 34, 55] *(Hypothesis, Low)*. That surplus accrues entirely to partner applications or end users rather than Anthropic — possible; take rates Unknown *(Unknown, Low)*. That ChatGPT or unnamed rivals absorb demand such that Anthropic does not retain Tier 1 surplus — possible; share Unknown *(Unknown, Low)*.

---

## 8. Listed Companies

Publicly listed participants named in the T0 sources. **Not ranked; not a recommendation; no valuation.**

**Inclusion rule.** Enter only if the T0 source names the entity and establishes it as the publicly listed company.

| Company | Role | Why | Evidence | Confidence |
| --- | --- | --- | --- | --- |

**Why this table has zero rows.** The sources name Anthropic PBC; Claude / Claude Instant; Notion / Notion AI; Quora / Poe; DuckDuckGo / DuckAssist; Juni Learning; Robin AI; AssemblyAI; and ChatGPT as a compared product [facts 1–35, 21–33, 22, 65]. None of the text states that any named entity is publicly listed or supplies a ticker/exchange designation. Inferring listing would violate the inclusion rule used in prior compliant reports.

**Named in the sources but excluded from this table.**

- **Anthropic PBC** [facts 35, 65] — Tier 1 operator in §7; listing not established.
- **Notion; Quora; DuckDuckGo; Juni Learning; Robin AI; AssemblyAI** [facts 18–33] — Tier 2 partners in §7; listing not established.
- **ChatGPT** [fact 22] — product name in a comparison quote; not a listed issuer in these sources.

**Displaced participants.** Compared alternative chatbots including ChatGPT are marked `↓` only as `Hypothesis` in §5. No incumbent API vendor is named as losing share. *(Unknown)*

---

## 9. Risks

### Assumptions that could fail

1. **Request access converts into sustained commercial Claude API usage** — supports §§4–7 [facts 3, 34, 55]. *(Hypothesis)*
2. **Dual SKUs (Claude vs Instant) map to real workload economics at disclosed prices** — supports Tier 1 mechanism 1 [facts 13–16, 52–55]. *(Unknown)*
3. **Constitutional AI / HHH / steerability remain material adoption drivers** — supports Tier 1 mechanism 3 [facts 10–12, 39, 58–59]. *(Hypothesis)*
4. **Partner embedding generalizes beyond the named design partners** — supports Tier 2 and §6 partner hop [facts 21–33]. *(Hypothesis)*
5. **Stated technical limits (no internet; ~9k context; no embeddings) do not block primary marketed tasks** — supports §3–§5 [facts 9, 57, 62–63]. *(Unknown)*
6. **No unnamed rival API empties Anthropic’s Tier 1** — supports Tier 1 assignment [facts 22–23]. *(Unknown)*

### What would weaken the thesis

- Access remaining tightly gated with weak paid conversion.
- Instant “cheaper/faster” positioning failing without clear published rates.
- Safety or reliability incidents undercutting HHH claims.
- Partner wins staying concentrated in the alpha-era set.
- Context, browsing, or embedding limits blocking core use cases.

### What would invalidate the thesis

- **Anthropic abandoning the Claude API commercial offer**, so the migration destination does not exist.
- **Economic profit from Claude API usage accruing primarily to partners or buyers** such that Anthropic does not retain Tier 1 surplus.
- **Builders standardizing on non-Claude assistants at scale**, reversing the migration in §6.
- **Trust/safety outcomes forcing withdrawal of commercial API access**, removing retention mechanisms.

Weakening and invalidating conditions are kept separate deliberately: the first set reduces the size of the conclusion; the last set replaces it.

---

## 10. Monitoring Signals

Each signal names the P0 source class where it would become visible, a horizon measured from T0, and what its absence by that point would imply.

| # | Signal | Source class | Horizon | Absence implies |
| ---: | --- | --- | --- | --- |
| 1 | Generally available Claude API signup and published dollar list prices for Claude / Instant | Anthropic official pricing / docs | 0–2 quarters | Assumption 1–2 / magnitude stay Unknown |
| 2 | Expansion of named API/chat customers beyond the T0 partner set | Anthropic official customer/case announcements | 1–6 quarters | Assumption 4 unresolved |
| 3 | Documented changes to context window, internet/tool use, or embeddings support | Anthropic official product/API docs | 1–6 quarters | Assumption 5 untested |
| 4 | Enterprise fine-tuning moving from “contact us” to a standard SKU | Anthropic official product announcement | 2–8 quarters | Fine-tune lock-in path untested |
| 5 | Official comparative evaluations vs other assistants (beyond Poe anecdotes) | Anthropic official research/product posts | 2–8 quarters | Assumption 6 / competitive pressure untested |
| 6 | Disclosure of Claude API revenue, usage volume, or unit economics | Anthropic official announcements or (if later public) filings | 4–20 quarters | Magnitude of capture stays Unknown |
| 7 | Any listing / IPO disclosure establishing Anthropic as public | Official offering documents / exchange notices | Any time | §8 remains empty on listing grounds |
| 8 | Partner disclosures of Claude-powered feature outcomes (retention, quality, cost) | Partner official blogs/product posts | 1–8 quarters | Tier 2 durability untested |
| 9 | Changes to request-access gating or DPA/commercial terms | Anthropic official terms/product pages | 0–4 quarters | Commercial packaging path unresolved |
| 10 | Safety incidents or policy changes affecting HHH / Constitutional AI claims | Anthropic official safety/policy posts | Any time | Assumption 3 untested |
| 11 | Listing disclosures for named partners (if any become relevant to §8) | Exchange / offering documents | Any time | Partner §8 inclusion stays closed |
| 12 | Evidence of switching costs, accounts, or paid retention features on Claude API | Anthropic official terms and product docs | 2–8 quarters | Retention durability beyond model ownership untested |

### Closure paths for every open item

Per `RESEARCH_REPORT_STANDARD.md` §10 and `VALUE_CAPTURE_METHODOLOGY.md` §7, every `Hypothesis` and `Unknown` recorded in §§5–8 has a closure path above.

| Open item | Recorded in | Closes via |
| --- | --- | --- |
| Model / API / access scarcity (**Unknown**) | §5 | Signals 1, 5, 12 |
| ChatGPT / rival direction (**Hypothesis**) | §5 | Signals 5, 8 |
| End-user surplus (**Hypothesis**) | §5, §7 Tier 4 | Signals 1, 8 |
| Compute substrate direction (**Unknown**) | §5 | No named provider expected unless Anthropic discloses |
| Magnitude of capture (**Unknown**) | §1, §7 Step 4 | Signals 1, 6 |
| Request-access conversion (**Hypothesis**) | §9 assumption 1 | Signals 1, 9 |
| Dual-SKU pricing fit (**Unknown**) | §9 assumption 2 | Signal 1 |
| HHH adoption driver (**Hypothesis**) | §9 assumption 3 | Signals 8, 10 |
| Partner generalization (**Hypothesis**) | §9 assumption 4 | Signals 2, 8 |
| Technical-limit adequacy (**Unknown**) | §9 assumption 5 | Signal 3 |
| Rival contest (**Unknown**) | §9 assumption 6 | Signal 5 |
| Listing status for §8 (**Unknown**) | §8 | Signals 7, 11 |
| Customer-problem magnitude (**Unknown**) | §3 | Signals 1, 6, 8 |
| Partner contract terms (**Unknown**) | §7 Tier 2 | Signals 8, 9 |
| ChatGPT vendor capture (**Unknown**) | §7 Tier 3 | Signal 5 |
| Builder competitive evaluation (**Hypothesis**) | §7 Tier 4 | Signal 5 |
| Fine-tune path (**Unknown**) | §5 | Signal 4 |

No open item lacks a closure path. No signal requires non-public information. No signal is expressed as a trading trigger, entry condition, or action.

---

*Report produced under `RESEARCH_REPORT_STANDARD.md` v1.1 (repository version; sprint attribution and confidence rules applied) and `MISSION.md`. P0 Anthropic Introducing Claude (2023-03-14) plus contemporaneous product/API page only. Contains no investment recommendation, no valuation or securities-price information, and no timing signal beyond dates Anthropic itself states. All Unknown items remain Unknown.*
