# Journal Guide

Operating guide for the FORESIGHT **Journal** — the permanent reading system for every Decision Brief.

Implementation: `reader/src/journal/`  
Theme: `reader/src/journal/journal-theme.css`

Do not redesign individual articles.  
Build and migrate through shared components.

---

## Table of Contents

1. [Journal Layout](#journal-layout)
2. [Reading Rhythm](#reading-rhythm)
3. [Typography](#typography)
4. [Spacing](#spacing)
5. [Diagram Rules](#diagram-rules)
6. [Quote Rules](#quote-rules)
7. [World Model Card](#world-model-card)
8. [Footer](#footer)
9. [Journal QA](#journal-qa)
10. [Related Documents](#related-documents)

---

## Journal Layout

Page order is **frozen**:

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

### Components

| Section | Component |
| --- | --- |
| Hero | `Hero.tsx` (+ `ForesightMark.tsx`) |
| Question | `Question.tsx` |
| Story | `Story.tsx` |
| Diagram | `Diagram.tsx` |
| Key Insight | `KeyInsight.tsx` |
| Analysis | `Analysis.tsx` |
| World Model | `WorldModel.tsx` |
| Change My Mind | `ChangeMind.tsx` |
| Continue Thinking | `ContinueThinking.tsx` |
| Footer | `Footer.tsx` |
| Shell | `JournalLayout.tsx` |

### Hero contents

- FORESIGHT logo (circle mark + wordmark)
- Hero quote
- Title
- Summary
- Metadata: DB number · reading time · industry (visually subtle)
- Target height: ~**70vh**

---

## Reading Rhythm

Journal is a **premium digital investment journal**, not a research PDF and not a blog.

| Principle | Practice |
| --- | --- |
| One screen, one idea | Large section padding; avoid stacked cards of competing ideas |
| Magazine rhythm | Story paragraphs stay short |
| Curiosity before density | Question + Story before Analysis |
| Emphasis by isolation | Key Insight is full-width and alone |
| Learning after judgment | World Model → Change My Mind → Continue Thinking |

Benchmarks: Apple · Stripe Annual Letter · The Economist · Linear.

---

## Typography

Only **five** type sizes exist in the Journal theme:

| Token | Role |
| --- | --- |
| **Hero** | Brief title |
| **Title** | Section titles |
| **Quote** | Hero quote, Question, Key Insight, World Model principle |
| **Body** | Story and Analysis paragraphs |
| **Caption** | Metadata, diagram captions, apply-to labels |

Fonts (implementation):

- Display: Fraunces  
- Body: Source Serif 4  
- UI / caption: IBM Plex Sans  
- Chinese: Noto Sans SC  

No additional typography levels.

---

## Spacing

| Rule | Detail |
| --- | --- |
| Measure | Primary column ~40rem; wide moments use ~64rem |
| Section padding | Large vertical whitespace (`clamp` in theme) |
| Question | Extra vertical room (~one idea, one screen) |
| Key Insight | Full-bleed green band; generous padding |
| Avoid | Dense card grids, pill clusters, stat strips in reading flow |

Color tokens used for space and atmosphere: see [BRAND_SYSTEM.md](./BRAND_SYSTEM.md#color-tokens).

---

## Diagram Rules

| Rule | Requirement |
| --- | --- |
| Mandatory | Every Brief has ≥ 1 diagram |
| Minimum nodes | ≥ 2 |
| Style | Simple node · arrow · line |
| Forbidden | Complex illustration, icon systems, decorative charts |
| Caption | Optional; structural only |
| QA | Missing or empty diagram **fails the build** |

Preferred pattern: left-to-right (desktop) or top-to-bottom (mobile) flow.

---

## Quote Rules

| Surface | Rule |
| --- | --- |
| Hero quote | Large type; maximum **two lines** |
| Voice | Structural truth, not marketing slogan |
| Color | FORESIGHT Green |
| Question | Treated as quote-scale typography; one question only |
| Inline story quotes | Allowed sparingly; do not compete with Hero quote |

---

## World Model Card

World Model is rendered as a distinct card surface (warm gray band) containing:

1. Section title (**World Model**)
2. One reusable principle (quote-scale)
3. Apply label (caption): e.g. *Where else can this apply?*
4. Apply-to list (short domain labels)

The card teaches transfer, not ticker picks.

---

## Footer

Footer content is **fixed** across Briefs:

```text
FORESIGHT
Understand how value moves.
Think independently.
```

Uses the circle mark.  
Do not invent per-article footer copy.

---

## Journal QA

Journal QA is a **build gate**.

### Required surfaces

Every Brief must include:

- [x] Hero  
- [x] Question  
- [x] Diagram  
- [x] Key Insight  
- [x] World Model  
- [x] Change My Mind  
- [x] Continue Thinking  
- [x] Footer  

(Story and Analysis are also required by the validator.)

### Implementation

| Piece | Path |
| --- | --- |
| Validator | `reader/src/journal/qa.ts` |
| Runner | `reader/src/journal/run-qa.ts` |
| npm script | `npm run qa:journal --prefix reader` |
| Build | `qa:journal` runs before `vite build` |
| Tests | `tests/journal-qa.test.ts` |

### Hard fail examples

| Missing / invalid | Result |
| --- | --- |
| No diagram nodes | Fail |
| Empty Key Insight | Fail |
| Question > 120 words | Fail |
| Incomplete footer lines | Fail |
| Missing Continue Thinking items | Fail |

If any required component is missing: **fail build**.

Publish also requires Journal Score ≥ 90 and the full Case Standard  
([CASE_STANDARD.md](./CASE_STANDARD.md)): ≤5 minute read, ≤2200 Chinese characters, ≥1 diagram, ≥1 World Model, Overall ≥ 90.

---

## Related Documents

- [CASE_STANDARD.md](./CASE_STANDARD.md) — publish contract and score gates
- [WRITER_GUIDE.md](./WRITER_GUIDE.md) — how content is authored into this layout
- [BRAND_SYSTEM.md](./BRAND_SYSTEM.md) — color, mark, voice
- [FORESIGHT_CONSTITUTION.md](./FORESIGHT_CONSTITUTION.md)
- [CHANGELOG.md](./CHANGELOG.md)

---

*Journal Guide — Delivery 001.*
