import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { describe, it } from "node:test";
import { fileURLToPath } from "node:url";

import { parseBriefMarkdown } from "../reader/src/parseBrief.js";
import { t, UI } from "../reader/src/i18n.js";
import {
  ALL_LOCALE_PREFIXES,
  buildBriefPath,
  buildHomePath,
  DEFAULT_LOCALE,
  FUTURE_LOCALES,
  parseRoute,
  switchLocalePath,
} from "../reader/src/router.js";

const readerRoot = join(dirname(fileURLToPath(import.meta.url)), "..", "reader");

describe("reader routing", () => {
  it("defaults English at / and maps /zh", () => {
    assert.deepEqual(parseRoute("/"), {
      locale: "en",
      type: "home",
      slug: "db-001",
    });
    assert.deepEqual(parseRoute("/zh"), {
      locale: "zh",
      type: "home",
      slug: "db-001",
    });
  });

  it("supports brief URLs in both languages", () => {
    assert.deepEqual(parseRoute("/briefs/db-001"), {
      locale: "en",
      type: "brief",
      slug: "db-001",
    });
    assert.deepEqual(parseRoute("/zh/briefs/db-001"), {
      locale: "zh",
      type: "brief",
      slug: "db-001",
    });
  });

  it("builds paths without prefix for English", () => {
    assert.equal(buildHomePath("en"), "/");
    assert.equal(buildHomePath("zh"), "/zh");
    assert.equal(buildBriefPath("en", "db-001"), "/briefs/db-001");
    assert.equal(buildBriefPath("zh", "db-001"), "/zh/briefs/db-001");
  });

  it("switches locale while preserving brief slug", () => {
    assert.equal(switchLocalePath("/briefs/db-001", "zh"), "/zh/briefs/db-001");
    assert.equal(switchLocalePath("/zh/briefs/db-001", "en"), "/briefs/db-001");
    assert.equal(switchLocalePath("/", "zh"), "/zh");
  });

  it("is future-ready for ja/de/fr prefixes", () => {
    assert.deepEqual(FUTURE_LOCALES, ["ja", "de", "fr"]);
    for (const locale of FUTURE_LOCALES) {
      assert.ok(ALL_LOCALE_PREFIXES.includes(locale));
      assert.equal(parseRoute(`/${locale}`).locale, locale);
      assert.equal(parseRoute(`/${locale}/briefs/db-001`).type, "brief");
    }
    assert.equal(DEFAULT_LOCALE, "en");
  });
});

describe("reader UI i18n", () => {
  it("ships English and Chinese chrome strings", () => {
    assert.equal(t("en").readerPromise.length, 4);
    assert.equal(t("zh").readerPromise.length, 4);
    assert.equal(UI.en.langEn, "EN");
    assert.equal(UI.zh.langZh, "中文");
    assert.equal(t("zh").sections.executiveSummary, "执行摘要");
    assert.equal(t("en").sections.executiveSummary, "Executive Summary");
  });
});

describe("reader brief locale files", () => {
  it("loads authored en/zh markdown without runtime translation", () => {
    const en = readFileSync(
      join(readerRoot, "briefs/DB-001-NVIDIA-Blackwell.en.md"),
      "utf8",
    );
    const zh = readFileSync(
      join(readerRoot, "briefs/DB-001-NVIDIA-Blackwell.zh.md"),
      "utf8",
    );

    const enBrief = parseBriefMarkdown(en);
    const zhBrief = parseBriefMarkdown(zh);

    assert.match(enBrief.title, /NVIDIA/i);
    assert.match(zhBrief.title, /英伟达/);
    assert.equal(enBrief.meta.t0, "2024-03-18");
    assert.equal(zhBrief.meta.t0, "2024-03-18");
    assert.equal(enBrief.whatChanged.items.length, zhBrief.whatChanged.items.length);
    assert.equal(enBrief.beneficiaries.rows.length, zhBrief.beneficiaries.rows.length);
    assert.equal(enBrief.realityCheck.wrong.length, zhBrief.realityCheck.wrong.length);
    assert.ok(enBrief.executiveSummary.body.includes("Unknown"));
    assert.ok(zhBrief.executiveSummary.body.includes("Unknown"));
    assert.equal(zhBrief.executiveSummary.label, "为什么值得关心？");
  });
});
