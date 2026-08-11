import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { db012JournalZh } from "../reader/src/journal/content/db-012.ts";
import { listJournalBriefs } from "../reader/src/journal/registry.ts";
import { validateJournalBrief, validateJournalCatalog } from "../reader/src/journal/qa.ts";

describe("Journal QA", () => {
  it("requires a diagram with at least two nodes", () => {
    const broken = {
      ...db012JournalZh,
      diagram: { nodes: [] },
    };
    const missing = validateJournalBrief(broken);
    assert.ok(missing.includes("Diagram"));
  });

  it("passes the migrated DB-012 journal brief", () => {
    assert.deepEqual(validateJournalBrief(db012JournalZh), []);
  });

  it("fails the build catalog when any required section is missing", () => {
    const broken = {
      ...db012JournalZh,
      keyInsight: { sentence: "" },
      footer: { brand: "FORESIGHT", lines: ["Understand how value moves."] as unknown as [string, string] },
    };
    const failures = validateJournalCatalog([broken]);
    assert.equal(failures.length, 1);
    assert.ok(failures[0].missing.includes("Key Insight"));
    assert.ok(failures[0].missing.includes("Footer"));
  });

  it("registers every journal brief for production QA", () => {
    const briefs = listJournalBriefs();
    assert.ok(briefs.length >= 1);
    assert.deepEqual(validateJournalCatalog(briefs), []);
  });
});
