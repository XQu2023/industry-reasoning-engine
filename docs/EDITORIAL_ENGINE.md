# FORESIGHT Editorial Engine

Permanent editorial standard for every FORESIGHT Brief.

The Editorial Engine defines **how FORESIGHT thinks on the page** — not how research is performed, and not how the site is coded.

| Layer | Owns |
| --- | --- |
| [Engine](./ENGINE_GUIDE.md) | Facts → reasoning → Engine Report |
| **Editorial Engine** (this doc) | Structure, rhythm, insight, ending, editorial QA |
| [Writer](./WRITER_GUIDE.md) | Derivation craft into Journal Draft |
| [Journal](./JOURNAL_GUIDE.md) | Layout, type, spacing, render QA |
| [Case Standard](./CASE_STANDARD.md) | Publish gates (length, scores, required sections) |

Do not invent research.  
Do not redesign Journal per article.  
Do not ship advice.

---

## Table of Contents

1. [Editorial Mission](#editorial-mission)
2. [Editorial Principles](#editorial-principles)
3. [Editorial Structure](#editorial-structure)
4. [Hero Rules](#hero-rules)
5. [Story Rules](#story-rules)
6. [Diagram Rules](#diagram-rules)
7. [Insight Rules](#insight-rules)
8. [World Model Rules](#world-model-rules)
9. [Ending Rules](#ending-rules)
10. [Editorial QA](#editorial-qa)
11. [Editorial Score](#editorial-score)
12. [Related Documents](#related-documents)

---

## Editorial Mission

Help readers **understand how value moves** — in five minutes — with enough structure to think independently afterward.

FORESIGHT editorial succeeds when a reader leaves with:

1. One clear structural question  
2. One memorable insight  
3. One reusable World Model  
4. Explicit conditions that would change today’s conclusion  
5. A path to continue thinking  

FORESIGHT editorial fails when a Brief becomes a research dump, a tip sheet, a brand story, or a layout experiment.

North Star: [FORESIGHT_CONSTITUTION.md](./FORESIGHT_CONSTITUTION.md).  
Voice: [BRAND_SYSTEM.md](./BRAND_SYSTEM.md#brand-voice).

---

## Editorial Principles

1. **Truth before narrative** — Evidence leads; story follows.  
2. **Curiosity before density** — Question and Story precede Analysis.  
3. **One idea per screen** — Large whitespace; no stacked competing claims.  
4. **Bottleneck over spotlight** — Teach the hard constraint, not the loud brand.  
5. **Unknown stays Unknown** — Unsupported certainty is an editorial defect.  
6. **Derivation only** — No new facts beyond the Engine / research trail.  
7. **Structure is frozen** — Same section order for every Brief.  
8. **Reusable over topical** — Every Brief exports a World Model.  
9. **Falsifiable endings** — Close with what would change your mind, not a flourish.  
10. **No advice** — No buy/sell, target price, or portfolio instruction.  
11. **Circle brand language** — FORESIGHT mark and fixed footer; no third icon system.  
12. **Validate before polish** — Editorial QA before visual novelty.

Benchmarks: Apple clarity · Stripe Annual Letter discipline · The Economist calm · Linear restraint.

---

## Editorial Structure

Every Brief uses this frozen order:

```text
Hero
  ↓
Question
  ↓
Story
  ↓
Diagram
  ↓
Key Insight
  ↓
Analysis
  ↓
World Model
  ↓
What Would Change My Mind
  ↓
Continue Thinking
  ↓
Footer
```

| Zone | Sections | Job |
| --- | --- | --- |
| **Open** | Hero · Question | Stop the scroll; create curiosity |
| **Show** | Story · Diagram | Make the industry moment and structure visible |
| **Strike** | Key Insight | One sentence that travels |
| **Prove** | Analysis | Detailed reasoning — only here |
| **Export** | World Model | Reusable principle |
| **Close** | Change My Mind · Continue Thinking · Footer | Falsify, continue, brand |

Publish requirements: [CASE_STANDARD.md](./CASE_STANDARD.md).  
Layout implementation: [JOURNAL_GUIDE.md](./JOURNAL_GUIDE.md).  
Writer mapping: [WRITER_GUIDE.md](./WRITER_GUIDE.md#writing-structure).

---

## Hero Rules

Hero is the open of the Editorial Engine.

### Must contain

| Element | Rule |
| --- | --- |
| **FORESIGHT mark** | Circle + wordmark (see [BRAND_SYSTEM.md](./BRAND_SYSTEM.md)) |
| **Hero quote** | Max **two lines**; structural truth, not teaser gimmick |
| **Title** | Specific; no clickbait |
| **Summary** | One short paragraph; names the subject without dumping Analysis |
| **Metadata** | DB number · reading time · industry — visually subtle |

### Constraints

- Target hero height ~**70vh** ([JOURNAL_GUIDE.md](./JOURNAL_GUIDE.md#journal-layout)).  
- Reading time metadata ≤ **5 minutes** ([CASE_STANDARD.md](./CASE_STANDARD.md#maximum-reading-time)).  
- Quote color uses FORESIGHT Green only.  
- Do not place stats strips, badges, or promo chips in the Hero.

### Question (immediately after Hero)

- Exactly **one** question.  
- Maximum **120 words** (prefer one tight sentence).  
- Large whitespace.  
- Structural curiosity — not trivia.

---

## Story Rules

Story brings the reader into the industry moment.

| Rule | Standard |
| --- | --- |
| Rhythm | Magazine reading rhythm |
| Paragraph length | About **≤ 3 lines** each |
| Blocks | No long text walls |
| Metaphor | Allowed only when it clarifies structure |
| Placement | Prepares Diagram and Key Insight; does **not** replace Analysis |
| Facts | No new research; no upgraded Unknown |

Cut Story before cutting Diagram, Key Insight, World Model, or Change My Mind when length is over budget ([CASE_STANDARD.md](./CASE_STANDARD.md#maximum-length)).

---

## Diagram Rules

Diagrams are mandatory editorial assets.

| Rule | Standard |
| --- | --- |
| Minimum | **≥ 1** diagram per Brief |
| Nodes | Simple node · arrow · line; prefer 3–5 nodes |
| Style | Structural bottleneck / value chain — not illustration |
| Caption | Optional; structural only |
| Forbidden | Complex art, emoji, third-party icon packs, dense charts as substitutes |
| QA | Missing diagram fails Journal build and Editorial QA |

Visual language: [JOURNAL_GUIDE.md](./JOURNAL_GUIDE.md#diagram-rules) · [BRAND_SYSTEM.md](./BRAND_SYSTEM.md#diagram-language).

---

## Insight Rules

**Key Insight** is the strike of the Editorial Engine.

| Rule | Standard |
| --- | --- |
| Count | Exactly **one** insight sentence (tight pair treated as one line if inseparable) |
| Form | Memorable contrast that teaches the model (demand vs supply, spotlight vs bottleneck) |
| Placement | Full-width emphasis; isolated from Analysis clutter |
| Truth | Must be grounded in Engine / research trail |
| Anti-patterns | Hype slogans, tips, “stock will…” language |

Analysis (after Insight) is the only place for detailed reasoning.  
Never place dense proof before Key Insight.

---

## World Model Rules

Every Brief exports **≥ 1** World Model.

### Must contain

1. Title: **World Model**  
2. One reusable investment / structural principle  
3. Apply label (e.g. *Where else can this apply?*)  
4. Concrete apply-to domains (typically 3–5)

| Rule | Standard |
| --- | --- |
| Reuse | Principle must transfer beyond this ticker / event |
| Falsifiability | Compatible with Change My Mind items |
| Presentation | Distinct card / warm-gray surface in Journal |
| Non-goal | Not a list of stock picks |

See [WRITER_GUIDE.md](./WRITER_GUIDE.md#world-model) · [JOURNAL_GUIDE.md](./JOURNAL_GUIDE.md#world-model-card).

---

## Ending Rules

The close has three fixed parts.

### 1. What Would Change My Mind

| Rule | Standard |
| --- | --- |
| Prompt | *What would change today’s conclusion?* (or locale equivalent) |
| Form | Checkbox-style list of concrete, later-observable conditions |
| Source | Prefer Reality Check / Unknowns / verification items from research |
| Anti-patterns | Vague “more data,” motivational closers, advice |

### 2. Continue Thinking

| Rule | Standard |
| --- | --- |
| Title | Continue Reading (or locale equivalent) |
| Count | 2–4 related Briefs |
| Logic | Structural adjacency / learning path — not recency spam |
| Display | DB IDs visible |

### 3. Footer

Fixed brand close — not authored per Brief:

```text
FORESIGHT
Understand how value moves.
Think independently.
```

Circle mark required. See [BRAND_SYSTEM.md](./BRAND_SYSTEM.md) · [JOURNAL_GUIDE.md](./JOURNAL_GUIDE.md#footer).

---

## Editorial QA

Run Editorial QA on every Journal Draft before Deploy ([CASE_FACTORY.md](./CASE_FACTORY.md) Steps 5–8).

### Checklist

- [ ] Structure matches frozen order (Hero → Footer)  
- [ ] Hero quote ≤ 2 lines; title specific; metadata complete; read ≤ 5 min  
- [ ] One Question; curiosity without gimmick  
- [ ] Story uses short paragraphs; magazine rhythm  
- [ ] ≥ 1 Diagram; simple nodes and arrows  
- [ ] One Key Insight; grounded; memorable  
- [ ] Analysis holds the density; not earlier  
- [ ] ≥ 1 World Model with apply-to domains  
- [ ] Change My Mind items are concrete falsifiers  
- [ ] Continue Thinking is a learning path with real Briefs  
- [ ] Footer is the fixed FORESIGHT close  
- [ ] Length ≤ 2200 Chinese characters (or equivalent EN density)  
- [ ] No investment advice; Unknowns remain explicit  
- [ ] Circle brand language only — no extra icon system  

### Hard fail

Any of: missing required section · no diagram · no World Model · advice language · invented facts · reading time > 5 min · length over budget · Editorial Score < 90 when used as Writer Score input.

Also must pass technical Journal QA ([JOURNAL_GUIDE.md](./JOURNAL_GUIDE.md#journal-qa)) and Case Standard score gates ([CASE_STANDARD.md](./CASE_STANDARD.md#score-gates)).

---

## Editorial Score

Score each Brief out of **100** after Editorial QA.

This is the permanent **editorial** score.  
It aligns with Writer Score dimensions in [WRITER_GUIDE.md](./WRITER_GUIDE.md#writer-score) and feeds Case Standard **Writer Score ≥ 90**.

| Dimension | Max | Excellent means |
| --- | ---: | --- |
| **Hero clarity** | 10 | Quote + title stop the right reader without hype |
| **Question quality** | 10 | One structural question; earned curiosity |
| **Story rhythm** | 15 | Short paragraphs; vivid; no wall of text |
| **Diagram clarity** | 10 | Simple; teaches the bottleneck chain |
| **Key Insight** | 15 | Memorable; reusable; true to research |
| **Analysis discipline** | 15 | Density only here; Unknowns honest; no advice |
| **World Model** | 15 | One principle; clear transfer domains |
| **Falsifiers** | 5 | Concrete Change My Mind items |
| **Learning path** | 5 | Continue Thinking is structural, not random |

| Score | Action |
| ---: | --- |
| **90–100** | Meets editorial publish gate |
| **80–89** | Revise before publish |
| **70–79** | Rebuild Story / Insight / World Model |
| **< 70** | Do not publish |

Case Standard still requires:

- Engine Score ≥ 95  
- Writer / Editorial Score ≥ 90  
- Journal Score ≥ 90  
- Overall ≥ 90  

Otherwise: **Do Not Publish** ([CASE_STANDARD.md](./CASE_STANDARD.md#do-not-publish)).

---

## Related Documents

- [FORESIGHT_CONSTITUTION.md](./FORESIGHT_CONSTITUTION.md)  
- [CASE_FACTORY.md](./CASE_FACTORY.md)  
- [CASE_STANDARD.md](./CASE_STANDARD.md)  
- [WRITER_GUIDE.md](./WRITER_GUIDE.md)  
- [JOURNAL_GUIDE.md](./JOURNAL_GUIDE.md)  
- [BRAND_SYSTEM.md](./BRAND_SYSTEM.md)  
- [ENGINE_GUIDE.md](./ENGINE_GUIDE.md)  
- [ROADMAP.md](./ROADMAP.md)  
- [CHANGELOG.md](./CHANGELOG.md)  
- [README.md](./README.md)  

---

*Editorial Engine — Delivery E1-001.*
