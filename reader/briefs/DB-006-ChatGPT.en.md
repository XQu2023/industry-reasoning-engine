# ChatGPT Makes Dialogue the Public Interface to Large Language Models

| Field | Value |
| --- | --- |
| Product | Decision Brief DB-006 |
| Parent research | `reports/SRE-115-ChatGPT.md` |
| T0 | 2022-11-30 |
| Reading time | ~5 minutes |
| Disclaimer | For long-term research context only. Not investment advice. Not a recommendation to buy, sell, or hold any security. |

---

# Headline

OpenAI’s ChatGPT launch reframes language-model access as a free conversational RLHF interface — while Tier 1 capture stays vacant at T0.

---

# Executive Summary

Why should I care? On 30 November 2022, OpenAI released ChatGPT as a free research preview at chat.openai.com: a GPT-3.5-series model tuned with RLHF for dialogue, able to follow-ups, admit mistakes, challenge premises, and refuse inappropriate requests. Training used Azure AI; a Moderation API and feedback contest (API credits) support iterative deployment. If multi-turn conversation becomes the default way people use large language models, value migrates toward that interface and feedback loop. What we do **not** know is ChatGPT pricing, whether free remains free, exclusive cloud terms, or who retains surplus. Tier 1 is vacant; magnitude remains Unknown.

*(Derived from SRE-115 §§1, 6–7. Reasoned Inference, Medium; Tier 1 vacant.)*

---

# What Changed?

On 30 November 2022, OpenAI published the ChatGPT announcement.

- ChatGPT is a free research preview conversational model at chat.openai.com.
- Built as a sibling of InstructGPT; uses RLHF on a GPT-3.5-series model for dialogue behaviour.
- OpenAI describes strengths in follow-ups, admitting mistakes, challenging incorrect premises, and rejecting inappropriate requests — and also lists failure modes (hallucination, verbosity, sensitivity to prompt phrasing, safety issues).
- Training partnership named as Azure AI; Moderation API called out; feedback contest offers API credits.
- No ChatGPT subscription price or advertising model is stated in the T0 announcement.

*(Facts only — SRE-115 §2.)*

---

# Why It Matters

Single-turn instruction-following and non-dialogue tools do not match how people ask for help across a conversation. Users need multi-turn context, correction, and refusal behaviour.

ChatGPT answers with a public conversational surface:

1. **Interaction mode moves** — from single-turn completion toward dialogue.
2. **Access is immediate and free** — a research preview in the browser, not only an API for builders.
3. **Improvement is iterative** — moderation and user feedback are part of the deployment loop.

Whether usage sticks and converts into a durable paid product surface is still Unknown.

*(SRE-115 §§3–4, 6.)*

---

# Where Value Is Moving

Simple value flow (five nodes):

```text
[Single-turn instruction-following / non-dialogue tools]
        ↓
[RLHF-tuned GPT-3.5-series dialogue model]
        ↓
[Free browser chat interface]
        ↓
[Moderation + feedback / iterative deployment]
        ↓
[Users and adjacent API surfaces]
```

**Reading.** Value pressure moves **toward** a free, accessible conversational RLHF interface and the operator’s feedback loop — if adoption holds. OpenAI operates the model and interface but ChatGPT is free at T0 with no disclosed priced retention mechanism, so Tier 1 is vacant. Share of economic profit is Unknown.

*(SRE-115 §§5–7. Potential reallocation; Medium. Tier 1 vacant.)*

---

# Potential Beneficiaries

Companies below are named for further research only. **Not a recommendation. Not ranked by attractiveness. No price targets.**

| Company | Reason | Confidence | Unknown |
| --- | --- | --- | --- |
| **— (Tier 1 vacant)** | Free preview; no disclosed durable priced retention mechanism | — | Whether paid conversion or switching costs later fill Tier 1 |
| **OpenAI** | Trains and operates ChatGPT, interface, Moderation API, feedback loop; Tier 2 in SRE-115 | Medium | Price/ads; listing; user counts; cost to serve; whether free remains free |
| **— (Azure AI provider)** | Named training infrastructure without corporate owner or terms in source | — | Identity beyond product name; commercial terms; surplus share |
| **— (end users / contest redeemers)** | Audience invited to use and give feedback; API credits as prizes | — | Whether surplus accrues to users |

*(SRE-115 §§7–8. No publicly listed participant established under the SRE inclusion rule.)*

---

# Reality Check

**Current thesis.** If conversational RLHF interfaces become the default way users interact with large language models, value migrates to that surface and feedback loop — but at T0 OpenAI is Tier 2 only, Tier 1 is vacant, and capture magnitude is Unknown.

**What would prove us wrong?**

- ChatGPT withdrawn without a substitute dialogue surface.
- Surplus accruing mainly to the infrastructure layer.
- Dialogue failing as the default LLM interaction mode.
- Portable, interchangeable hosted chat with zero retention.

**Next validation point.** End of free preview or a paid ChatGPT product; pricing disclosures; model updates and safety outcomes; and Azure commercial terms that clarify infrastructure surplus.

*(SRE-115 §§9–10.)*

---

# Bottom Line

ChatGPT is less “a new model checkpoint” than “dialogue as the public interface to LLMs,” shipped free with an iterative feedback loop. OpenAI is the clearest named operator but only Tier 2 while the product is free and unpriced. Tier 1 vacancy and Unknown surplus are the honest capture reading at T0.

*(SRE-115 key conclusion.)*

---

# Sources

- **Parent Decision Brief research:** [SRE-115 — ChatGPT](../reports/SRE-115-ChatGPT.md) (`reports/SRE-115-ChatGPT.md`)
- **Underlying official source (P0 only, via SRE-115):** OpenAI Blog, 30 November 2022 — “ChatGPT: Optimizing Language Models for Dialogue”

No other sources used. No new research performed. Every statement above is traceable to SRE-115.
