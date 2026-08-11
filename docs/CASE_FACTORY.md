# FORESIGHT Case Factory

Every Decision Brief follows **exactly the same** production pipeline.

The Case Factory is the operating system for producing Briefs at scale.  
It does not redesign Journal, Engine, Writer, or Homepage — it sequences them.

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
12. [Hard Rules](#hard-rules)
13. [Related Documents](#related-documents)

---

## Pipeline Overview

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

| Step | Name | Primary output |
| ---: | --- | --- |
| 1 | Evidence Collection | Evidence Package |
| 2 | Evidence QA | Accepted Facts |
| 3 | Engine | Engine Report |
| 4 | Engine QA | QA-passed Engine Report |
| 5 | Writer | Journal Draft |
| 6 | Writer QA | QA-passed Draft |
| 7 | Journal | Magazine Experience |
| 8 | Journal QA | Ship-ready Brief |
| 9 | Deploy | Production + Knowledge Graph |
| 10 | Post Review | Rules · Patterns · Improvements |

No Brief skips a step.  
No step invents work that belongs upstream.

---

## Step 1 — Evidence Collection

### Input

| Source type | Examples |
| --- | --- |
| Industry report | Sector / supply-chain studies |
| Company filing | 10-K, 20-F, annual report, prospectus |
| Conference transcript | Earnings call, analyst day, keynote |
| News | Dated primary announcements (use carefully) |
| Academic paper | Peer-reviewed technical constraints |

### Output

**Evidence Package** — collected sources with attribution, dates, and scope notes.

### QA (collection gate)

| Check | Question |
| --- | --- |
| **Source reliability** | Is the source attributable and appropriate for founding claims? |
| **Time** | Is the observation dated? Is T0 clear? |
| **Completeness** | Are the material sides of the constraint / demand story present? |

Fail collection QA → do not advance. Gather more evidence or decline the case.

---

## Step 2 — Evidence QA

Strip the package down to what the Engine may use.

### Remove

- Opinion  
- Forecast  
- Duplicate  
- Marketing language  

### Output

**Accepted Facts** — observable, attributable, non-duplicative facts suitable for Engine input.

Rules:

- Secondary commentary may later help validation; it must not invent the founding claim.
- If a statement cannot be grounded, it does not become an Accepted Fact.
- `Unknown` is preferred over forced completeness.

---

## Step 3 — Engine

Run the Case Factory Engine modules on Accepted Facts.

### Module flow

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
| **Facts** | Lock the Accepted Facts set |
| **Change** | What structurally changed |
| **Signal** | Leading / earliest structural signal |
| **Value Driver** | What forces value to move |
| **Constraint** | The hard bottleneck (supply, qualification, physics, capital, time) |
| **Value Migration** | Where value is moving along the chain |
| **Market Pricing** | What may already be priced vs still opaque (no tips) |
| **World Model** | Reusable principle for later Briefs |

### Output

**Engine Report** — structured reasoning artifact for Writer derivation.

Implementation detail and frozen stage mapping: [ENGINE_GUIDE.md](./ENGINE_GUIDE.md).

---

## Step 4 — Engine QA

Gate the Engine Report before any writing begins.

### Check

| Check | Fail if… |
| --- | --- |
| **Missing reasoning** | A required module is empty or hand-waved |
| **Unsupported conclusion** | Claim exceeds Accepted Facts |
| **Logical jumps** | Causal chain skips a necessary link |
| **Candidate Rule** | Repeated defect suggests a new rule should be opened |
| **Bug** | Hallucination, bleed, or known failure mode reappears |
| **Pattern** | A reusable pattern is implied but not named / falsifiable |

### Output

QA-passed Engine Report — or return to Step 3 / Step 2.

Open Candidate Rules, Bugs, and Patterns per [ENGINE_GUIDE.md](./ENGINE_GUIDE.md).

---

## Step 5 — Writer

Generate the FORESIGHT Brief from the QA-passed Engine Report.

### Structure (frozen)

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

**Journal Draft** — content ready for Journal components (no new research).

Full editorial rules: [WRITER_GUIDE.md](./WRITER_GUIDE.md).

---

## Step 6 — Writer QA

### Check

| Check | Standard |
| --- | --- |
| **Voice** | FORESIGHT calm / precise / independent |
| **Length** | Tight; no research-report dump |
| **Story** | Short paragraphs; magazine rhythm |
| **Diagram** | Present; simple nodes and arrows |
| **Key Insight** | One memorable structural sentence |
| **World Model** | One reusable principle + apply-to domains |
| **Readability** | One screen, one idea; Analysis only where density belongs |

### Output

QA-passed Journal Draft — or return to Step 5.

Writer Score rubric: [WRITER_GUIDE.md](./WRITER_GUIDE.md#writer-score).

---

## Step 7 — Journal

Render the draft through shared Journal components.

### Output

**Magazine Experience** — premium digital investment journal reading surface.

Layout order and components: [JOURNAL_GUIDE.md](./JOURNAL_GUIDE.md).  
Brand constraints: [BRAND_SYSTEM.md](./BRAND_SYSTEM.md).

Do not invent a one-off layout for a single Brief.

---

## Step 8 — Journal QA

### Check

| Check | Standard |
| --- | --- |
| **Hero** | Logo, quote, title, summary, metadata |
| **Diagram** | Mandatory; ≥ 2 nodes |
| **Spacing** | One screen, one idea; large whitespace |
| **Typography** | Only the five Journal sizes |
| **Reading Rhythm** | Question/Story before Analysis; Key Insight isolated |
| **Shareability** | Quote + Key Insight + World Model travel cleanly |

### Output

Ship-ready Brief — or return to Step 7 / Step 5.

Build gate: Journal QA fails the build if required surfaces are missing  
([JOURNAL_GUIDE.md](./JOURNAL_GUIDE.md#journal-qa)).

---

## Step 9 — Deploy

Publish into the FORESIGHT knowledge surface.

### Deploy checklist

| Item | Purpose |
| --- | --- |
| **Knowledge Graph** | Link concepts, companies, technologies, related Briefs |
| **Validation** | Register theses / horizons for later PVF |
| **Related Cases** | Wire Continue Thinking / graph neighbors |
| **Index** | Collection card + locale routing |
| **Production** | Ship to the public reader |

### Output

Live Brief in Production + updated Knowledge Library entry points.

---

## Step 10 — Post Review

After publish, compound the system.

### Collect

| Input | Becomes |
| --- | --- |
| **Feedback** | Clarity / trust signals for next Briefs |
| **New Rule** | Candidate → Accepted Rule (Engine) |
| **New Pattern** | Pattern Library entry |
| **New World Model** | Reusable principle for later cases |
| **Engine Improvement** | Prompt / module / QA fix under governance |

Post Review feeds the Knowledge Library.  
It must not silently rewrite the published Brief’s evidence.

---

## Hard Rules

1. **Same pipeline for every Brief** — no VIP shortcuts.  
2. **Evidence before Engine** — no reasoning on marketing copy.  
3. **Engine before Writer** — no narrative-first Briefs.  
4. **Writer before Journal chrome polish** — content QA precedes visual QA.  
5. **Journal QA before Deploy** — missing Diagram / Hero / World Model is a ship blocker.  
6. **Post Review compounds assets** — rules, patterns, world models, not vanity edits.  
7. **Unknown remains Unknown** across all ten steps.  
8. **No investment advice** at any step.

---

## Related Documents

- [FORESIGHT_CONSTITUTION.md](./FORESIGHT_CONSTITUTION.md)
- [ENGINE_GUIDE.md](./ENGINE_GUIDE.md)
- [WRITER_GUIDE.md](./WRITER_GUIDE.md)
- [JOURNAL_GUIDE.md](./JOURNAL_GUIDE.md)
- [BRAND_SYSTEM.md](./BRAND_SYSTEM.md)
- [ROADMAP.md](./ROADMAP.md)
- [CHANGELOG.md](./CHANGELOG.md)
- [README.md](./README.md)

---

*Case Factory — Production pipeline contract.*
