# FORESIGHT Case Factory

Every Brief follows **exactly the same** production pipeline.

```text
Evidence
  ↓
Engine
  ↓
Writer
  ↓
Journal
  ↓
Deploy
  ↓
Knowledge Library
```

This document is the production workflow contract.  
It does not redesign Engine, Writer, Journal, or Homepage — it sequences them.

Publish gates after this pipeline: [CASE_STANDARD.md](./CASE_STANDARD.md).

---

## Table of Contents

1. [Pipeline Overview](#pipeline-overview)
2. [Step 1 — Evidence Collection](#step-1--evidence-collection)
3. [Step 2 — Evidence QA](#step-2--evidence-qa)
4. [Step 3 — Engine](#step-3--engine)
5. [Step 4 — Engine QA](#step-4--engine-qa)
6. [Step 5 — Writer](#step-5--writer)
7. [Step 6 — Writer QA](#step-6--writer-qa)
8. [Step 7 — Journal](#step-7--journal)
9. [Step 8 — Journal QA](#step-8--journal-qa)
10. [Step 9 — Deploy](#step-9--deploy)
11. [Step 10 — Post Review](#step-10--post-review)
12. [Related Documents](#related-documents)

---

## Pipeline Overview

| Step | Name | Output |
| ---: | --- | --- |
| 1 | Evidence Collection | Evidence Package |
| 2 | Evidence QA | Accepted Facts |
| 3 | Engine | Engine Report |
| 4 | Engine QA | QA-passed Engine Report |
| 5 | Writer | Journal Draft |
| 6 | Writer QA | QA-passed Journal Draft |
| 7 | Journal | Magazine Experience |
| 8 | Journal QA | Ship-ready Brief |
| 9 | Deploy | Production + Knowledge Library |
| 10 | Post Review | Feedback · Rules · Patterns · Improvements |

No Brief skips a step.

---

## Step 1 — Evidence Collection

### Input

- Industry report  
- Company filing  
- Conference transcript  
- News  
- Academic paper  

### Output

**Evidence Package**

### QA

| Check | Meaning |
| --- | --- |
| **Source reliability** | Source is attributable and fit to found claims |
| **Time** | Observation is dated; T0 is clear |
| **Completeness** | Material sides of the case are present |

Fail → gather more evidence or decline the case.

---

## Step 2 — Evidence QA

### Remove

- Opinion  
- Forecast  
- Duplicate  
- Marketing language  

### Output

**Accepted Facts**

Only Accepted Facts may enter the Engine.

---

## Step 3 — Engine

Run **12 modules**.

Case Factory reasoning flow:

```text
Facts
  ↓
Change
  ↓
Signal
  ↓
Value Driver
  ↓
Constraint
  ↓
Value Migration
  ↓
Market Pricing
  ↓
World Model
```

| Module | Role |
| --- | --- |
| **Facts** | Lock Accepted Facts |
| **Change** | What structurally changed |
| **Signal** | Leading structural signal |
| **Value Driver** | What forces value to move |
| **Constraint** | Hard bottleneck |
| **Value Migration** | Where value is moving |
| **Market Pricing** | What may already be priced vs still opaque (no tips) |
| **World Model** | Reusable principle |

Full twelve-module inventory and frozen implementation mapping: [ENGINE_GUIDE.md](./ENGINE_GUIDE.md).

### Output

**Engine Report**

---

## Step 4 — Engine QA

### Check

- Missing reasoning  
- Unsupported conclusion  
- Logical jumps  
- Candidate Rule  
- Bug  
- Pattern  

### Output

QA-passed Engine Report — or return to Step 3 / Step 2.

See [ENGINE_GUIDE.md](./ENGINE_GUIDE.md) for Rule Library, Candidate Rule, Pattern Library, and Bug Database.

---

## Step 5 — Writer

Generate the **FORESIGHT Brief**.

### Structure

```text
Hero
Question
Story
Diagram
Key Insight
Analysis
World Model
What Would Change My Mind
Continue Thinking
```

### Output

**Journal Draft**

Editorial rules: [WRITER_GUIDE.md](./WRITER_GUIDE.md).

---

## Step 6 — Writer QA

### Check

- Voice  
- Length  
- Story  
- Diagram  
- Key Insight  
- World Model  
- Readability  

### Output

QA-passed Journal Draft — or return to Step 5.

Writer Score: [WRITER_GUIDE.md](./WRITER_GUIDE.md#writer-score).  
Publish thresholds: [CASE_STANDARD.md](./CASE_STANDARD.md).

---

## Step 7 — Journal

Render **Journal Components**.

### Output

**Magazine Experience**

Layout: [JOURNAL_GUIDE.md](./JOURNAL_GUIDE.md).  
Brand: [BRAND_SYSTEM.md](./BRAND_SYSTEM.md).

---

## Step 8 — Journal QA

### Check

- Hero  
- Diagram  
- Spacing  
- Typography  
- Reading Rhythm  
- Shareability  

### Output

Ship-ready Brief — or return to Step 7 / Step 5.

Technical build gate: [JOURNAL_GUIDE.md](./JOURNAL_GUIDE.md#journal-qa).  
Publish thresholds: [CASE_STANDARD.md](./CASE_STANDARD.md).

---

## Step 9 — Deploy

### Deploy

- Knowledge Graph  
- Validation  
- Related Cases  
- Index  
- Production  

### Output

Live Brief in Production and Knowledge Library entry points.

Deploy only if [CASE_STANDARD.md](./CASE_STANDARD.md) passes.

---

## Step 10 — Post Review

### Collect

- Feedback  
- New Rule  
- New Pattern  
- New World Model  
- Engine Improvement  

Post Review compounds the Knowledge Library.  
It must not silently rewrite published evidence.

---

## Related Documents

- [CASE_STANDARD.md](./CASE_STANDARD.md) — publish standard (structure, limits, scores)
- [FORESIGHT_CONSTITUTION.md](./FORESIGHT_CONSTITUTION.md)
- [ENGINE_GUIDE.md](./ENGINE_GUIDE.md)
- [WRITER_GUIDE.md](./WRITER_GUIDE.md)
- [JOURNAL_GUIDE.md](./JOURNAL_GUIDE.md)
- [BRAND_SYSTEM.md](./BRAND_SYSTEM.md)
- [ROADMAP.md](./ROADMAP.md)
- [CHANGELOG.md](./CHANGELOG.md)
- [README.md](./README.md)

---

*Case Factory — Delivery 002.*
