# Changelog

All notable changes to the FORESIGHT project and its documentation are recorded here.

Format: dated entries, newest first.  
Documentation Delivery 001 establishes this file as the ongoing log.

---

## Table of Contents

1. [2026-08-11 — Case Factory pipeline](#2026-08-11--case-factory-pipeline)
2. [2026-08-11 — Documentation System V1](#2026-08-11--documentation-system-v1)
3. [Prior shipped context](#prior-shipped-context)
4. [How to record changes](#how-to-record-changes)

---

## 2026-08-11 — Case Factory pipeline

### Added

- [CASE_FACTORY.md](./CASE_FACTORY.md) — permanent ten-step production pipeline for every Brief  
  Evidence Collection → Evidence QA → Engine → Engine QA → Writer → Writer QA → Journal → Journal QA → Deploy → Post Review

### Changed

- [README.md](./README.md) — index + architecture link to Case Factory  
- [FORESIGHT_CONSTITUTION.md](./FORESIGHT_CONSTITUTION.md) — links Case Factory as production pipeline  

### Notes

- Documentation only. No Engine, Writer, Journal, or Homepage code modified.

---

## 2026-08-11 — Documentation System V1

### Added

FORESIGHT Documentation System (Delivery 001) under `docs/`:

| File | Purpose |
| --- | --- |
| [README.md](./README.md) | Mission, product overview, architecture, repo map |
| [FORESIGHT_CONSTITUTION.md](./FORESIGHT_CONSTITUTION.md) | Mission, North Star, four systems, principles, metrics |
| [ENGINE_GUIDE.md](./ENGINE_GUIDE.md) | 12 modules, rules, candidates, patterns, bugs, validation, Engine QA |
| [WRITER_GUIDE.md](./WRITER_GUIDE.md) | Voice, Journal writing structure, Writer QA & score |
| [JOURNAL_GUIDE.md](./JOURNAL_GUIDE.md) | Layout, rhythm, type, spacing, diagram/quote rules, Journal QA |
| [BRAND_SYSTEM.md](./BRAND_SYSTEM.md) | Circle mark, color tokens, motion, diagram & editorial language |
| [ROADMAP.md](./ROADMAP.md) | Phase 1 (100) · Phase 2 (300) · Phase 3 (1000) |
| [CHANGELOG.md](./CHANGELOG.md) | This log |

### Notes

- Specs under `docs/specs/`, releases under `docs/releases/`, and reviews under `docs/reviews/` remain in place and are linked from the new guides.
- This delivery is **documentation only**. No Engine, Writer, Journal, or Homepage code was modified.

---

## Prior shipped context

The following were already in the repository before Documentation System V1. They are summarized here for continuity; detailed history lives in git and release notes.

| Area | Status (as of Delivery 001) |
| --- | --- |
| Industry Reasoning Engine | V1.1 frozen stages + conditional Domain Binding (`docs/releases/V1.1.md`) |
| IRB benchmark | 20 source-locked cases; Avg IRA 97.75 on V1.1 validation run |
| Decision Briefs | Founding collection through DB-012 (locales vary by Brief) |
| FORESIGHT Journal V1 | Shipped; DB-012 on Journal layout with build-time Journal QA |
| Research OS lineage | `MISSION.md`, `OPERATING_SYSTEM.md` |
| Spec contracts | SRE / PVF / SKB / Brief standards under `docs/specs/` |

---

## How to record changes

For every meaningful change after this file exists, add a dated section:

```markdown
## YYYY-MM-DD — Short title

### Added
- …

### Changed
- …

### Fixed
- …

### Docs
- …
```

Rules:

1. Prefer user-visible and contract-level changes over noise.  
2. Link internal docs when a guide’s rules change.  
3. If product and documentation diverge, log the repair.  
4. Do not delete history; supersede with a newer entry.

---

*Changelog — Delivery 001.*
