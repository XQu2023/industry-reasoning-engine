# FORESIGHT Documentation

**Single source of truth** for the FORESIGHT project.

This folder documents mission, systems, brand, and roadmap.  
It does **not** authorize product redesign. Product code lives outside these guides.

---

## Table of Contents

1. [Mission](#mission)
2. [Product Overview](#product-overview)
3. [Project Architecture](#project-architecture)
4. [Case Factory](#case-factory)
5. [Repository Structure](#repository-structure)
6. [Documentation Index](#documentation-index)
7. [Related Specs](#related-specs)

---

## Mission

FORESIGHT helps readers **understand how value moves** across industries — from primary evidence, not commentary.

Tagline:

- **EN:** Primary evidence. See where value flows.
- **ZH:** 第一手证据，预见价值流向。

Success is compounding validated judgment and reader trust — not volume of output.

See [FORESIGHT_CONSTITUTION.md](./FORESIGHT_CONSTITUTION.md).

---

## Product Overview

FORESIGHT is a public investment-journal research system with four core surfaces:

| System | Role |
| --- | --- |
| **Engine** | Disciplined reasoning pipeline from T0 facts to GoldCase outputs |
| **Writer** | Derives Decision Briefs / Journal content from completed research |
| **Journal** | Premium reading layout for every Brief |
| **Homepage** | Public collection and brand entry |

Core loop:

```text
Primary evidence (P0)
    → Engine / SRE research
    → Decision Brief (Writer)
    → Journal (Reader)
    → Validation (PVF)
    → Knowledge (SKB)
    → Next Brief
```

Public product units are **Decision Briefs** (`DB-xxx`).  
Parent research artifacts are **SRE** reports.  
Later reality tests are **PVF** validations.

Every Brief is produced through the same factory pipeline — see [CASE_FACTORY.md](./CASE_FACTORY.md).  
Every Brief must pass the publish contract — see [CASE_STANDARD.md](./CASE_STANDARD.md).

---

## Project Architecture

```text
┌─────────────────────────────────────────────────────────┐
│                     FORESIGHT                            │
├──────────────┬──────────────┬──────────────┬────────────┤
│   Engine     │   Writer     │   Journal    │  Homepage  │
│  (src/)      │  (Briefs)    │  (reader/    │  (reader/) │
│              │              │   journal/)  │            │
├──────────────┴──────────────┴──────────────┴────────────┤
│  Brand · Constitution · Docs (this folder)               │
└─────────────────────────────────────────────────────────┘
```

| Layer | Responsibility |
| --- | --- |
| Engine | Extract facts, reason under frozen stages, preserve Unknown |
| Writer | Structure narrative for Journal; never invent research |
| Journal | Fixed reading order; typography and spacing discipline |
| Homepage | Collection discovery; brand first impression |
| Brand | Circle mark, color, voice — see [BRAND_SYSTEM.md](./BRAND_SYSTEM.md) |

Guides:

- [CASE_FACTORY.md](./CASE_FACTORY.md)
- [CASE_STANDARD.md](./CASE_STANDARD.md)
- [ENGINE_GUIDE.md](./ENGINE_GUIDE.md)
- [WRITER_GUIDE.md](./WRITER_GUIDE.md)
- [JOURNAL_GUIDE.md](./JOURNAL_GUIDE.md)
- [BRAND_SYSTEM.md](./BRAND_SYSTEM.md)
- [ROADMAP.md](./ROADMAP.md)
- [CHANGELOG.md](./CHANGELOG.md)

---

## Case Factory

Production pipeline for every Brief (identical sequence):

```text
Evidence → Engine → Writer → Journal → Deploy → Knowledge Library
```

Full ten-step contract: [CASE_FACTORY.md](./CASE_FACTORY.md).

---

## Repository Structure

```text
industry-reasoning-engine/
├── docs/                 # FORESIGHT documentation (this system)
│   ├── README.md
│   ├── FORESIGHT_CONSTITUTION.md
│   ├── CASE_FACTORY.md
│   ├── CASE_STANDARD.md
│   ├── ENGINE_GUIDE.md
│   ├── WRITER_GUIDE.md
│   ├── JOURNAL_GUIDE.md
│   ├── BRAND_SYSTEM.md
│   ├── ROADMAP.md
│   ├── CHANGELOG.md
│   ├── specs/            # Research contracts (SRE, PVF, SKB, Brief)
│   ├── design/           # Design notes for shipped fixes
│   ├── reviews/          # Sprint reviews
│   ├── releases/         # Engine release notes
│   └── templates/        # Report templates
├── src/                  # Industry Reasoning Engine
├── tests/                # Engine, benchmark, reader, Journal QA
├── benchmark/            # IRB cases + evaluation standard
├── reports/              # SRE research reports
├── decision-briefs/      # Canonical Decision Brief markdown
├── reader/               # Public FORESIGHT SPA (Homepage + Journal)
├── validations/          # PVF artifacts
├── knowledge/            # Strategic Knowledge Base assets
├── MISSION.md            # Legacy Research OS constitution
└── OPERATING_SYSTEM.md   # Legacy Research OS operating cycles
```

---

## Documentation Index

| Document | Purpose |
| --- | --- |
| [FORESIGHT_CONSTITUTION.md](./FORESIGHT_CONSTITUTION.md) | Mission, North Star, systems, principles, metrics |
| [CASE_FACTORY.md](./CASE_FACTORY.md) | Ten-step production pipeline for every Brief |
| [CASE_STANDARD.md](./CASE_STANDARD.md) | Required sections, length/time limits, score gates |
| [ENGINE_GUIDE.md](./ENGINE_GUIDE.md) | Modules, rules, patterns, bugs, validation, Engine QA |
| [WRITER_GUIDE.md](./WRITER_GUIDE.md) | Voice, Journal writing structure, Writer QA & score |
| [JOURNAL_GUIDE.md](./JOURNAL_GUIDE.md) | Layout, rhythm, type, spacing, diagram/quote rules, Journal QA |
| [BRAND_SYSTEM.md](./BRAND_SYSTEM.md) | Logo, color, motion, diagram & editorial language |
| [ROADMAP.md](./ROADMAP.md) | 100 → 300 → 1000 cases and future milestones |
| [CHANGELOG.md](./CHANGELOG.md) | Dated record of documentation and product-facing changes |

---

## Related Specs

Detailed research contracts remain under [`docs/specs/`](./specs/):

- [SRE Product Spec](./specs/SRE_PRODUCT_SPEC.md)
- [Research Report Standard](./specs/RESEARCH_REPORT_STANDARD.md)
- [Strategic Research Brief Standard](./specs/STRATEGIC_RESEARCH_BRIEF_STANDARD.md)
- [Prediction Validation Framework](./specs/PREDICTION_VALIDATION_FRAMEWORK.md)
- [Strategic Knowledge Base](./specs/STRATEGIC_KNOWLEDGE_BASE.md)
- [Value Capture Methodology](./specs/VALUE_CAPTURE_METHODOLOGY.md)
- [SRE Glossary](./specs/SRE_GLOSSARY.md)

---

*FORESIGHT Documentation System — Delivery 001.*
