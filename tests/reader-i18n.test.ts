import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
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
const briefsDir = join(readerRoot, "briefs");

describe("reader routing", () => {
  it("defaults English collection at / and maps /zh", () => {
    assert.deepEqual(parseRoute("/"), {
      locale: "en",
      type: "home",
      slug: null,
    });
    assert.deepEqual(parseRoute("/zh"), {
      locale: "zh",
      type: "home",
      slug: null,
    });
  });

  it("supports brief URLs for the founding collection", () => {
    assert.deepEqual(parseRoute("/briefs/db-001"), {
      locale: "en",
      type: "brief",
      slug: "db-001",
    });
    assert.deepEqual(parseRoute("/briefs/db-010"), {
      locale: "en",
      type: "brief",
      slug: "db-010",
    });
    assert.deepEqual(parseRoute("/zh/briefs/db-001"), {
      locale: "zh",
      type: "brief",
      slug: "db-001",
    });
    assert.deepEqual(parseRoute("/zh/briefs/db-010"), {
      locale: "zh",
      type: "brief",
      slug: "db-010",
    });
  });

  it("builds paths without prefix for English", () => {
    assert.equal(buildHomePath("en"), "/");
    assert.equal(buildHomePath("zh"), "/zh");
    assert.equal(buildBriefPath("en", "db-001"), "/briefs/db-001");
    assert.equal(buildBriefPath("zh", "db-005"), "/zh/briefs/db-005");
  });

  it("switches locale while preserving brief slug or home", () => {
    assert.equal(switchLocalePath("/briefs/db-001", "zh"), "/zh/briefs/db-001");
    assert.equal(switchLocalePath("/zh/briefs/db-010", "en"), "/briefs/db-010");
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
  it("ships homepage and collection chrome for Public Beta", () => {
    assert.equal(t("en").collectionTitle, "Founding Collection");
    assert.equal(t("zh").collectionTitle, "创始合集");
    assert.ok(t("en").homeHeadline.length > 0);
    assert.ok(t("zh").homeHeadline.length > 0);
    assert.equal(t("en").homePillars.length, 3);
    assert.equal(t("zh").homePillars.length, 3);
    assert.equal(UI.en.langEn, "EN");
    assert.equal(UI.zh.langZh, "中文");
  });

  it("ships Chinese unavailable notice without inviting mixed body", () => {
    assert.equal(
      t("zh").localeUnavailableBody,
      "中文版正在整理中，请切换至英文阅读完整内容。",
    );
    assert.equal(t("zh").switchToEnglish, "切换至英文");
    assert.equal(t("zh").cardPendingTitle, "中文版整理中");
    assert.equal(t("zh").briefNavLabel, "简报导航");
  });
});

describe("reader founding collection files", () => {
  it("ships authored en briefs for DB-001 through DB-010", () => {
    const files = readdirSync(briefsDir).filter((name) => name.endsWith(".en.md"));
    assert.equal(files.length, 10);
    for (let i = 1; i <= 10; i += 1) {
      const prefix = `DB-${String(i).padStart(3, "0")}-`;
      assert.ok(files.some((name) => name.startsWith(prefix)), `missing ${prefix}`);
    }
  });

  it("parses each English brief metadata for collection cards", () => {
    const files = readdirSync(briefsDir).filter((name) => name.endsWith(".en.md")).sort();
    for (const file of files) {
      const markdown = readFileSync(join(briefsDir, file), "utf8");
      const brief = parseBriefMarkdown(markdown);
      assert.ok(brief.title.length > 0, `${file} title`);
      assert.match(brief.meta.t0, /^\d{4}-\d{2}-\d{2}$/, `${file} t0`);
      assert.ok(brief.meta.readingTime.length > 0, `${file} reading time`);
      assert.match(brief.meta.product, /DB-\d{3}/, `${file} product`);
    }
  });

  it("keeps authored Chinese body for DB-001 without runtime translation", () => {
    const en = readFileSync(join(briefsDir, "DB-001-NVIDIA-Blackwell.en.md"), "utf8");
    const zh = readFileSync(join(briefsDir, "DB-001-NVIDIA-Blackwell.zh.md"), "utf8");
    const enBrief = parseBriefMarkdown(en);
    const zhBrief = parseBriefMarkdown(zh);
    assert.match(enBrief.title, /NVIDIA/i);
    assert.match(zhBrief.title, /英伟达/);
    assert.equal(enBrief.meta.t0, zhBrief.meta.t0);
  });
});
