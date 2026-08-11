import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { t } from "../reader/src/i18n.js";
import {
  BRIEF_SURFACE_DATE,
  VALIDATION_CATALOG,
  addMonths,
  buildValidationLayer,
  renderValidationLayer,
} from "../reader/src/validation/index.js";

describe("reader validation layer", () => {
  it("ships a validation record for every founding brief", () => {
    const slugs = Object.keys(VALIDATION_CATALOG).sort();
    assert.equal(slugs.length, 12);
    for (const slug of slugs) {
      const layer = buildValidationLayer(slug, { asOf: BRIEF_SURFACE_DATE });
      assert.equal(layer?.productId, VALIDATION_CATALOG[slug].productId);
      assert.ok((layer?.timeline.length ?? 0) >= 6);
      assert.ok((layer?.unknowns.total ?? 0) >= 1);
      assert.ok((layer?.versions.length ?? 0) >= 2);
      assert.ok(layer?.lineage.research.path.startsWith("reports/"));
    }
  });

  it("scores DB-002 from completed PVF-104 and keeps Unknowns tracked", () => {
    const layer = buildValidationLayer("db-002", { asOf: BRIEF_SURFACE_DATE });
    assert.equal(layer?.evidenceScore.status, "scored");
    assert.equal(layer?.evidenceScore.predictionAccuracy, 79);
    assert.equal(layer?.evidenceScore.horizon, "H60");
    assert.ok(layer?.timeline.some((item) => item.kind === "pvf" && item.status === "completed"));
    assert.ok((layer?.unknowns.partialCount ?? 0) >= 1);
    assert.ok((layer?.unknowns.openCount ?? 0) >= 1);
    assert.ok(layer?.versions.some((item) => item.version.startsWith("1.0+V")));
  });

  it("marks elapsed horizons as due when no PVF exists", () => {
    const layer = buildValidationLayer("db-001", { asOf: BRIEF_SURFACE_DATE });
    assert.equal(layer?.evidenceScore.status, "awaiting");
    assert.equal(layer?.evidenceScore.predictionAccuracy, null);
    const due = layer?.timeline.filter((item) => item.status === "due") ?? [];
    assert.ok(due.length >= 1);
    assert.equal(addMonths("2024-03-18", 12), "2025-03-18");
  });

  it("renders all five Validation Layer surfaces", () => {
    const layer = buildValidationLayer("db-002", { asOf: BRIEF_SURFACE_DATE });
    const html = renderValidationLayer(layer, t("en"));
    assert.match(html, /Ongoing validation/);
    assert.match(html, /Validation timeline/);
    assert.match(html, /How this brief was built/);
    assert.match(html, /To be confirmed/);
    assert.match(html, /Version history/);
    assert.match(html, /Evidence score/);
    assert.match(html, /Prediction accuracy/);
    assert.match(html, />79</);
    assert.match(html, /SRE-104/);
    assert.match(html, /T0-frozen/);
    assert.equal(t("zh").validation.title, "持续验证");
  });
});
