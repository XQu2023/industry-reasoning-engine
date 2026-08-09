import assert from "node:assert/strict";
import { describe, it } from "node:test";
import type { GoldCase } from "../src/types.ts";
import { validateGoldCase } from "../src/validate-gold-case.ts";

function validGoldCase(): GoldCase {
  return {
    customerProblem: "Customers need reliable AI compute capacity.",
    leadingSignal: "Lead times for advanced GPUs are extending.",
    change: "Buyers shift from spot purchases to long-term supply contracts.",
    reasoning:
      "Longer lead times force customers to secure capacity earlier, reallocating spend toward suppliers with locked inventory.",
    valueReallocation: "Value moves from spot brokers toward contracted suppliers.",
    winner: "Suppliers with secured long-term GPU allocation.",
    evidence: [{ text: "Reported GPU lead times increased across major buyers." }],
    verification: "Confirm contract share versus spot purchase share over the next two quarters.",
    marketBlindSpot: "Markets still price as if spot availability will normalize quickly.",
  };
}

describe("validateGoldCase", () => {
  it("valid GoldCase passes", () => {
    const result = validateGoldCase(validGoldCase());
    assert.equal(result.valid, true);
    assert.deepEqual(result.errors, []);
  });

  it("missing/undefined required field fails", () => {
    const { winner: _omit, ...rest } = validGoldCase();
    const result = validateGoldCase(rest as GoldCase);
    assert.equal(result.valid, false);
    assert.ok(result.errors.includes("winner is missing"));
  });

  it("empty customerProblem fails", () => {
    const goldCase = validGoldCase();
    goldCase.customerProblem = "   ";
    const result = validateGoldCase(goldCase);
    assert.equal(result.valid, false);
    assert.ok(result.errors.includes("customerProblem is empty"));
  });

  it("empty reasoning fails", () => {
    const goldCase = validGoldCase();
    goldCase.reasoning = "";
    const result = validateGoldCase(goldCase);
    assert.equal(result.valid, false);
    assert.ok(result.errors.includes("reasoning is empty"));
  });

  it("empty evidence array fails", () => {
    const goldCase = validGoldCase();
    goldCase.evidence = [];
    const result = validateGoldCase(goldCase);
    assert.equal(result.valid, false);
    assert.ok(result.errors.includes("evidence is empty"));
  });

  it("evidence item with empty text fails", () => {
    const goldCase = validGoldCase();
    goldCase.evidence = [{ text: "  " }];
    const result = validateGoldCase(goldCase);
    assert.equal(result.valid, false);
    assert.ok(result.errors.includes("evidence[0].text is empty"));
  });

  it('marketBlindSpot = "Unknown" is allowed', () => {
    const goldCase = validGoldCase();
    goldCase.marketBlindSpot = "Unknown";
    const result = validateGoldCase(goldCase);
    assert.equal(result.valid, true);
    assert.deepEqual(result.errors, []);
  });

  it('verification = "Unknown" is allowed', () => {
    const goldCase = validGoldCase();
    goldCase.verification = "Unknown";
    const result = validateGoldCase(goldCase);
    assert.equal(result.valid, true);
    assert.deepEqual(result.errors, []);
  });
});
