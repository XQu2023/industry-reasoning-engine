# FORESIGHT Case Standard

Publish standard for every FORESIGHT Brief.

A case that fails this standard is **not published**.

Production pipeline: [CASE_FACTORY.md](./CASE_FACTORY.md).

---

## Table of Contents

1. [Required Structure](#required-structure)
2. [Maximum Reading Time](#maximum-reading-time)
3. [Maximum Length](#maximum-length)
4. [Minimum Diagrams](#minimum-diagrams)
5. [Minimum World Models](#minimum-world-models)
6. [Score Gates](#score-gates)
7. [Do Not Publish](#do-not-publish)
8. [Related Documents](#related-documents)

---

## Required Structure

Every published Brief must contain:

| # | Section |
| ---: | --- |
| 1 | **Hero** |
| 2 | **Question** |
| 3 | **Story** |
| 4 | **Diagram** |
| 5 | **Key Insight** |
| 6 | **Analysis** |
| 7 | **World Model** |
| 8 | **What Would Change My Mind** |
| 9 | **Continue Thinking** |
| 10 | **Footer** |

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

Order is frozen.  
Missing any section → **Do Not Publish**.

Writer rules: [WRITER_GUIDE.md](./WRITER_GUIDE.md)  
Journal rules: [JOURNAL_GUIDE.md](./JOURNAL_GUIDE.md)

---

## Maximum Reading Time

**5 minutes**

Hero metadata must not claim a longer read.

---

## Maximum Length

**2200 Chinese characters**

Measured on the published Brief body (Hero through Continue Thinking).  
If over length, cut Story/Analysis density first — never remove Diagram, Key Insight, World Model, or What Would Change My Mind.

---

## Minimum Diagrams

**1**

Every Brief must include at least one diagram.

---

## Minimum World Models

**1**

Every Brief must include at least one World Model.

---

## Score Gates

| Score | Minimum |
| --- | ---: |
| **Engine Score** | **≥ 95** |
| **Writer Score** | **≥ 90** |
| **Journal Score** | **≥ 90** |
| **Overall** | **≥ 90** |

### Score references

| Score | Source |
| --- | --- |
| Engine Score | [ENGINE_GUIDE.md](./ENGINE_GUIDE.md) |
| Writer Score | [WRITER_GUIDE.md](./WRITER_GUIDE.md#writer-score) |
| Journal Score | [JOURNAL_GUIDE.md](./JOURNAL_GUIDE.md#journal-qa) |
| Overall | `min(Engine Score, Writer Score, Journal Score)` until a weighted formula is frozen |

---

## Do Not Publish

**Otherwise → Do Not Publish.**

Do not publish if any of the following is true:

1. Any required section is missing  
2. Reading time > 5 minutes  
3. Length > 2200 Chinese characters  
4. Diagrams < 1  
5. World Models < 1  
6. Engine Score < 95  
7. Writer Score < 90  
8. Journal Score < 90  
9. Overall < 90  

Return the case to the matching [Case Factory](./CASE_FACTORY.md) step.

| Failure | Return to |
| --- | --- |
| Reasoning / facts | Step 3–4 Engine / Engine QA |
| Voice / length / structure | Step 5–6 Writer / Writer QA |
| Layout / diagram / rhythm | Step 7–8 Journal / Journal QA |

---

## Related Documents

- [CASE_FACTORY.md](./CASE_FACTORY.md)
- [EDITORIAL_ENGINE.md](./EDITORIAL_ENGINE.md) — permanent editorial standard and Editorial Score
- [FORESIGHT_CONSTITUTION.md](./FORESIGHT_CONSTITUTION.md)
- [ENGINE_GUIDE.md](./ENGINE_GUIDE.md)
- [WRITER_GUIDE.md](./WRITER_GUIDE.md)
- [JOURNAL_GUIDE.md](./JOURNAL_GUIDE.md)
- [BRAND_SYSTEM.md](./BRAND_SYSTEM.md)
- [ROADMAP.md](./ROADMAP.md)
- [CHANGELOG.md](./CHANGELOG.md)
- [README.md](./README.md)

---

*Case Standard — Delivery 002.*
