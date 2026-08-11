# Engine Guide

Operating guide for the FORESIGHT **Industry Reasoning Engine**.

Implementation lives under `src/`.  
This document is the permanent contract for how the Engine is understood, extended, and validated.

---

## Table of Contents

1. [Purpose](#purpose)
2. [12 Modules](#12-modules)
3. [Rule Library](#rule-library)
4. [Candidate Rule](#candidate-rule)
5. [Pattern Library](#pattern-library)
6. [Bug Database](#bug-database)
7. [Validation Workflow](#validation-workflow)
8. [Engine QA](#engine-qa)
9. [Related Documents](#related-documents)

---

## Purpose

The Engine converts a frozen T0 input into a structured **GoldCase** reasoning result.

Core model:

```text
World Change → Customer Decision Change → Value Reallocation
```

Hard constraints:

- Facts stay separate from reasoning.
- The Engine never invents facts.
- `Unknown` is a valid, preferred output when evidence is insufficient.
- No stock tips, buy/sell advice, or price targets.
- Domain framing is detected from T0 facts; it never adds facts.

---

## 12 Modules

The Engine is organized as twelve modules.  
Modules 1–10 are the frozen pipeline stages (`STAGE_ORDER` in `src/reasoning-engine.ts`).  
Modules 11–12 are governance modules that wrap every run.

| # | Module | Role |
| ---: | --- | --- |
| 1 | **Fact Extraction** | Extract observable T0 facts only |
| 2 | **Customer Problem** | State the customer / decision problem implied by facts |
| 3 | **Leading Signal** | Identify the earliest structural signal of change |
| 4 | **Change** | Describe what structurally changed |
| 5 | **Reasoning** | Causal chain from signal → change (no new facts) |
| 6 | **Value Reallocation** | Where value may migrate; keep creation / migration / capture distinct |
| 7 | **Winner** | Who may structurally benefit — labeled and conservative |
| 8 | **Evidence** | Bind claims to attributable evidence items |
| 9 | **Verification** | What would later evidence need to show |
| 10 | **Market Blind Spot** | What the market narrative may miss; Unknown allowed |
| 11 | **Domain Binding** | Detect industry domain from T0 facts; inject framing only (`src/domain-binding.ts`) |
| 12 | **GoldCase Validation** | Structural gate before any result is accepted (`src/validate-gold-case.ts`) |

### Pipeline order (frozen)

```text
factExtraction
  → customerProblem
  → leadingSignal
  → change
  → reasoning
  → valueReallocation
  → winner
  → evidence
  → verification
  → marketBlindSpot
```

Stage prompts are frozen in `src/prompts.ts`.  
Do not reorder stages without a constitution-level governance trigger.

### Allowed domains (Module 11)

Semiconductor · Cloud Infrastructure · Enterprise Software · Consumer Electronics · Manufacturing · Biotechnology · FinTech · Telecommunications · AI Computing · General Technology · Unknown

Low confidence → **General Technology**.

---

## Rule Library

The Rule Library is the set of **accepted, frozen rules** that every Engine run must obey.

### Shared rules (active)

| Rule ID | Rule |
| --- | --- |
| R-01 | Facts ≠ reasoning |
| R-02 | Never invent facts |
| R-03 | Return `Unknown` when unsupported |
| R-04 | No investment advice |
| R-05 | Domain framing from detected industry only |
| R-06 | Evidence items must have non-empty text |
| R-07 | Required GoldCase string fields must be non-empty |
| R-08 | Hindsight from post-T0 knowledge is a defect |
| R-09 | Hallucinated entities / numbers are a defect |
| R-10 | Validate GoldCase before accepting a run |

Source of truth for prompt wording: `src/prompts.ts` (`SHARED_RULES`).  
Source of truth for structural checks: `src/validate-gold-case.ts`.

### Rule status lifecycle

```text
Candidate → Accepted → Frozen → (Superseded)
```

Only **Accepted / Frozen** rules bind production runs.

---

## Candidate Rule

A **Candidate Rule** is a proposed Engine constraint that is not yet frozen.

### When to open a Candidate Rule

- The same failure appears in ≥2 real cases or IRB cases.
- PVF shows a repeated forecasting defect caused by method, not luck.
- Engine QA finds a reproducible hallucination / bleed / regression mode.

### Candidate Rule record (template)

| Field | Content |
| --- | --- |
| **ID** | `CR-xxx` |
| **Title** | Short name |
| **Symptom** | What goes wrong |
| **Proposed rule** | Precise constraint |
| **Evidence** | Case IDs / benchmark IDs |
| **Risk** | What the rule might over-constrain |
| **Status** | Proposed / Under test / Accepted / Rejected |
| **Owner** | Who evaluates |

### Promotion criteria

A Candidate Rule becomes an Accepted Rule only when:

1. It fixes the named defect without regressing IRA on the frozen benchmark set, and  
2. It does not force invention or erase legitimate Unknowns, and  
3. It is documented in this guide’s Rule Library.

---

## Pattern Library

The Pattern Library records **reusable structural patterns** the Engine and researchers recognize across cases.

Patterns are not facts. They are lenses. Every application must still be grounded in case-specific evidence.

### Current pattern families

| Family | Examples |
| --- | --- |
| **Bottleneck** | Demand rises faster than the hardest-to-expand supply node |
| **Platform lock-in** | Programming model / ecosystem becomes the scarce layer |
| **Rack-scale shift** | Value moves from component to system integration |
| **Memory wall** | Compute is gated by HBM / bandwidth, not FLOPs alone |
| **Optical upgrade** | Network speed upgrades pull scarce materials / modules |
| **API distribution** | Capability is packaged as developer surface + fee clarity |
| **Domain bleed (anti-pattern)** | Forcing one industry frame onto unrelated T0 facts |

Domain signal banks in `src/domain-binding.ts` are implementation of detection patterns — not investment conclusions.

### Pattern record (template)

| Field | Content |
| --- | --- |
| **ID** | `P-xxx` |
| **Name** | Short name |
| **Statement** | One-sentence principle |
| **Where seen** | Brief / SRE / IRB IDs |
| **Falsifiers** | What would invalidate the pattern in a case |
| **Status** | Observed / Recurring / Retired |

---

## Bug Database

The Bug Database is the permanent log of Engine failure modes.

### Severity

| Level | Meaning |
| --- | --- |
| **S0** | Hallucination / invented facts |
| **S1** | Domain bleed or systematic framing error |
| **S2** | Weak causal link / evidence gap (Unknown preferred) |
| **S3** | Style / verbosity / non-blocking inconsistency |

### Known historical bugs (examples)

| ID | Title | Status | Notes |
| --- | --- | --- | --- |
| BUG-001 | AI Domain Bleed | Fixed (V1.1) | Absolute “AI Computing Supply Chain” framing forced onto non-AI cases; replaced by conditional Domain Binding |
| BUG-002 | Evidence depth weakness | Open / monitored | Evidence sometimes restates T0 announcements instead of supporting each causal step |
| BUG-003 | Incomplete causal link on hard infra cases | Open / monitored | Closed with `Unknown` when unsupported |

Design notes: `docs/design/SPRINT-001-AI-Domain-Bleed.md`  
Release proof: `docs/releases/V1.1.md`

### Bug record (template)

| Field | Content |
| --- | --- |
| **ID** | `BUG-xxx` |
| **Title** | Short name |
| **Severity** | S0–S3 |
| **Repro** | Case IDs |
| **Root cause** | Method / prompt / executor |
| **Fix** | Change or “none — use Unknown” |
| **Status** | Open / Fixed / Accepted limitation |
| **Regression test** | IRB / unit test reference |

---

## Validation Workflow

Engine validation is layered. Later layers may not rewrite earlier frozen artifacts.

```text
1. Unit / stage tests
        ↓
2. GoldCase structural validation
        ↓
3. IRB benchmark scoring (IRA)
        ↓
4. Regression vs baseline
        ↓
5. (Product cycle) PVF on published theses
        ↓
6. SKB extraction when cycle completes
```

### Layer detail

| Layer | What it proves | Where |
| --- | --- | --- |
| Stage tests | Pipeline order, Unknown preservation, schema failures | `tests/reasoning-engine.test.ts`, `tests/openai-stage-executor.test.ts` |
| GoldCase gate | Required fields, evidence shape | `src/validate-gold-case.ts` |
| IRB benchmark | Reasoning quality under frozen rubric | `benchmark/` |
| Baseline compare | Improved / unchanged / regressed | `benchmark/run-benchmark.ts` |
| PVF | Real-world confirm / weaken / falsify | `validations/`, `docs/specs/PREDICTION_VALIDATION_FRAMEWORK.md` |

### IRA weights (summary)

Facts 20 · Customer Problem 20 · Leading Signal 15 · Reasoning 20 · Value Reallocation 15 · Evidence 10 → **100**

Full rubric: `benchmark/EVALUATION_STANDARD.md`.

### V1.1 reference gate (achieved)

| Gate | Result |
| --- | --- |
| Avg IRA | 97.75 |
| AI Domain Bleed | 0 |
| Hallucination | 0 |
| Regression | 0 |
| Benchmark | 20 / 20 PASS |

---

## Engine QA

Engine QA is the checklist that must pass before a method or prompt change ships.

### Pre-merge checklist

- [ ] No stage reorder without governance approval  
- [ ] Shared rules still forbid invention and advice  
- [ ] `Unknown` still preferred over unsupported certainty  
- [ ] Domain Binding does not alter facts  
- [ ] `npm test` passes  
- [ ] Affected IRB cases rescored; no unexplained regression  
- [ ] New failure mode logged in Bug Database  
- [ ] Accepted Rule / Pattern updates documented in this guide  
- [ ] Release note added under `docs/releases/` when freezing a version  

### Hard fail conditions

| Condition | Result |
| --- | --- |
| Invented fact | Fail (S0) |
| Domain bleed recurrence | Fail (S1) |
| Missing GoldCase field | Fail |
| Advice / price target language | Fail |
| Avg IRA collapse vs baseline without justification | Fail |

### Commands

```bash
npm test
npm run benchmark
```

---

## Related Documents

- [FORESIGHT_CONSTITUTION.md](./FORESIGHT_CONSTITUTION.md)
- [WRITER_GUIDE.md](./WRITER_GUIDE.md) — consumes Engine / SRE outputs; does not replace them
- [ROADMAP.md](./ROADMAP.md)
- [CHANGELOG.md](./CHANGELOG.md)
- Specs: [SRE_PRODUCT_SPEC.md](./specs/SRE_PRODUCT_SPEC.md), [SRE_GLOSSARY.md](./specs/SRE_GLOSSARY.md)
- Release: [V1.1.md](./releases/V1.1.md)

---

*Engine Guide — Delivery 001.*
