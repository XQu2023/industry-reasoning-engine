import { BRIEF_SURFACE_DATE, getValidationRecord } from "./catalog.js";
import { HORIZONS, addMonths, compareIso } from "./horizons.js";

/**
 * Build the Validation Layer view-model for a Decision Brief.
 * As-of date defaults to today (ISO); tests may pass a fixed date.
 */
export function buildValidationLayer(slug, { asOf = isoToday() } = {}) {
  const record = getValidationRecord(slug);
  if (!record) return null;

  const pvfByHorizon = new Map();
  for (const run of record.pvfRuns) {
    pvfByHorizon.set(run.horizon, run);
  }

  const timeline = [
    {
      date: record.t0,
      kind: "t0",
      label: "T0 research freeze",
      detail: `${record.sreId} locked`,
      status: "completed",
      horizon: null,
    },
    ...HORIZONS.map(({ code, months }) => {
      const date = addMonths(record.t0, months);
      const run = pvfByHorizon.get(code);
      if (run) {
        return {
          date: run.date,
          kind: "pvf",
          label: `PVF ${code} completed`,
          detail: `Prediction Accuracy ${run.predictionAccuracy}`,
          status: "completed",
          horizon: code,
          artifact: run.path,
        };
      }
      const elapsed = compareIso(date, asOf) <= 0;
      return {
        date,
        kind: "horizon",
        label: `${code} horizon`,
        detail: elapsed ? "Elapsed — validation not yet filed" : "Scheduled",
        status: elapsed ? "due" : "pending",
        horizon: code,
      };
    }),
    {
      date: BRIEF_SURFACE_DATE,
      kind: "brief",
      label: "Decision Brief 1.0 published",
      detail: `${record.productId} surface (T0 body unchanged)`,
      status: "completed",
      horizon: null,
    },
  ].sort((a, b) => compareIso(a.date, b.date) || kindRank(a.kind) - kindRank(b.kind));

  const latestPvf = latestRun(record.pvfRuns);
  const evidenceScore = latestPvf
    ? {
        status: "scored",
        predictionAccuracy: latestPvf.predictionAccuracy,
        horizon: latestPvf.horizon,
        validatedOn: latestPvf.date,
        researchConfidence: record.researchConfidence,
        artifact: latestPvf.path,
        dimensions: latestPvf.dimensions ?? [],
        statusLine: latestPvf.statusLine,
      }
    : {
        status: "awaiting",
        predictionAccuracy: null,
        horizon: nextDueHorizon(record.t0, asOf, pvfByHorizon),
        validatedOn: null,
        researchConfidence: record.researchConfidence,
        artifact: null,
        dimensions: [],
        statusLine: null,
      };

  const openCount = record.unknowns.filter((item) => item.status === "open").length;
  const partialCount = record.unknowns.filter((item) => item.status === "partial").length;
  const resolvedCount = record.unknowns.filter((item) => item.status === "resolved").length;

  const lineage = {
    primarySource: record.primarySource,
    research: { id: record.sreId, title: record.sreTitle, path: record.srePath, t0: record.t0 },
    brief: {
      id: record.productId,
      version: "1.0",
      published: BRIEF_SURFACE_DATE,
      bodyState: "T0-frozen",
    },
    validations: record.pvfRuns.map((run) => ({
      id: run.id,
      path: run.path,
      date: run.date,
      horizon: run.horizon,
      predictionAccuracy: run.predictionAccuracy,
    })),
    knowledge: record.knowledgeUnits,
  };

  const versions = [
    {
      version: "R0",
      date: record.t0,
      event: "Strategic research frozen",
      note: `${record.sreId} at T0. Immutable research input.`,
      artifact: record.srePath,
    },
    {
      version: "1.0",
      date: BRIEF_SURFACE_DATE,
      event: "Decision Brief published",
      note: "Derived surface. Facts are not rewritten after publish.",
      artifact: record.productId,
    },
    ...record.pvfRuns.map((run, index) => ({
      version: `1.0+V${index + 1}`,
      date: run.date,
      event: `Validation appended (${run.horizon})`,
      note: `Prediction Accuracy ${run.predictionAccuracy}. Brief body remains 1.0.`,
      artifact: run.path,
    })),
  ].sort((a, b) => compareIso(a.date, b.date));

  return {
    productId: record.productId,
    slug,
    asOf,
    nextValidation: record.nextValidation,
    evidenceScore,
    timeline,
    lineage,
    unknowns: {
      items: record.unknowns,
      openCount,
      partialCount,
      resolvedCount,
      total: record.unknowns.length,
    },
    versions,
    layerRevision: 1 + record.pvfRuns.length,
  };
}

function latestRun(runs) {
  if (!runs.length) return null;
  return [...runs].sort((a, b) => compareIso(b.date, a.date))[0];
}

function nextDueHorizon(t0, asOf, pvfByHorizon) {
  for (const { code, months } of HORIZONS) {
    if (pvfByHorizon.has(code)) continue;
    const date = addMonths(t0, months);
    if (compareIso(date, asOf) <= 0) return code;
  }
  for (const { code } of HORIZONS) {
    if (!pvfByHorizon.has(code)) return code;
  }
  return null;
}

function kindRank(kind) {
  return { t0: 0, horizon: 1, pvf: 2, brief: 3 }[kind] ?? 9;
}

function isoToday() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
