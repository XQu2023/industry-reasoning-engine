# Industry Reasoning Engine

**Project:** Industry Reasoning Engine

**Current domain:** AI Computing Supply Chain

**Current milestone:** Reasoning Engine V0.1

## Core model

World Change → Customer Decision Change → Value Reallocation

## Gold Case structure

9 fixed fields:
customerProblem, leadingSignal, change, reasoning, valueReallocation, winner, evidence, verification, marketBlindSpot

## Current status

- deterministic pipeline complete
- OpenAI StageExecutor adapter added
- PDF parsing not added
- AI-001 regression test added

## OpenAI (manual)

1. Set `OPENAI_API_KEY` in the environment.
2. Run the manual AI-001 script:

```bash
npm run manual:ai-001
```

### Current limitations

- OpenAI only (no Claude/Gemini)
- No PDF parsing
- No database / auth / deployment
- Automated tests mock OpenAI; they do not call the real API

## Development principle

Validate first. Upgrade second.
