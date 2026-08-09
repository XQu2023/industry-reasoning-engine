# IRB Evaluation Standard

Frozen evaluator scoring rubric for Industry Reasoning Benchmark cases.

Use this standard with `benchmark/results/score-sheet-001-010.md`.  
Do not auto-score. Do not use AI as evaluator.

---

## Category rubrics

### Facts (20)

| Score | Meaning |
| ---: | --- |
| 20 | All facts correct, no unsupported claims |
| 15 | Minor omission |
| 10 | Important factual weakness |
| 0 | Fabricated or major errors |

### Customer Problem (20)

| Score | Meaning |
| ---: | --- |
| 20 | Identifies the true buying problem |
| 15 | Partially correct |
| 10 | Describes only technical problem |
| 0 | Wrong customer |

### Leading Signal (15)

| Score | Meaning |
| ---: | --- |
| 15 | Earliest observable signal |
| 10 | Later signal |
| 5 | Mixed with inference |
| 0 | Hindsight |

### Reasoning (20)

| Score | Meaning |
| ---: | --- |
| 20 | Complete causal chain |
| 15 | One weak link |
| 10 | Multiple missing links |
| 0 | Invalid logic |

### Value Reallocation (15)

| Score | Meaning |
| ---: | --- |
| 15 | Correct direction + proper uncertainty |
| 10 | Direction correct but overconfident |
| 5 | Weak linkage |
| 0 | Unsupported |

### Evidence (10)

| Score | Meaning |
| ---: | --- |
| 10 | Evidence supports every supported claim |
| 5 | Repeats facts only |
| 0 | Fabricated or unsupported evidence |

**Total IRA = sum of category scores (max 100).**

---

## Scoring principles

1. Evaluate only from T0 information.
2. Ignore later knowledge except Ground Truth verification.
3. Unknown is preferred over unsupported certainty.
4. Penalize hindsight.
5. Penalize hallucination more than omission.
