# FORESIGHT Brief Standard

Publish contract for every Decision Brief.

A Brief that fails this standard is **not published**.

---

## Table of Contents

1. [Purpose](#purpose)
2. [Required Structure](#required-structure)
3. [Length & Time Limits](#length--time-limits)
4. [Minimum Assets](#minimum-assets)
5. [Score Gates](#score-gates)
6. [Do Not Publish](#do-not-publish)
7. [QA Mapping](#qa-mapping)
8. [Related Documents](#related-documents)

---

## Purpose

Every published Brief must deliver the same FORESIGHT reading system:

- one structural question  
- one clear story  
- one diagram  
- one key insight  
- one reusable World Model  
- explicit falsifiers  
- a path to continue thinking  

This standard sits above Writer preference and below Constitution.  
Case Factory produces candidates; **this standard decides ship**.

---

## Required Structure

Every published Brief must contain **all ten** surfaces, in this order:

| # | Section | Role |
| ---: | --- | --- |
| 1 | **Hero** | Logo, quote, title, summary, metadata |
| 2 | **Question** | One curiosity-driving structural question |
| 3 | **Story** | Magazine-rhythm narrative |
| 4 | **Diagram** | Simple node / arrow structure |
| 5 | **Key Insight** | One memorable structural sentence |
| 6 | **Analysis** | Detailed reasoning (only here) |
| 7 | **World Model** | One reusable investment principle |
| 8 | **What Would Change My Mind** | Concrete falsifiers |
| 9 | **Continue Thinking** | Learning path to related Briefs |
| 10 | **Footer** | Fixed FORESIGHT brand close |

```text
Hero
  → Question
  → Story
  → Diagram
  → Key Insight
  → Analysis
  → World Model
  → What Would Change My Mind
  → Continue Thinking
  → Footer
```

Order is frozen.  
Missing any section → **Do Not Publish**.

Editorial rules: [WRITER_GUIDE.md](./WRITER_GUIDE.md)  
Layout rules: [JOURNAL_GUIDE.md](./JOURNAL_GUIDE.md)

---

## Length & Time Limits

| Constraint | Limit |
| --- | --- |
| **Maximum reading time** | **5 minutes** |
| **Maximum length** | **2200 Chinese characters** |

Notes:

- Reading time metadata on Hero must not exceed 5 minutes.
- Length is measured on the published Brief body (Hero through Continue Thinking). Footer brand lines are fixed and do not expand the budget.
- For English Briefs, keep equivalent density: target ≤ 5 minutes; do not ship essay-length research dumps.
- If the draft exceeds the limit, cut Analysis and Story first — never remove Diagram, Key Insight, World Model, or Change My Mind.

---

## Minimum Assets

| Asset | Minimum |
| --- | --- |
| **Diagrams** | **1** |
| **World Models** | **1** |

Also required by structure (non-negotiable):

- Exactly one primary Question  
- Exactly one Key Insight sentence  
- Non-empty Change My Mind list  
- Non-empty Continue Thinking path  

---

## Score Gates

All four gates must pass.

| Score | Minimum | Meaning |
| --- | ---: | --- |
| **Engine Score** | **≥ 95** | Reasoning fidelity (IRA / Engine QA) |
| **Writer Score** | **≥ 90** | Editorial quality vs Writer rubric |
| **Journal Score** | **≥ 90** | Layout, rhythm, type, diagram, shareability |
| **Overall** | **≥ 90** | Composite publish readiness |

### Scoring references

| Score | Defined in |
| --- | --- |
| Engine Score | [ENGINE_GUIDE.md](./ENGINE_GUIDE.md) (IRA / Engine QA) |
| Writer Score | [WRITER_GUIDE.md](./WRITER_GUIDE.md#writer-score) |
| Journal Score | Journal QA checklist in [JOURNAL_GUIDE.md](./JOURNAL_GUIDE.md#journal-qa), scored 0–100 |
| Overall | Minimum of the three scores, unless a stricter weighted method is later frozen in changelog |

Until a weighted Overall formula is frozen:

```text
Overall = min(Engine Score, Writer Score, Journal Score)
```

This keeps any weak layer from being hidden by a strong average.

---

## Do Not Publish

**Do Not Publish** if any of the following is true:

1. Any of the ten required sections is missing  
2. Reading time > 5 minutes  
3. Length > 2200 Chinese characters (or equivalent overlong English dump)  
4. Diagrams < 1  
5. World Models < 1  
6. Engine Score < 95  
7. Writer Score < 90  
8. Journal Score < 90  
9. Overall < 90  
10. Contains investment advice, invented facts, or upgrades Unknown without evidence  

Return the case to the appropriate Case Factory step:

| Failure | Return to |
| --- | --- |
| Facts / reasoning | Engine / Engine QA |
| Voice / length / insight | Writer / Writer QA |
| Layout / diagram / rhythm | Journal / Journal QA |
| Structure incomplete | Writer → Journal |

Pipeline: [CASE_FACTORY.md](./CASE_FACTORY.md).

---

## QA Mapping

| Gate | Case Factory step | Guide |
| --- | --- | --- |
| Structure + assets | Steps 5–8 | Writer + Journal |
| Engine Score ≥ 95 | Steps 3–4 | Engine |
| Writer Score ≥ 90 | Step 6 | Writer |
| Journal Score ≥ 90 | Step 8 | Journal |
| Deploy allowed | Step 9 | Only after this standard passes |

Journal build QA remains a hard technical fail for missing components.  
This Brief Standard adds length, time, and score gates on top.

---

## Related Documents

- [CASE_FACTORY.md](./CASE_FACTORY.md)
- [FORESIGHT_CONSTITUTION.md](./FORESIGHT_CONSTITUTION.md)
- [WRITER_GUIDE.md](./WRITER_GUIDE.md)
- [JOURNAL_GUIDE.md](./JOURNAL_GUIDE.md)
- [ENGINE_GUIDE.md](./ENGINE_GUIDE.md)
- [ROADMAP.md](./ROADMAP.md)
- [CHANGELOG.md](./CHANGELOG.md)
- [README.md](./README.md)

---

*Brief Standard — Publish contract.*
