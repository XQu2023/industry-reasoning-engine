# Writer Guide

Operating guide for the FORESIGHT **Writer** — the editorial system that turns completed research into Journal-ready Decision Briefs.

The Writer does **not** perform new research.  
The Writer does **not** upgrade Unknown.  
The Writer derives, structures, and teaches.

---

## Table of Contents

1. [Writer Principles](#writer-principles)
2. [Writing Voice](#writing-voice)
3. [Writing Structure](#writing-structure)
4. [Hook](#hook)
5. [Question](#question)
6. [Story](#story)
7. [Diagram](#diagram)
8. [Key Insight](#key-insight)
9. [Analysis](#analysis)
10. [World Model](#world-model)
11. [What Would Change My Mind](#what-would-change-my-mind)
12. [Continue Thinking](#continue-thinking)
13. [Writer QA](#writer-qa)
14. [Writer Score](#writer-score)
15. [Related Documents](#related-documents)

---

## Writer Principles

1. **Derivation only** — One completed SRE (or equivalent gated research) may yield one Brief.
2. **No new facts** — If it is not in the research trail, it does not enter the Brief.
3. **Unknown stays Unknown** — Do not fill gaps with confidence.
4. **Journal order is frozen** — Never invent a new section order for a single article.
5. **One idea per screen** — Prefer short paragraphs and large whitespace.
6. **Curiosity before analysis** — Question and Story precede detailed reasoning.
7. **Reusable thinking** — Every Brief must leave a World Model the reader can reuse.
8. **No advice** — No buy/sell, target price, or portfolio instruction.
9. **Teach the bottleneck** — Value often migrates to the hardest constraint, not the loudest brand.
10. **Earn the next click** — Continue Thinking is a learning path, not a related-posts widget.

---

## Writing Voice

FORESIGHT voice is calm, precise, and independent.

| Do | Do not |
| --- | --- |
| Plain language for non-specialists | Jargon without payoff |
| Short sentences with weight | Long academic paragraphs |
| Explicit uncertainty | False precision |
| Structural claims | Hype adjectives |
| First-person judgment when earned (“I don’t know”) | Fake omniscience |
| Concrete nouns (GPU, HBM, InP) | Vague “disruption” talk |

Benchmarks for tone: Apple editorial clarity · Stripe Annual Letter discipline · The Economist structural calm · Linear product restraint.

Brand voice detail: [BRAND_SYSTEM.md](./BRAND_SYSTEM.md).

---

## Writing Structure

Every Brief maps to the Journal reading order:

```text
Hook (Hero)
  → Question
  → Story
  → Diagram
  → Key Insight
  → Analysis
  → World Model
  → What Would Change My Mind
  → Continue Thinking
  → Footer (fixed brand; not authored per Brief)
```

Layout implementation: [JOURNAL_GUIDE.md](./JOURNAL_GUIDE.md).

---

## Hook

**Purpose:** Stop the scroll. Establish FORESIGHT and the Brief’s stakes.

**Contains:**

- Hero quote (max two lines)
- Title
- Summary (one short paragraph)
- Metadata: DB number · reading time · industry

**Rules:**

- Quote states a structural truth, not a teaser gimmick.
- Title is specific; avoid clickbait.
- Summary names the subject without dumping analysis.

**Example quote shape:**

> Value does not move evenly across an industry.  
> It moves toward the hardest bottleneck.

---

## Question

**Purpose:** Create curiosity.

**Rules:**

- Exactly **one** question.
- Maximum **120 words** (prefer one tight sentence).
- Large whitespace around it.
- The question must be answerable only with structural thinking — not trivia.

**Example:**

> If the whole industry keeps growing, who runs out first?

---

## Story

**Purpose:** Bring the reader into the industry moment.

**Rules:**

- Magazine reading rhythm.
- Paragraphs stay short (about ≤3 lines).
- No long text blocks.
- Narrative may use metaphor only when it clarifies structure (e.g. highway / cars / road / material).
- Story prepares Diagram and Key Insight; it does not replace Analysis.

---

## Diagram

**Purpose:** Make the structure visible.

**Rules:**

- **Mandatory** for every Brief.
- Simple nodes, arrows, lines — no complex illustration.
- Prefer 3–5 nodes.
- Caption optional; keep it structural.

**Example:**

```text
GPU → Optical module → InP
```

Diagram visual rules: [JOURNAL_GUIDE.md](./JOURNAL_GUIDE.md#diagram-rules).

---

## Key Insight

**Purpose:** Deliver the one sentence the reader will remember.

**Rules:**

- Exactly **one** sentence (or one tightly linked pair treated as a single insight line).
- Full-width emphasis in Journal.
- Prefer contrast that teaches the model (demand vs supply, spotlight vs bottleneck).

**Example:**

> Demand creates markets. Bottlenecks create profits.

---

## Analysis

**Purpose:** Detailed reasoning — **only here**.

**Rules:**

- Never place dense reasoning before Analysis.
- Keep claims traceable to research.
- Separate industry logic from investment conclusion.
- Prefer numbered concerns when listing what must be verified.
- It is valid to conclude “I don’t know whether to buy.”

---

## World Model

**Purpose:** Export a reusable investment principle.

**Contains:**

- World Model title
- One reusable principle
- “Where else can this apply?” with concrete domains

**Example principle:**

> Don’t only watch demand growth. Ask first: who is hardest to scale?

**Example apply-to set:** AI · HBM · Power grid · Robotics · Nuclear

---

## What Would Change My Mind

**Purpose:** Replace vague “validation notes” with falsifiers.

**Format:**

- Prompt: *What would change today’s conclusion?*
- Checkbox list of concrete conditions

**Rules:**

- Each item must be observable later.
- Prefer supply, qualification, price, or demand-path breaks.
- This section protects intellectual honesty.

**Example items:**

- □ Capacity expands much faster than expected  
- □ Customer qualification accelerates  
- □ AI optical upgrade slows  

---

## Continue Thinking

**Purpose:** Learning path to related Briefs.

**Rules:**

- Title: Continue Reading (or locale equivalent)
- Link 2–4 Briefs that extend the World Model
- Prefer structural adjacency over recency
- IDs visible (e.g. DB-011, DB-008, DB-001)

This is not a recommendation engine for stocks. It is a curriculum.

---

## Writer QA

Every Brief must pass Writer QA before publish.

### Checklist

- [ ] Traces to completed gated research (no new research in the Brief)
- [ ] Hook quote ≤ 2 lines; metadata complete
- [ ] Single Question; ≤ 120 words
- [ ] Story uses short paragraphs; magazine rhythm
- [ ] Diagram present (≥ 2 nodes, simple arrows)
- [ ] One Key Insight sentence
- [ ] Analysis contains the detailed reasoning (and not earlier)
- [ ] World Model has one reusable principle + apply-to list
- [ ] Change My Mind has concrete falsifiers
- [ ] Continue Thinking links real Briefs
- [ ] No buy/sell advice or price targets
- [ ] Unknowns remain explicit where evidence is thin
- [ ] Journal QA also passes (build gate)

Hard fail if Diagram, Key Insight, World Model, or Change My Mind is missing.

---

## Writer Score

Score each Brief out of **100** after Writer QA.

| Dimension | Max | What “excellent” looks like |
| --- | ---: | --- |
| **Hook clarity** | 10 | Quote + title stop the right reader without hype |
| **Question quality** | 10 | One structural question; curiosity without gimmick |
| **Story rhythm** | 15 | Short paragraphs; vivid; no wall of text |
| **Diagram clarity** | 10 | Simple; teaches the bottleneck chain |
| **Key Insight** | 15 | Memorable; reusable; true to research |
| **Analysis discipline** | 15 | Detailed only here; Unknowns honest; no advice |
| **World Model** | 15 | One principle; clear transfer domains |
| **Falsifiers** | 5 | Concrete Change My Mind items |
| **Learning path** | 5 | Continue Thinking is structural, not random |

| Score | Interpretation |
| ---: | --- |
| 90–100 | Ship as reference Brief |
| 80–89 | Ship after minor edits |
| 70–79 | Revise Story / Insight / World Model |
| < 70 | Do not publish |

Writer Score is editorial. Engine IRA remains the reasoning fidelity metric ([ENGINE_GUIDE.md](./ENGINE_GUIDE.md)).

---

## Related Documents

- [JOURNAL_GUIDE.md](./JOURNAL_GUIDE.md)
- [FORESIGHT_CONSTITUTION.md](./FORESIGHT_CONSTITUTION.md)
- [BRAND_SYSTEM.md](./BRAND_SYSTEM.md)
- [ENGINE_GUIDE.md](./ENGINE_GUIDE.md)
- Spec: [STRATEGIC_RESEARCH_BRIEF_STANDARD.md](./specs/STRATEGIC_RESEARCH_BRIEF_STANDARD.md)

---

*Writer Guide — Delivery 001.*
