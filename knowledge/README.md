# Strategic Knowledge Base — folder structure

This directory stores Strategic Knowledge Base (SKB) units per `docs/specs/STRATEGIC_KNOWLEDGE_BASE.md`.

Do not store SRE reports or PVF validations here. Those remain in `reports/` and `validations/`. This tree holds extracted knowledge units only.

---

## Layout

```text
knowledge/
├── README.md                 # This file — structure only
├── index.md                  # Optional catalog of all KU ids (append-only)
├── _meta/
│   └── SCHEMA.md             # Optional field checklist mirroring the SKB spec
├── level-a/                  # Multi-case validated (Level A)
│   ├── value-capture/
│   ├── value-migration/
│   ├── bottlenecks/
│   ├── scarcity/
│   ├── business-models/
│   ├── platform-strategies/
│   ├── ecosystem-effects/
│   └── organizational-strategy/
├── level-b/                  # Single completed PVF (Level B)
│   ├── value-capture/
│   ├── value-migration/
│   ├── bottlenecks/
│   ├── scarcity/
│   ├── business-models/
│   ├── platform-strategies/
│   ├── ecosystem-effects/
│   └── organizational-strategy/
├── level-c/                  # Working hypotheses (Level C)
│   ├── value-capture/
│   ├── value-migration/
│   ├── bottlenecks/
│   ├── scarcity/
│   ├── business-models/
│   ├── platform-strategies/
│   ├── ecosystem-effects/
│   └── organizational-strategy/
└── superseded/               # Append-only archive of superseded units
    └── ...                   # Same category subfolders optional; preserve ku_id in filename
```

---

## Naming

Knowledge unit files:

```text
KU-<nnn>-<short-slug>.md
```

Example: `KU-001-cuda-programming-model-tier1.md`

On promotion (C→B or B→A), either:

- move a copy into the higher level folder and leave the prior file marked `status: superseded` in `superseded/`, or
- append a supersession stub in place and store the active unit at the new level  

Per SKB v1.0, nothing is deleted.

---

## What belongs where

| Path | Contents |
| --- | --- |
| `level-c/<category>/` | Hypotheses not yet backed by a completed PVF |
| `level-b/<category>/` | Claims validated by exactly one completed PVF case (so far) |
| `level-a/<category>/` | Claims validated across multiple independent PVF cases |
| `superseded/` | Units no longer `active`; retained for audit |
| `_meta/` | Schema notes only — not knowledge claims |
| `index.md` | Id → path → level → category map |

Category folder names map 1:1 to SKB §4 primary categories.
