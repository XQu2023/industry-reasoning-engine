# SRE-115 — ChatGPT

| Field | Value |
| --- | --- |
| Subject | ChatGPT — conversational language-model research preview |
| T0 (frozen date) | 2022-11-30 |
| Industry domain | AI Computing / Conversational AI applications |
| T0 source | OpenAI Blog — “ChatGPT: Optimizing Language Models for Dialogue”, November 30, 2022 (`openai.com/blog/chatgpt/`; Internet Archive capture `20221130180912`) |
| Standards applied | `SRE_PRODUCT_SPEC.md` v1.0, `RESEARCH_REPORT_STANDARD.md` v1.1 (repository; sprint attribution / confidence / traceability rules applied as stated for this run), `VALUE_CAPTURE_METHODOLOGY.md` v1.0, `SRE_GLOSSARY.md` v1.0, `MISSION.md` |

Single-source report. All content derives from the one P0 OpenAI announcement above, cited throughout as **[OpenAI, ChatGPT announcement, 2022-11-30]**. Nothing published after T0 is used. Later product tiers, pricing pages, and third-party coverage are excluded. Linked Official Rules for the Feedback Contest are referenced only to the extent the announcement itself states contest terms; a separate Official Rules body is not independently retrieved as a T0 fact source beyond what the announcement discloses.

**Source-retrieval note.** The frozen case date is **2022-11-30**. Facts below are taken from the Internet Archive capture of the official OpenAI Blog post dated that day (title on the captured page: “ChatGPT: Optimizing Language Models for Dialogue”). Whether any character-level difference exists versus the page as first served is **Unknown**; the retrieved body is used as the official T0 text. Post-T0 live-page chrome (for example later “ChatGPT Plus” links) is not used.

Evidence labels used: Evidence-supported, Reasoned Inference, Hypothesis, Unknown (`SRE_GLOSSARY.md` v1.0). Confidence levels: High, Medium, Low (`VALUE_CAPTURE_METHODOLOGY.md` §6).

---

## 1. Executive Summary

OpenAI announced ChatGPT, a model that “interacts in a conversational way,” enabling follow-up questions, admitting mistakes, challenging incorrect premises, and rejecting inappropriate requests [facts 1–3]. OpenAI states ChatGPT is a sibling model to InstructGPT, was trained with Reinforcement Learning from Human Feedback (RLHF) using methods similar to InstructGPT, and is fine-tuned from a model in the GPT-3.5 series trained on Azure AI supercomputing infrastructure [facts 4, 10–15]. During the research preview, usage is free at chat.openai.com; OpenAI seeks user feedback and offers a ChatGPT Feedback Contest with up to $500 in API credits [facts 5–7, 26–28]. OpenAI places the release in its iterative deployment of safer, more useful AI systems, informed by GPT-3 and Codex, with Moderation API filtering and stated plans for regular model updates and lessons for more capable systems [facts 16–25, 29–31]. *(Evidence-supported)*

**Key conclusion.** Value migrates from single-turn instruction-following and non-dialogue search/assistance toward a free, accessible conversational interface over an RLHF-tuned GPT-3.5-series model — if users adopt the preview and OpenAI converts feedback and iterative deployment into a durable product surface. *(Reasoned Inference, Medium)*

**Tier 1 is vacant; magnitude is not established.** OpenAI operates ChatGPT, the training stack, the interface, and the Moderation API, and already references API credits as contest prizes [facts 5–7, 15, 22, 27]. No ChatGPT price, exclusive retention term, or disclosed profit share appears at T0 [see the §2 Unknown list]. Under `VALUE_CAPTURE_METHODOLOGY.md`, vacant Tier 1 is a valid finding. Share of economic profit retained by any party is **Unknown**. *(Reasoned Inference for vacancy, Medium; Unknown for the share)*

**Top companies for further research — not recommendations, not ranked by attractiveness.**

- **OpenAI** — trains and releases ChatGPT; operates chat.openai.com; Tier 2 candidate in §7. Listing status not established by the T0 source. *(Reasoned Inference, Medium)*

Market blind spot: treating the news as a free chatbot demo while underweighting the structural claim — dialogue-format RLHF alignment, an accessible consumer interface, and iterative deployment over GPT-3.5 / Azure AI infrastructure with feedback as the stated learning loop. *(Reasoned Inference, Medium)*

---

## 2. Evidence

Verified facts only. Each is stated in the T0 OpenAI source without interpretation. Future-tense content appears only where OpenAI states it, attributed to OpenAI.

1. The post is titled “ChatGPT: Optimizing Language Models for Dialogue,” dated November 30, 2022, on the OpenAI Blog. [OpenAI, ChatGPT announcement, 2022-11-30]
2. OpenAI states: “We’ve trained a model called ChatGPT which interacts in a conversational way.” [OpenAI, ChatGPT announcement, 2022-11-30]
3. OpenAI states: “The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.” [OpenAI, ChatGPT announcement, 2022-11-30]
4. OpenAI states ChatGPT “is a sibling model to InstructGPT, which is trained to follow an instruction in a prompt and provide a detailed response.” [OpenAI, ChatGPT announcement, 2022-11-30]
5. OpenAI states it is introducing ChatGPT “to get users’ feedback and learn about its strengths and weaknesses.” [OpenAI, ChatGPT announcement, 2022-11-30]
6. OpenAI states: “During the research preview, usage of ChatGPT is free.” [OpenAI, ChatGPT announcement, 2022-11-30]
7. OpenAI directs readers to try ChatGPT at chat.openai.com. [OpenAI, ChatGPT announcement, 2022-11-30]
8. OpenAI presents samples in which ChatGPT asks clarifying questions to debug code; initially refuses a question that could be about illegal activities then responds after the user clarifies intent; tracks conversational reference (“it”); and follows multi-turn instructions (including rewriting tone and refusing to send a physical letter). [OpenAI, ChatGPT announcement, 2022-11-30]
9. OpenAI presents comparative samples of ChatGPT versus “InstructGPT: Text-davinci-002” on prompts involving false premises and unsafe requests. [OpenAI, ChatGPT announcement, 2022-11-30]
10. OpenAI states it trained ChatGPT “using Reinforcement Learning from Human Feedback (RLHF), using the same methods as InstructGPT, but with slight differences in the data collection setup.” [OpenAI, ChatGPT announcement, 2022-11-30]
11. OpenAI states it trained an initial model using supervised fine-tuning in which “human AI trainers provided conversations in which they played both sides—the user and an AI assistant,” and that trainers had “access to model-written suggestions to help them compose their responses.” [OpenAI, ChatGPT announcement, 2022-11-30]
12. OpenAI states that to create a reward model it collected comparison data of two or more model responses ranked by quality: trainers conversed with the chatbot; a model-written message was randomly selected; several alternative completions were sampled; and AI trainers ranked them. [OpenAI, ChatGPT announcement, 2022-11-30]
13. OpenAI states that using these reward models “we can fine-tune the model using Proximal Policy Optimization” and that “We performed several iterations of this process.” [OpenAI, ChatGPT announcement, 2022-11-30]
14. OpenAI states: “ChatGPT is fine-tuned from a model in the GPT-3.5 series, which finished training in early 2022.” [OpenAI, ChatGPT announcement, 2022-11-30]
15. OpenAI states: “ChatGPT and GPT 3.5 were trained on an Azure AI supercomputing infrastructure.” [OpenAI, ChatGPT announcement, 2022-11-30]
16. OpenAI states ChatGPT “sometimes writes plausible-sounding but incorrect or nonsensical answers,” and lists three reasons fixing this is challenging: no source of truth during RL training; making the model more cautious causes it to decline questions it can answer correctly; and supervised training misleads because the ideal answer depends on what the model knows rather than what the human demonstrator knows. [OpenAI, ChatGPT announcement, 2022-11-30]
17. OpenAI states ChatGPT “is sensitive to tweaks to the input phrasing or attempting the same prompt multiple times,” including claiming not to know an answer under one phrasing and answering correctly under a slight rephrase. [OpenAI, ChatGPT announcement, 2022-11-30]
18. OpenAI states the model “is often excessively verbose and overuses certain phrases, such as restating that it’s a language model trained by OpenAI,” arising from training-data biases and over-optimization issues. [OpenAI, ChatGPT announcement, 2022-11-30]
19. OpenAI states that ideally the model would ask clarifying questions on ambiguous queries, but “our current models usually guess what the user intended.” [OpenAI, ChatGPT announcement, 2022-11-30]
20. OpenAI states that despite efforts to refuse inappropriate requests, the model “will sometimes respond to harmful instructions or exhibit biased behavior.” [OpenAI, ChatGPT announcement, 2022-11-30]
21. OpenAI states it is “using the Moderation API to warn or block certain types of unsafe content,” and that it expects “some false negatives and positives for now.” [OpenAI, ChatGPT announcement, 2022-11-30]
22. OpenAI states it is “eager to collect user feedback to aid our ongoing work to improve this system.” [OpenAI, ChatGPT announcement, 2022-11-30]
23. OpenAI states today’s research release “is the latest step in OpenAI’s iterative deployment of increasingly safe and useful AI systems.” [OpenAI, ChatGPT announcement, 2022-11-30]
24. OpenAI states lessons from deployment of earlier models “like GPT-3 and Codex have informed the safety mitigations in place for this release, including substantial reductions in harmful and untruthful outputs achieved by the use of reinforcement learning from human feedback (RLHF).” [OpenAI, ChatGPT announcement, 2022-11-30]
25. OpenAI attributes to itself the statement: “We know that many limitations remain as discussed above and we plan to make regular model updates to improve in such areas.” [OpenAI, ChatGPT announcement, 2022-11-30]
26. OpenAI attributes to itself the statement that by providing “an accessible interface to ChatGPT, we will get valuable user feedback on issues that we are not already aware of.” [OpenAI, ChatGPT announcement, 2022-11-30]
27. OpenAI states users are encouraged to provide feedback on problematic model outputs through the UI and on false positives/negatives from “the external content filter which is also part of the interface,” with particular interest in harmful outputs in real-world, non-adversarial conditions and novel risks and mitigations. [OpenAI, ChatGPT announcement, 2022-11-30]
28. OpenAI states users “can choose to enter the ChatGPT Feedback Contest for a chance to win up to $500 in API credits,” with entries via the feedback form linked in the ChatGPT interface, and footnotes that no purchase is necessary, void where prohibited, must be at least 18 to enter, with contest details in the Official Rules. [OpenAI, ChatGPT announcement, 2022-11-30]
29. OpenAI attributes to itself the statement: “We are excited to carry the lessons from this release into the deployment of more capable systems, just as earlier deployments informed this one.” [OpenAI, ChatGPT announcement, 2022-11-30]
30. The post lists a “Model training team” of named individual contributors and cites academic references on learning to summarize with human feedback and reward-model overoptimization. [OpenAI, ChatGPT announcement, 2022-11-30]
31. The post is authored under OpenAI with John Schulman named, and the site footer identifies “OpenAI © 2015–2022.” [OpenAI, ChatGPT announcement, 2022-11-30]
32. Site navigation on the captured page lists API sections including Overview, Pricing, Examples, Docs, and Terms & Policies, and research/product links including DALL·E 2, Alignment, Instruction Following, Summarizing Books, OpenAI Codex, and Startup Fund. [OpenAI, ChatGPT announcement, 2022-11-30]
33. OpenAI states the Feedback Contest “draws upon work by” authors affiliated with the Algorithmic Justice League (January 2022 bug-bounty-for-algorithmic-harms paper) and also cites HackerOne’s “Twitter Algorithmic Bias” (2021). [OpenAI, ChatGPT announcement, 2022-11-30]

**Not stated in the T0 source, and therefore Unknown:** any ChatGPT subscription price, seat fee, or advertising model; any exclusive cloud or model-licensing contract; the corporate owner of Azure AI beyond the product name “Azure AI”; any public-listing or ticker status for OpenAI or any other firm; user counts, retention, or cost to serve; whether the free research preview will remain free; and any named competing conversational AI product. *(Unknown)*

---

## 3. Customer Problem

**What end-user problem changed.** People need an accessible way to get multi-turn help — follow-ups, clarification, rewriting, and refusal of inappropriate asks — without assembling answers only through single-turn prompts or non-dialogue tools. OpenAI frames ChatGPT’s dialogue format as enabling follow-up questions, mistake admission, premise challenges, and rejection of inappropriate requests, and offers a free research-preview interface at chat.openai.com to gather feedback on strengths and weaknesses [facts 2, 3, 5–8]. *(Evidence-supported)*

Three components are distinguishable:

- **Multi-turn dialogue versus single-turn instruction following.** Sibling to InstructGPT but conversational [facts 3, 4, 8]. *(Evidence-supported)*
- **Safety / refusal under dialogue.** Refuse illegal or harmful asks (with acknowledged failure modes) and use Moderation API / content filter [facts 8, 9, 20, 21, 27]. *(Evidence-supported as OpenAI’s claim)*
- **Accessibility of the interface.** Free research preview and “accessible interface” for feedback [facts 6, 7, 26]. *(Evidence-supported)*

**Who is worse off without it:** users who want conversational assistance and feedback-driven improvement of such systems — the audience OpenAI invites [facts 5–7, 22, 26]. How many such users exist, what they previously spent, or what tasks they cannot complete otherwise is not disclosed. Magnitude of the customer problem is **Unknown**.

---

## 4. Industry Change

**The concrete change.** OpenAI releases ChatGPT as a free research-preview conversational interface over an RLHF-tuned, GPT-3.5-series sibling to InstructGPT, hosted at chat.openai.com, with Moderation API filtering and an explicit feedback / contest loop [facts 2–7, 10, 14, 21, 27, 28]. *(Evidence-supported)*

**Which system requirement shifts.**

1. **From single-turn instruction following (InstructGPT) to dialogue-format interaction.** Sibling model with multi-turn capabilities [facts 3, 4, 8]. *(Evidence-supported)*
2. **From API- or research-only model access toward an accessible consumer chat interface.** Free preview at chat.openai.com; feedback via UI [facts 6, 7, 26, 27]. *(Evidence-supported)*
3. **From unaligned free-form generation toward RLHF safety mitigations informed by GPT-3 and Codex deployments.** RLHF reductions in harmful/untruthful outputs claimed; limitations still listed [facts 10, 16–21, 23, 24]. *(Evidence-supported as OpenAI’s claim)*
4. **From one-shot release toward iterative deployment with planned model updates.** Regular updates planned; lessons to inform more capable systems [facts 23, 25, 29]. *(Evidence-supported as OpenAI’s claim)*

**Why the prior solution becomes insufficient.** OpenAI does not claim InstructGPT or search cannot answer questions; it positions dialogue format, accessible interface, and iterative safety learning as the release’s purpose, while disclosing hallucination, verbosity, and safety failures [facts 3–5, 16–21, 26]. *(Reasoned Inference)*

**Structural or cyclical.** Structural if conversational RLHF interfaces become a default way users interact with large language models: multi-turn dialogue, moderation, and feedback loops rather than only single-turn completion APIs [facts 3, 7, 21, 23, 26]. At T0 this is a free research preview; commercialization of ChatGPT itself is undisclosed [fact 6]. *(Reasoned Inference)*

---

## 5. Value Chain Analysis

**Purpose.** Map how value flows after §4. No winner is identified here.

| Layer | Role | Scarcity | Bottleneck | Expected Value Change | Evidence Label |
| --- | --- | --- | --- | --- | --- |
| Azure AI supercomputing infrastructure | Training compute for ChatGPT and GPT-3.5 [fact 15] | Unknown | Unknown | ↑ | Hypothesis |
| Base GPT-3.5-series model | Foundation ChatGPT is fine-tuned from [fact 14] | Unknown | Yes | ↑ | Reasoned Inference |
| RLHF / human AI trainer data & reward models | Supervised dialogue data, rankings, PPO fine-tuning [facts 10–13] | Unknown | Yes | ↑ | Reasoned Inference |

| ChatGPT conversational model + Moderation API / content filter | Dialogue assistant and safety filtering [facts 2, 3, 21, 27] | Unknown | Yes | ↑ | Reasoned Inference |
| Accessible chat interface (chat.openai.com) | Free research-preview delivery and feedback UI [facts 6, 7, 26, 27] | Unknown | No | ↑ | Reasoned Inference |
| OpenAI API (credits as contest prize; Pricing nav present) | Existing API surface referenced via contest credits and site nav [facts 28, 32] | Unknown | No | Unknown | Unknown |
| Single-turn instruction models (e.g. InstructGPT / text-davinci-002) | Compared prior / sibling path [facts 4, 9] | No | No | → | Reasoned Inference |
| End users / feedback providers | Use free preview; submit feedback; contest entrants [facts 5–7, 22, 27, 28] | No | No | ↑ | Hypothesis |

**Layers with no participant named.** The corporate provider of Azure AI is not named beyond “Azure AI” [fact 15]. No competing chatbot company is named. Human AI trainers are a role class, not a named firm [facts 11, 13]. Per `RESEARCH_REPORT_STANDARD.md` §5, none is inferred.

**Reading notes.**

- Bottleneck candidates labeled `Yes` as `Reasoned Inference`: GPT-3.5-series base capability, RLHF alignment data/process, and the ChatGPT + moderation stack that delivers dialogue safely enough to ship [facts 10–14, 21]. Scarcity of each is **Unknown**.
- Azure AI compute is `↑` only as `Hypothesis` (named training substrate; economics and scarcity undisclosed) [fact 15].
- InstructGPT path is `→` rather than `↓`: still the sibling/comparison baseline, not declared obsolete [facts 4, 9].

No winner is identified in this section.

---

## 6. Value Migration

**Where value moves — origin and destination both named.**

| From (origin layer) | To (destination layer) | Basis |
| --- | --- | --- |
| Single-turn instruction following (InstructGPT-class) | Dialogue-format ChatGPT interaction | Facts 3, 4, 8 |
| Non-accessible / less interactive model use | Free accessible chat.openai.com interface | Facts 6, 7, 26 |
| Deployment without large-scale conversational feedback | Iterative deployment + UI feedback / contest loop | Facts 5, 22, 23, 26–29 |

**Why the migration follows.**

1. OpenAI states dialogue enables follow-ups, mistake admission, premise challenges, and refusal behaviors beyond single-turn InstructGPT framing [facts 3, 4]. *(Evidence-supported)*
2. It ships a free, accessible interface expressly to learn strengths/weaknesses and uncover unknown issues [facts 5–7, 26]. *(Evidence-supported)*
3. Safety mitigations and RLHF are positioned as continuing OpenAI’s iterative deployment path from GPT-3 and Codex [facts 10, 23, 24]. *(Evidence-supported)*
4. Therefore value migrates toward conversational RLHF interfaces operated as iterative research previews — if adoption and feedback sustain the path toward more capable systems. *(Reasoned Inference)*

**Links not established.** Magnitude of profit migration is **Unknown** (ChatGPT is free; no ChatGPT fee). Whether Azure AI infrastructure captures training surplus is **Unknown** [fact 15]. Whether API credits imply ChatGPT will monetize like the API is **Unknown** [fact 28]. *(Unknown)*

**Confidence on the migration as a whole: Medium.** *(Reasoned Inference)* Direction is supported by OpenAI’s dialogue-versus-InstructGPT framing and accessible-preview design. Against that: free preview only, disclosed quality/safety failures, and undisclosed ChatGPT monetization. Under `VALUE_CAPTURE_METHODOLOGY.md` §6, undisclosed load-bearing elements cap confidence below High.

**Statement of standing.** Potential value reallocation. Requires later market verification.

---

## 7. Value Capture

Per `VALUE_CAPTURE_METHODOLOGY.md`: value creation is not value capture. Conversational assistance and safer outputs are *creation* claims [facts 2, 3, 24]; the question is who retains surplus. Every conclusion below carries exactly one evidence label and one confidence level.

**Step 1 — Industry bottleneck.** Delivering multi-turn, moderated conversational assistance from a GPT-3.5-series model with RLHF alignment, through an accessible interface that can absorb real-world feedback [facts 3, 10, 14, 21, 26]. *(Reasoned Inference, Medium)*

**Step 2 — Scarce capability.** OpenAI’s combination of GPT-3.5 fine-tune, RLHF dialogue training, ChatGPT product/interface, and Moderation API — trained on Azure AI infrastructure [facts 10–15, 21, 7]. Whether that combination is narrowly held versus replicable substitutes is **Unknown** (no competitor named). *(Reasoned Inference, Medium)*

**Step 3 — Value migration.** As in §6: toward conversational RLHF interfaces and iterative deployment feedback loops; away from sole reliance on single-turn instruction paths.

**Step 4 — Economic profit capture.** ChatGPT usage is free during the research preview; no ChatGPT price is disclosed; API credits appear only as contest prizes [facts 6, 28]. Magnitude of capture from ChatGPT itself is **Unknown**. *(Unknown, Low)*

**Step 5 — Ranking.**

### Tier 1 — Direct Value Capturer

**Vacant.** *(Reasoned Inference, Medium)*

No participant is shown to control the bottleneck *and* retain a disproportionate share of economic profit under a durable, disclosed retention mechanism. OpenAI operates the model and interface [facts 2, 7, 31], but ChatGPT is free at T0 [fact 6] and no exclusive or priced retention mechanism is disclosed. Under `VALUE_CAPTURE_METHODOLOGY.md`, absence of a Tier 1 capturer is a valid finding.

**Magnitude of capture: Unknown.** *(Unknown, Low)*

### Tier 2 — Direct Beneficiary

**OpenAI** *(Reasoned Inference, Medium)*

Retention mechanism, in three parts — each partial:

1. **Owns the model, brand, and interface.** Trains ChatGPT; serves it at chat.openai.com; identifies as OpenAI [facts 2, 7, 18, 31]. *(Reasoned Inference, Medium)*
2. **Feedback and iterative-deployment learning loop.** Explicit purpose is user feedback; plans regular model updates and carrying lessons into more capable systems [facts 5, 22, 25, 26, 29]. Learning may improve OpenAI’s later systems; conversion to ChatGPT profit is undisclosed. *(Reasoned Inference, Low)*
3. **Adjacent API economics.** Feedback Contest awards up to $500 in API credits; site nav includes API Pricing [facts 28, 32]. Suggests an existing API monetization surface, not a disclosed ChatGPT take rate. *(Reasoned Inference, Low)*

**Counter-evidence recorded.** Free research preview [fact 6]; hallucination, verbosity, prompt sensitivity, and safety failures acknowledged [facts 16–21]; dependence on Azure AI infrastructure named without terms [fact 15]; InstructGPT sibling remains in the comparison set [facts 4, 9]. These keep OpenAI at Tier 2, not Tier 1. *(Reasoned Inference, Medium)*

### Tier 3 — Indirect Beneficiary

**None assigned with a closed second-order path.** Azure AI is named as training infrastructure [fact 15], but no corporate participant is named and no commercial terms are disclosed. Naming a cloud vendor would be an inferred participant. *(Unknown, Low)*

### Tier 4 — Potential Beneficiary

- **Azure AI infrastructure provider (unnamed corporate entity)** *(Hypothesis, Low)* Training substrate [fact 15]; economics Unknown.
- **End users** *(Hypothesis, Low)* May retain surplus via free conversational assistance [facts 6, 8]; willingness to pay Unknown.
- **API customers redeeming contest credits** *(Unknown, Low)* Contest prize structure only [fact 28]; not a ChatGPT capture path.

**Alternative explanations.** That Azure AI infrastructure rents capture most surplus from training demand — possible [fact 15] *(Hypothesis, Low)*. That users capture most surplus while ChatGPT remains free — consistent with preview terms *(Hypothesis, Low)*. That the preview ends without a retaining paid product — possible [fact 6] *(Unknown, Low)*. That InstructGPT/API completion remains the primary monetized surface while ChatGPT stays a free learning tool — consistent with API-credit contest framing *(Hypothesis, Low)*.

---

## 8. Listed Companies

Publicly listed participants named in the T0 source. **Not ranked; not a recommendation; no valuation.**

**Inclusion rule.** Enter only if the T0 source names the entity and establishes it as the publicly listed company.

| Company | Role | Why | Evidence | Confidence |
| --- | --- | --- | --- | --- |

**Why this table has zero rows.** The source names OpenAI; product/model names ChatGPT, InstructGPT, GPT-3.5, GPT-3, Codex / OpenAI Codex, DALL·E 2, Moderation API, and Azure AI; and reference organizations Algorithmic Justice League and HackerOne in contest-inspiration footnotes [facts 2, 4, 14, 15, 21, 24, 28, 32, 33]. None of the text states that any named entity is publicly listed or supplies a ticker/exchange designation. Inferring listing status would violate the inclusion rule used in prior compliant reports.

**Named in the source but excluded from this table.**

- **OpenAI** [facts 18, 23, 31] — Tier 2 operator in §7; listing not established.
- **Azure AI** [fact 15] — infrastructure product name; corporate listing not established; parent not named.
- **DALL·E 2 / OpenAI Codex / Startup Fund** [fact 32] — related OpenAI offerings in nav; no ChatGPT capture path as separate listed issuers.
- **Algorithmic Justice League / HackerOne** [fact 33] — bibliographic contest inspiration only; omitted.

**Layers with no row.** Azure AI corporate provider and any competing chatbot vendors remain unattributed.

**Displaced participants.** No company is named by OpenAI as a displaced incumbent; InstructGPT remains a sibling/comparison model [facts 4, 9]. *(Unknown)*

---

## 9. Risks

### Assumptions that could fail

1. **Free research preview sustains usage and converts into a durable product surface** — supports §§4–7. ChatGPT is free; paid ChatGPT terms undisclosed [fact 6]. *(Unknown at T0)*
2. **Dialogue RLHF quality is good enough despite hallucinations and safety failures** — supports migration. Limitations are explicitly listed [facts 16–21]. *(Hypothesis)*
3. **Feedback and iterative updates improve the system faster than residual harms erode trust** — supports OpenAI Tier 2 mechanisms 2 [facts 22, 25–27, 29]. *(Hypothesis)*
4. **OpenAI retains product control rather than becoming a thin client over unnamed infrastructure** — supports Tier 2 vs Azure AI Hypothesis [fact 15]. Terms Unknown. *(Unknown)*
5. **No single participant later establishes exclusive control that would fill vacant Tier 1** — supports Tier 1 vacancy. If paid switching costs, exclusive model distribution, or proprietary data moats appear later, vacancy could be wrong. *(Hypothesis)*
6. **API-adjacent monetization remains available even if ChatGPT stays free** — supports mechanism 3 [facts 28, 32]. API Pricing page content is not established in §2 beyond nav presence. *(Unknown)*

### What would weaken the thesis

- Preview traffic collapsing after novelty without retained usage.
- Persistent hallucination/safety failures dominating feedback outcomes.
- Azure AI or other infrastructure capturing most economic surplus from training/serving.
- ChatGPT remaining permanently free while OpenAI fails to monetize adjacent surfaces.
- Users remaining on single-turn InstructGPT/API workflows at scale.

### What would invalidate the thesis

- **OpenAI withdrawing ChatGPT without a retaining conversational substitute**, so the migration destination does not persist.
- **Economic profit from conversational LLMs accruing primarily to an unnamed infrastructure layer**, such that OpenAI does not retain Tier 2 surplus as framed.
- **Dialogue interfaces failing to become a default LLM interaction mode**, reversing the migration in §6.
- **A portable open standard or interchangeable hosted chat making ChatGPT a zero-retention conduit**, removing residual learning and brand mechanisms.

Weakening and invalidating conditions are kept separate deliberately: the first set reduces the size of the conclusion; the last set replaces it.

---

## 10. Monitoring Signals

Each signal names the P0 source class where it would become visible, a horizon measured from T0, and what its absence by that point would imply.

| # | Signal | Source class | Horizon | Absence implies |
| ---: | --- | --- | --- | --- |
| 1 | End of research preview or statement that free access continues/ends | OpenAI official announcements / blog | 1–8 quarters | Assumption 1 unresolved |
| 2 | Published ChatGPT pricing, subscription, or commercial terms | OpenAI official product/pricing pages | 1–8 quarters | Magnitude of ChatGPT capture stays Unknown |
| 3 | Regular model-update announcements as OpenAI planned | OpenAI official blog/product notes | 1–4 quarters | Assumption 3 / attributed update plan [fact 25] unmet |
| 4 | Disclosure of usage, retention, or feedback-volume metrics | OpenAI official announcements or (if later public) filings | 2–12 quarters | Adoption/feedback loop unverified |
| 5 | Safety/quality evaluation updates vs stated limitations | OpenAI official technical posts | 2–8 quarters | Assumption 2 unresolved |
| 6 | Azure AI or other cloud training/serving partnership terms | OpenAI and/or cloud-provider official announcements | 2–12 quarters | Assumption 4 / infrastructure surplus split unresolved |
| 7 | Competing conversational LLM chat products from named vendors | Competitor official announcements | 2–12 quarters | Contestability of Tier 2 untested |
| 8 | Expansion of Moderation API / content-filter performance claims | OpenAI official API/docs announcements | 2–8 quarters | Safety-filter path [facts 21, 27] static |
| 9 | API pricing/usage linkage to ChatGPT (or clear separation) | OpenAI official API Pricing and product posts | 2–8 quarters | Assumption 6 unresolved |
| 10 | Any listing / IPO / ownership disclosure establishing OpenAI as public | Official offering documents / exchange notices | Any time | §8 remains empty on listing grounds |
| 11 | Deployment of “more capable systems” informed by ChatGPT lessons | OpenAI official announcements | 2–12 quarters | Attributed iterative-deployment claim [fact 29] unmet |
| 12 | Evidence of switching costs, accounts, or paid retention features | OpenAI official terms and product docs | 4–12 quarters | Retention durability / Tier 1 vacancy untested |

### Closure paths for every open item

Per `RESEARCH_REPORT_STANDARD.md` §10 and `VALUE_CAPTURE_METHODOLOGY.md` §7, every `Hypothesis` and `Unknown` recorded in §§5–8 has a closure path above.

| Open item | Recorded in | Closes via |
| --- | --- | --- |
| Azure AI layer direction / surplus (**Hypothesis** / **Unknown**) | §5, §7 Tier 3–4 | Signals 6, 9 |
| GPT-3.5 / RLHF / ChatGPT scarcity (**Unknown**) | §5 | Signals 7, 12 |
| End-user surplus (**Hypothesis**) | §5, §7 Tier 4 | Signals 1, 2, 4 |
| OpenAI API layer direction (**Unknown**) | §5, §9 assumption 6 | Signal 9 |
| Magnitude of capture (**Unknown**) | §1, §7 Step 4 | Signals 2, 4, 9 |
| Preview → durable product (**Unknown**) | §4, §9 assumption 1 | Signals 1, 2, 12 |
| Quality/safety adequacy (**Hypothesis**) | §9 assumption 2 | Signals 5, 8 |
| Feedback-learning advantage (**Hypothesis**) | §9 assumption 3 | Signals 3, 4, 11 |
| OpenAI vs infrastructure control (**Unknown**) | §9 assumption 4 | Signal 6 |
| Tier 1 vacancy vs later enclosure (**Hypothesis**) | §7, §9 assumption 5 | Signals 2, 12 |
| Listing status for §8 (**Unknown**) | §8 | Signal 10 |
| Customer-problem magnitude (**Unknown**) | §3 | Signals 4, 2 |
| Displaced incumbent identity (**Unknown**) | §5, §8 | Signal 7 |
| Contest bibliographic entities (**Unknown** adjacency) | §8 | No capture path expected |

No open item lacks a closure path. No signal requires non-public information. No signal is expressed as a trading trigger, entry condition, or action.

---

*Report produced under `RESEARCH_REPORT_STANDARD.md` v1.1 (repository version; sprint attribution and confidence rules applied) and `MISSION.md`. Single P0 OpenAI source, T0-locked to 2022-11-30. Contains no investment recommendation, no valuation or securities-price information, and no timing signal. Free-preview and API-credit language appear only as facts stated by OpenAI. All Unknown items remain Unknown.*
