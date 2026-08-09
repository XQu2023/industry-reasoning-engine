# SPRINT-001 — AI Domain Bleed

Status: design only (no implementation)  
Scope: eliminate forced AI-computing framing on non-AI IRB cases  
Baseline: Round 2 Validation on IRB-001…020 (Average IRA **95.5**)

---

## 1. Problem

### Definition

**AI Domain Bleed** is when the engine explains a case whose T0 subject is *not* AI computing by forcing concepts, vocabulary, or value conclusions into the **AI Computing Supply Chain** frame.

It is **not**:

- legitimate AI/GPU/HBM/NVLink reasoning on cases that are themselves AI-compute T0 (e.g. IRB-002 H200, IRB-003 GB200, IRB-004 NVLink, IRB-005 CUDA, IRB-012 Transformer);
- using the word “AI” when the T0 source itself uses it;
- a generic supply-chain metaphor that stays inside the case’s actual industry.

It **is**:

- injecting “AI computing supply chain”, “AI computing infrastructure”, “AI-computing-adjacent”, or similar domain labels into outputs for App Store, Stadia, Kubernetes (orchestration as product), Cloudflare, Apple Watch, Snowflake, etc.;
- treating non-AI industries as if their primary blind spot / verification surface / winner set must be expressed as an AI-compute supply-chain question;
- using `Unknown` about “AI computing…” as a ritual closing when the case never belonged in that domain.

### Benchmark observations (Round 2 Validation only)

Failure-pattern tally from evaluation:

| Pattern | Count | Cases |
| --- | ---: | --- |
| AI Computing domain framing bleed on non-AI / tangential cases | **5** | IRB-001, IRB-008, IRB-011, IRB-016, IRB-018 |

Examples from generated GoldCases (non-AI or only-tangentially-AI T0):

| Case | Field | Observed bleed |
| --- | --- | --- |
| **IRB-001** App Store | `reasoning` / `verification` / `marketBlindSpot` | “…more specific reallocation across the **AI computing supply chain** is Unknown”; verification/blind spot closed the same way |
| **IRB-008** Stadia | `reasoning` | “Specific winners within the **AI computing supply chain** are Unknown” (cloud gaming T0) |
| **IRB-011** Kubernetes | `marketBlindSpot` | “underestimating orchestration software as a strategic layer in **AI computing infrastructure**” (2014 container manager announce) |
| **IRB-016** Cloudflare | `verification` | “…For the **AI computing supply chain** specifically: Unknown” |
| **IRB-018** Apple Watch | `marketBlindSpot` | “shift **AI-computing-adjacent** supply-chain demand…” (wearable T0) |

Related-but-distinct observation (not counted as the bleed pattern itself, but amplified by the same domain rule):

- Additional non-AI cases also appended AI-domain disclaimers in later stages (e.g. IRB-015 Lambda, IRB-019 Snowflake `marketBlindSpot` mentioning “downstream AI-computing supply-chain effects”).

Bleed did **not** prevent high IRA on some of these cases (e.g. IRB-001 / IRB-018 scored 100). The defect is **fidelity / industry correctness**, not necessarily raw IRA. It still pollutes blind-spot and verification quality and will worsen as the benchmark diversifies beyond AI compute.

---

## 2. Root Cause

### Prompt causes

1. **Hard domain lock in every stage**  
   `SHARED_RULES` begins with:  
   `"Domain: AI Computing Supply Chain only."`  
   That string is prepended to **all** stage prompts (`factExtraction` … `marketBlindSpot`).

2. **Domain rule conflicts with case content**  
   IRB Phase 2 deliberately includes non-AI industries (App Store, Stadia, Gigafactory, Cloudflare, Watch, Snowflake, mRNA, etc.). The prompt still tells the model the only allowed domain is AI computing.

3. **Later stages are most exposed**  
   `marketBlindSpot`, `verification`, `winner`, and open-ended `reasoning` ask for implications. Under a forced domain, the model “satisfies” the rule by mapping everything to AI compute or by writing `Unknown` *about* AI compute.

4. **No stage-local escape hatch**  
   There is no instruction of the form: “If the T0 input is outside AI computing, reason inside the input’s actual industry; do not force AI-computing framing.”

### Reasoning causes

1. **Constraint satisfaction over industry fidelity**  
   The model treats “Domain: AI Computing Supply Chain only” as a hard filter and invents a mapping path (App Store → “AI computing supply chain Unknown”) rather than refusing the filter.

2. **Supply-chain template generalization**  
   The pipeline’s value-reallocation / winner / blind-spot stages encourage *supply-chain* language. Combined with the AI domain lock, “supply chain” collapses into “AI computing supply chain.”

3. **Unknown-as-compliance**  
   When the AI mapping is unsupported, outputs often append “AI computing … Unknown” instead of omitting the AI frame. That looks cautious but still **bleeds** the domain into the answer.

### Context causes

1. **Historical product scope**  
   V0.1 was built for AI Computing Supply Chain. Prompts still encode that product assumption.

2. **Benchmark scope expanded; prompt domain did not**  
   IRB-001…020 now spans consumer platforms, cloud infra, semiconductors, biotech, EVs, etc. Engine context (shared rules) still assumes the original single domain.

3. **No case-level domain metadata in stage inputs**  
   `BenchmarkCase` / `ReasoningInput` do not carry an industry/domain tag the stages could respect. The only domain signal the model receives is the global AI rule in prompts.

---

## 3. Design Goals

### Primary success criteria

| Metric | Baseline (R2 Validation) | Target |
| --- | ---: | ---: |
| AI Domain Bleed count (same evaluator definition) | **5** | **≤ 1** |
| Average IRA (IRB-001…020) | **95.5** | **≥ 95.5** (no reduction) |
| Cases below IRA 90 | 2 (IRB-003, IRB-007) | must not increase solely due to this fix |

### Qualitative success criteria

- Non-AI cases reason in their **own** industry language (mobile software distribution, cloud gaming, edge security, wearables, etc.).
- AI-native cases (H200, Blackwell, CUDA, Transformer, etc.) **retain** correct AI-compute framing.
- No new hindsight; no weakening of Value Reallocation uncertainty discipline.
- Bleed check is countable: string/phrase audit + human rubric note (same pattern definition as Round 2 Validation).

### Non-goals (this sprint)

- Fixing thin evidence, weak reasoning links, or CP-technical drift (separate sprints).
- Expanding schema / GoldCase fields.
- Changing scorer weights or evaluation standard.

---

## 4. Candidate Solutions

### Approach A — Narrow shared-rule edit (domain binding to input)

**Change:** Replace the absolute domain line with input-conditional domain discipline, e.g.:

- Reason only within the industry implied by the T0 input.
- Do not import AI Computing Supply Chain framing unless the T0 facts are about AI computing / accelerators / related stack.
- Keep all other `SHARED_RULES` unchanged.

**Advantages**

- Smallest surface area (one shared string; all stages inherit).
- Directly attacks the measured root cause.
- Preserves AI-case behavior when T0 is AI.

**Disadvantages**

- Model must classify industry from T0 (edge cases / dual-use tech).
- One phrasing mistake could over-suppress legitimate AI adjacency (e.g. Lambda as cloud compute).

**Complexity:** Low  

**Expected IRA impact:** Neutral to slight positive on blind-spot/verification clarity; low risk of IRA drop if AI cases unchanged.

---

### Approach B — Stage-selective domain rules

**Change:** Remove or soften domain lock on late stages most responsible for bleed (`marketBlindSpot`, `verification`, optionally `winner` / `reasoning`). Keep stricter domain language only on early factual stages—or the reverse: keep domain off facts, constrain only reasoning.

**Advantages**

- Targets where bleed was observed (blind spot / verification / reasoning tails).
- Leaves early factual extraction largely untouched.

**Disadvantages**

- Incomplete: bleed can still enter via `reasoning` / `winner` if those keep the old rule.
- Inconsistent stage contracts harder to reason about.
- Does not fix the conceptual conflict (benchmark ≠ single domain).

**Complexity:** Low–Medium  

**Expected IRA impact:** Likely reduces bleed count; IRA uncertain if reasoning quality shifts.

---

### Approach C — Case-level domain tag + prompt interpolation

**Change:** Add optional `domain` (or `industry`) on `BenchmarkCase` / input context. Runner passes tag into prompts (“Domain for this case: <tag>”). Engine stays generic; cases declare `ai-computing` | `consumer-devices` | `biotech` | etc.

**Advantages**

- Explicit, testable, no model guessing.
- Scales cleanly as IRB diversifies.
- Allows AI-only product mode later via default tag.

**Disadvantages**

- Touches types + case files + prompt assembly (broader than “prompt-only”).
- Mis-tagged cases become a new fidelity failure mode.
- More than the minimum needed to clear ≤1 bleed on current suite.

**Complexity:** Medium  

**Expected IRA impact:** Neutral if tags correct; high confidence bleed reduction.

---

### Approach D — Post-hoc domain filter (reject/rewrite bleed)

**Change:** After generation, detect AI-domain phrases on non-AI cases and strip/rewrite or fail the stage.

**Advantages**

- No prompt risk to AI cases.
- Measurable lint rule.

**Disadvantages**

- Treats symptom; model still “thinks” in AI frame mid-chain.
- Rewrite logic is fragile / can damage valid text.
- Couples scorer/runner to heuristics; easy to game with synonyms.

**Complexity:** Medium–High (for safe rewrite); Low (for detect-only)  

**Expected IRA impact:** Unpredictable if rewrite mutates GoldCase quality; detect-only doesn’t fix outputs.

---

## 5. Chosen Solution

### Recommendation: **Approach A — Narrow shared-rule edit (domain binding to input)**

**Why this one**

1. **Matches the measured root cause:** bleed is driven by the literal shared rule `"Domain: AI Computing Supply Chain only."` on every stage.
2. **Minimum change for the sprint goal:** one shared-rule sentence (or short replacement), no schema/engine architecture, no case-file migration.
3. **Preserves AI-case strength:** when T0 *is* AI computing, the model may still use that frame; the rule becomes conditional on input, not a global jail.
4. **Highest chance of bleed 5 → ≤1 without IRA loss:** Round 2 already scores many non-AI cases at 90–100; removing forced AI framing mainly cleans `marketBlindSpot` / `verification` tails rather than gutting causal chains.
5. **Defers Approach C** until (if) multi-domain tagging is needed for productization; A unblocks the benchmark now.

**Explicitly not chosen now**

- **B:** incomplete and splits stage contracts without removing the root sentence everywhere it hurts.
- **C:** correct long-term architecture, oversized for Sprint 1’s “design then smallest fix” intent.
- **D:** does not fix reasoning; risk to IRA if destructive.

**Implementation boundary (for a later sprint — not this document’s execution)**

- Edit only the domain sentence inside `SHARED_RULES` in `src/prompts.ts`.
- Do **not** change ReasoningEngine, schema, scorer, or evaluation standard in Sprint 1 implementation.
- Do **not** weaken Value Reallocation uncertainty rules.

---

## 6. Validation Plan

### Freeze

- Same IRB-001…020 cases, same scorer, same evaluation standard.
- No other prompt edits in the same change set.

### Procedure

1. Regenerate all 20 GoldCases with the post-fix prompts (same runner path as Round 2 Validation).
2. Score with the frozen IRA rubric (same human/evaluator method as Round 2 Validation).
3. Re-count **AI Domain Bleed** with the same definition and case list method:
   - Flag a case if a non-AI / tangential T0 GoldCase asserts AI-computing supply-chain / infrastructure framing as the explanatory domain (especially in `reasoning`, `verification`, `marketBlindSpot`, `winner`).
4. Compare:

| Check | Pass condition |
| --- | --- |
| Bleed count | ≤ 1 (from 5) |
| Average IRA | ≥ 95.5 |
| AI-native cases (002–005, 012 at minimum) | no IRA regression > 5 points each; framing remains AI-appropriate |
| Non-AI bleed cases (001, 008, 011, 016, 018) | AI forced frame removed or reduced to ≤1 residual across suite |
| Below-90 set | no new members caused by this change |

### Bleed audit aid (non-scoring)

- Grep-style review for phrases: `AI computing supply chain`, `AI computing infrastructure`, `AI-computing-adjacent`, `AI Computing`.
- Manual confirm: hit is **false positive** if T0 is AI-native; **true bleed** if T0 is not.

### Stop conditions

- If bleed ≤1 but Average IRA drops below 95.5 → revise wording (still Approach A), do not jump to C/D in the same sprint without a new design note.
- If bleed remains ≥2 → escalate to Approach C (case domain tags) in a follow-on design, rather than stacking unrelated prompt changes.

---

## Appendix — Out of scope reminders

- No implementation in this sprint step.
- No prompt/engine/schema/scorer changes while this document is design-only.
- Other Round 2 Validation patterns (weak reasoning links, thin evidence, winner over-extension, technical CP) are **not** solved here.
