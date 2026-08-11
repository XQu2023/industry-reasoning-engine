import { getNeighbors } from "./briefs.js";
import {
  getBrandFooterLines,
  getBrandMark,
  getBrandSubtitle,
  renderBrandCircleHtml,
} from "./brand.js";
import {
  getBriefConclusion,
  getBriefTakeaways,
  getBriefWhy,
  getHomeContent,
} from "./homeContent.js";
import { localizeConfidence, t } from "./i18n.js";
import { renderKnowledgeNetwork } from "./knowledge/index.js";
import {
  buildBriefPath,
  buildHomePath,
  buildStartPath,
  buildThinkPath,
  DEFAULT_SLUG,
  SUPPORTED_LOCALES,
} from "./router.js";
import { getStartContent } from "./startContent.js";
import { getThinkContent } from "./thinkContent.js";
import { renderValidationLayer } from "./validation/renderLayer.js";

export function renderApp({
  locale,
  type,
  slug,
  brief,
  productId,
  cards,
  unavailable,
  fallbackLocale,
  validationLayer = null,
}) {
  const ui = t(locale);
  const htmlLang = locale === "zh" ? "zh-Hans" : "en";

  if (type === "home") {
    const home = getHomeContent(locale);
    return {
      htmlLang,
      title: home.documentTitle,
      description: home.documentDescription,
      body: `
        ${renderChrome({ locale, ui, productId: null, pathnameSlug: null, page: "home" })}
        <main id="main" class="home">
          ${renderHomeStory(home, locale)}
          <section id="collection" class="collection" aria-labelledby="collection-title">
            ${renderCollection(cards ?? [], locale, ui)}
          </section>
        </main>
        ${renderSiteFooter(locale, ui)}
      `,
    };
  }

  if (type === "start") {
    const start = getStartContent(locale);
    return {
      htmlLang,
      title: start.documentTitle,
      description: start.documentDescription,
      body: `
        ${renderChrome({ locale, ui, productId: null, pathnameSlug: null, page: "start" })}
        <main id="main" class="start">
          ${renderStartPage(start, locale)}
        </main>
        ${renderSiteFooter(locale, ui)}
      `,
    };
  }

  if (type === "think") {
    const think = getThinkContent(locale);
    return {
      htmlLang,
      title: think.documentTitle,
      description: think.documentDescription,
      body: `
        ${renderChrome({ locale, ui, productId: null, pathnameSlug: null, page: "think" })}
        <main id="main" class="start think">
          ${renderThinkPage(think, locale)}
        </main>
        ${renderSiteFooter(locale, ui)}
      `,
    };
  }

  if (type === "locale-unavailable") {
    const id = productId ?? (slug ? slug.toUpperCase() : "");
    const targetLocale = fallbackLocale || "en";
    const targetHref = buildBriefPath(targetLocale, slug);
    const switchLabel = targetLocale === "zh" ? ui.langZh : ui.switchToEnglish;
    const body =
      locale === "zh" ? ui.localeUnavailableBody : ui.localeUnavailableBodyGeneric;
    return {
      htmlLang,
      title: `${ui.localeUnavailableTitle} — ${id}`,
      description: body,
      body: `
        ${renderChrome({ locale, ui, productId: id, pathnameSlug: slug, page: "brief" })}
        <main id="main" class="page-main">
          ${renderBriefNav(locale, slug, ui)}
          <section class="locale-notice" aria-labelledby="locale-notice-title">
            <p class="locale-notice__eyebrow">${escapeHtml(ui.productLabel)}</p>
            <h1 id="locale-notice-title" class="locale-notice__title">${escapeHtml(ui.localeUnavailableTitle)}</h1>
            <p class="locale-notice__body">${escapeHtml(body)}</p>
            <p class="locale-notice__id">${escapeHtml(id)}</p>
            <a class="btn btn--primary" href="${escapeAttr(targetHref)}" data-locale="${escapeAttr(targetLocale)}">${escapeHtml(switchLabel)}</a>
          </section>
          ${renderBriefNav(locale, slug, ui)}
        </main>
        ${renderSiteFooter(locale, ui)}
      `,
    };
  }

  if (type === "notfound" || !brief) {
    return {
      htmlLang,
      title: ui.notFound,
      description: ui.notFound,
      body: `
        ${renderChrome({ locale, ui, productId: null, pathnameSlug: slug, page: "brief" })}
        <main id="main" class="page-main">
          <p class="not-found">${escapeHtml(ui.notFound)}</p>
          <p class="brief-nav__back-wrap">
            <a class="brief-nav__link" href="${escapeAttr(buildHomePath(locale))}">${escapeHtml(ui.backToCollection)}</a>
          </p>
        </main>
        ${renderSiteFooter(locale, ui)}
      `,
    };
  }

  const data = brief;
  const id = productId ?? extractProductId(data.meta.product) ?? "DB-001";
  const title = `${data.title} — ${ui.productLabel} ${id}`;
  const description = data.thesis || data.title;
  const articleBody =
    data.format === "v4"
      ? `
          ${renderBriefNav(locale, slug, ui)}
          ${renderV4Hero(data, ui, locale)}
          ${renderV4Sections(data)}
          ${renderValidationLayer(validationLayer, ui)}
          ${renderKnowledgeNetwork(slug, locale)}
          ${renderBriefNav(locale, slug, ui)}
        `
      : `
          ${renderBriefNav(locale, slug, ui)}
          ${renderHero(data, ui, locale, slug)}
          ${renderExecutive(data, ui)}
          ${renderValue(data, ui)}
          ${renderChanged(data, ui)}
          ${renderMatters(data, ui)}
          ${renderBeneficiaries(data, ui, locale)}
          ${renderReality(data, ui)}
          ${renderValidationLayer(validationLayer, ui)}
          ${renderKnowledgeNetwork(slug, locale)}
          ${renderBottom(data, ui)}
          ${renderSources(data, ui)}
          ${renderBriefNav(locale, slug, ui)}
        `;

  return {
    htmlLang,
    title,
    description,
    body: `
      ${renderChrome({ locale, ui, productId: id, pathnameSlug: slug, page: "brief" })}
      <main id="main">
        <article class="brief" itemscope itemtype="https://schema.org/Article">
          ${articleBody}
        </article>
      </main>
      ${renderSiteFooter(locale, ui)}
    `,
  };
}

function renderV4Hero(data, ui, locale) {
  const dateLabel = formatPublishedDate(data.meta.t0, locale);
  const source = data.meta.source || "—";
  return `
    <header class="hero">
      <p class="hero__eyebrow" itemprop="articleSection">${escapeHtml(ui.productLabel)}</p>
      <h1 class="hero__headline" itemprop="headline">${escapeHtml(data.title)}</h1>
      <aside class="reader-promise" aria-label="${escapeAttr(ui.readerPromiseTitle)}">
        <p class="reader-promise__title">${escapeHtml(ui.readerPromiseTitle)}</p>
        <ul class="reader-promise__list">
          ${ui.readerPromise
            .map(
              (item) => `
            <li>
              <span class="reader-promise__check" aria-hidden="true">✓</span>
              ${escapeHtml(item)}
            </li>`,
            )
            .join("")}
        </ul>
      </aside>
      <dl class="hero__facts">
        <div>
          <dt>${escapeHtml(ui.readTime)}</dt>
          <dd>${escapeHtml(localizeReadingTimeDisplay(data.meta.readingTime, locale, ui))}</dd>
        </div>
        ${
          data.meta.t0
            ? `<div>
          <dt>${escapeHtml(ui.publishedDate)}</dt>
          <dd>
            <time datetime="${escapeAttr(data.meta.t0)}" itemprop="datePublished">${escapeHtml(dateLabel)}</time>
          </dd>
        </div>`
            : ""
        }
        <div>
          <dt>${escapeHtml(ui.source)}</dt>
          <dd>${escapeHtml(source)}</dd>
        </div>
      </dl>
      ${data.meta.disclaimer ? `<p class="hero__disclaimer">${escapeHtml(data.meta.disclaimer)}</p>` : ""}
    </header>
  `;
}

function renderV4Sections(data) {
  return (data.sections || [])
    .map((section, index) => {
      // Hook content lives under the title H1 already shown in the hero.
      if (section.kind === "hook") {
        return `
          <section class="section v4-section" aria-label="${escapeAttr(section.heading)}">
            <div class="v4-prose">${renderV4Markdown(section.body)}</div>
          </section>`;
      }
      if (section.kind === "world-model") {
        return `
          <section class="section v4-section v4-section--world-model" aria-labelledby="world-model-title">
            <aside class="world-model-card">
              <h2 id="world-model-title" class="world-model-card__title">${escapeHtml(section.heading)}</h2>
              <div class="v4-prose">${renderV4Markdown(section.body)}</div>
            </aside>
          </section>`;
      }
      const headingId = `v4-section-${index}`;
      return `
        <section class="section v4-section" aria-labelledby="${headingId}">
          <h2 id="${headingId}">${escapeHtml(section.heading)}</h2>
          <div class="v4-prose">${renderV4Markdown(section.body)}</div>
        </section>`;
    })
    .join("");
}

/** Preserve authored wording; only apply light markdown → HTML. */
function renderV4Markdown(text) {
  const blocks = String(text || "")
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);
  return blocks
    .map((block) => {
      const lines = block.split("\n").map((line) => line.trimEnd());
      if (lines.every((line) => /^>\s?/.test(line))) {
        const quote = lines.map((line) => line.replace(/^>\s?/, "")).join("\n");
        return `<blockquote>${renderV4Inline(quote)}</blockquote>`;
      }
      if (lines.every((line) => /^-\s+/.test(line))) {
        const items = lines
          .map((line) => `<li>${renderV4Inline(line.replace(/^-\s+/, ""))}</li>`)
          .join("");
        return `<ul>${items}</ul>`;
      }
      return `<p>${renderV4Inline(lines.join("\n"))}</p>`;
    })
    .join("");
}

function renderV4Inline(text) {
  return escapeHtml(String(text || ""))
    .replace(/\n/g, "<br>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

function renderSiteFooter(locale, ui) {
  const lines = getBrandFooterLines()
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("");
  return `
    <footer class="site-footer">
      <div class="site-footer__inner">
        <p class="site-footer__brand">
          ${renderBrandCircleHtml("brand-circle")}
          <span class="site-footer__mark">${escapeHtml(getBrandMark(locale))}</span>
        </p>
        <div class="site-footer__lines">${lines}</div>
        <p class="site-footer__meta">${escapeHtml(ui.footerRest)}</p>
      </div>
    </footer>
  `;
}

function renderChrome({ locale, ui, productId, pathnameSlug, page }) {
  const meta = productId ? `${ui.readerMeta} · ${productId}` : ui.navMeta;
  const startActive = page === "start" ? " is-active" : "";
  const thinkActive = page === "think" ? " is-active" : "";
  return `
    <a class="skip-link" href="#main">${escapeHtml(ui.skipLink)}</a>
    <header class="site-bar" aria-label="${escapeAttr(ui.siteBarLabel)}">
      <div class="site-bar__identity">
        <a class="site-bar__brand" href="${escapeAttr(buildHomePath(locale))}">
          ${renderBrandCircleHtml("brand-circle")}
          <span class="site-bar__lockup">
            <span class="site-bar__mark">${escapeHtml(getBrandMark(locale))}</span>
            <span class="site-bar__subtitle">${escapeHtml(getBrandSubtitle(locale))}</span>
          </span>
        </a>
        <p class="site-bar__meta">${escapeHtml(meta)}</p>
      </div>
      <div class="site-bar__nav">
        <a class="site-bar__start${startActive}" href="${escapeAttr(buildStartPath(locale))}"${
          page === "start" ? ' aria-current="page"' : ""
        }>${escapeHtml(ui.startHereNav)}</a>
        <a class="site-bar__start${thinkActive}" href="${escapeAttr(buildThinkPath(locale))}"${
          page === "think" ? ' aria-current="page"' : ""
        }>${escapeHtml(ui.howWeThinkNav)}</a>
        ${renderLangSwitch(locale, pathnameSlug, ui, page)}
      </div>
    </header>
  `;
}

function renderLangSwitch(locale, slug, ui, page) {
  const links = SUPPORTED_LOCALES.map((code) => {
    let href = buildHomePath(code);
    if (page === "brief" && slug) href = buildBriefPath(code, slug);
    else if (page === "start") href = buildStartPath(code);
    else if (page === "think") href = buildThinkPath(code);
    const label = code === "zh" ? ui.langZh : ui.langEn;
    const active = code === locale ? " is-active" : "";
    const ariaCurrent = code === locale ? ' aria-current="true"' : "";
    return `<a class="lang-switch__link${active}" href="${escapeAttr(href)}" data-locale="${code}"${ariaCurrent}>${escapeHtml(label)}</a>`;
  }).join('<span class="lang-switch__sep" aria-hidden="true">|</span>');

  return `
    <nav class="lang-switch" aria-label="${escapeAttr(ui.langSwitcher)}">
      ${links}
    </nav>
  `;
}

function renderThinkPage(think, locale) {
  const heroSupport = think.heroLines
    .map((line) => `<span class="start-hero__line">${escapeHtml(line)}</span>`)
    .join("");

  const studyItems = think.studyItems
    .map(
      (item) => `
      <li class="think-list__item">
        <span class="start-flow__circle" aria-hidden="true"></span>
        <span class="think-list__text">${escapeHtml(item)}</span>
      </li>`,
    )
    .join("");

  const dontItems = think.dontItems
    .map(
      (item) => `
      <li class="think-list__item think-list__item--muted">
        <span class="start-flow__circle" aria-hidden="true"></span>
        <span class="think-list__text">${escapeHtml(item)}</span>
      </li>`,
    )
    .join("");

  const methodItems = think.methodItems
    .map(
      (item, index) => `
      <li class="start-card">
        <p class="start-card__index" aria-hidden="true">
          <span class="start-circle">${String(index + 1)}</span>
        </p>
        <h3 class="start-card__title">${escapeHtml(item.title)}</h3>
        <p class="start-card__text">${escapeHtml(item.text)}</p>
      </li>`,
    )
    .join("");

  const historyBody = think.historyParagraphs
    .map((p) => `<p>${escapeHtml(p)}</p>`)
    .join("");

  const startHref = buildStartPath(locale);
  const beginHref = buildBriefPath(locale, think.beginSlug || DEFAULT_SLUG);
  const homeHref = buildHomePath(locale);

  return `
    <header class="start-hero">
      <h1 class="start-hero__title">${escapeHtml(think.heroTitle)}</h1>
      <p class="start-hero__summary">${heroSupport}</p>
    </header>

    <section class="start-section" aria-labelledby="think-study-title">
      <h2 id="think-study-title" class="start-section__title">${escapeHtml(think.studyTitle)}</h2>
      <p class="start-section__sentence">${escapeHtml(think.studyLead)}</p>
      <ul class="think-list">${studyItems}</ul>
      <p class="start-section__lede think-close">${escapeHtml(think.studyClose)}</p>
    </section>

    <section class="start-section" aria-labelledby="think-dont-title">
      <h2 id="think-dont-title" class="start-section__title">${escapeHtml(think.dontTitle)}</h2>
      <ul class="think-list">${dontItems}</ul>
    </section>

    <section class="start-section" aria-labelledby="think-method-title">
      <h2 id="think-method-title" class="start-section__title">${escapeHtml(think.methodTitle)}</h2>
      <ol class="start-cards start-cards--three think-method">${methodItems}</ol>
    </section>

    <section class="start-section" aria-labelledby="think-history-title">
      <h2 id="think-history-title" class="start-section__title">${escapeHtml(think.historyTitle)}</h2>
      <div class="start-section__body think-history">${historyBody}</div>
    </section>

    <section class="start-section start-section--begin" aria-labelledby="think-continue-title">
      <h2 id="think-continue-title" class="start-section__title">${escapeHtml(think.continueTitle)}</h2>
      <p class="start-begin__actions">
        <a class="btn btn--primary btn--large" href="${escapeAttr(startHref)}">${escapeHtml(think.startCta)}</a>
        <a class="btn btn--secondary" href="${escapeAttr(beginHref)}">${escapeHtml(think.beginCta)}</a>
        <a class="btn btn--secondary" href="${escapeAttr(homeHref)}">${escapeHtml(think.collectionCta)}</a>
      </p>
    </section>
  `;
}

function renderStartFlow(steps) {
  const nodes = steps
    .map((label, index) => {
      const arrow =
        index < steps.length - 1
          ? `<li class="start-flow__arrow" aria-hidden="true">
              <svg viewBox="0 0 24 28" width="24" height="28" focusable="false">
                <path d="M12 2v18M6 14l6 8 6-8" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </li>`
          : "";
      return `
        <li class="start-flow__node">
          <span class="start-flow__circle" aria-hidden="true"></span>
          <span class="start-flow__label">${escapeHtml(label)}</span>
        </li>
        ${arrow}`;
    })
    .join("");

  return `
    <ol class="start-flow" aria-label="${escapeAttr(steps.join(" → "))}">
      ${nodes}
    </ol>
  `;
}

function renderStartPage(start, locale) {
  const heroSupport = start.heroLines
    .map((line) => `<span class="start-hero__line">${escapeHtml(line)}</span>`)
    .join("");

  const howSteps = start.howSteps
    .map(
      (item, index) => `
      <li class="start-card">
        <p class="start-card__index" aria-hidden="true">
          <span class="start-circle">${String(index + 1)}</span>
        </p>
        <h3 class="start-card__title">${escapeHtml(item.title)}</h3>
        <p class="start-card__text">${escapeHtml(item.text)}</p>
      </li>`,
    )
    .join("");

  const pathItems = start.path
    .map((item, index) => {
      const href = buildBriefPath(item.hrefLocale || locale, item.slug);
      const arrow =
        index < start.path.length - 1
          ? `<li class="start-path__arrow" aria-hidden="true">↓</li>`
          : "";
      return `
      <li class="start-path__item">
        <a class="start-path__link" href="${escapeAttr(href)}"${
          item.hrefLocale && item.hrefLocale !== locale
            ? ` data-locale="${escapeAttr(item.hrefLocale)}"`
            : ""
        }>
          <span class="start-path__id">${escapeHtml(item.id)}</span>
          <span class="start-path__why">${escapeHtml(item.why)}</span>
        </a>
      </li>
      ${arrow}`;
    })
    .join("");

  const learnItems = start.learnItems
    .map(
      (item, index) => `
      <li class="start-card start-card--learn">
        <p class="start-card__index" aria-hidden="true">
          <span class="start-circle">${String(index + 1)}</span>
        </p>
        <h3 class="start-card__title">${escapeHtml(item.title)}</h3>
      </li>`,
    )
    .join("");

  const beginHref = buildBriefPath(locale, start.beginSlug || DEFAULT_SLUG);
  const homeHref = buildHomePath(locale);

  return `
    <header class="start-hero">
      <h1 class="start-hero__title">${escapeHtml(start.heroTitle)}</h1>
      <p class="start-hero__summary">${heroSupport}</p>
      <p class="start-hero__actions">
        <a class="btn btn--primary" href="${escapeAttr(beginHref)}">${escapeHtml(start.heroCta)}</a>
      </p>
    </header>

    <section class="start-section" aria-labelledby="start-brief-title">
      <h2 id="start-brief-title" class="start-section__title">${escapeHtml(start.briefTitle)}</h2>
      <p class="start-section__sentence">${escapeHtml(start.briefSentence)}</p>
      ${renderStartFlow(start.flowSteps)}
    </section>

    <section class="start-section" aria-labelledby="start-how-title">
      <h2 id="start-how-title" class="start-section__title">${escapeHtml(start.howTitle)}</h2>
      <ol class="start-cards start-cards--three">${howSteps}</ol>
    </section>

    <section class="start-section" aria-labelledby="start-path-title">
      <h2 id="start-path-title" class="start-section__title">${escapeHtml(start.pathTitle)}</h2>
      <p class="start-section__lede">${escapeHtml(start.pathLede)}</p>
      <ol class="start-path">${pathItems}</ol>
    </section>

    <section class="start-section" aria-labelledby="start-learn-title">
      <h2 id="start-learn-title" class="start-section__title">${escapeHtml(start.learnTitle)}</h2>
      <ol class="start-cards start-cards--five">${learnItems}</ol>
    </section>

    <section class="start-section start-section--begin" aria-labelledby="start-begin-title">
      <h2 id="start-begin-title" class="start-section__title">${escapeHtml(start.beginTitle)}</h2>
      <p class="start-begin__actions">
        <a class="btn btn--primary btn--large" href="${escapeAttr(beginHref)}">${escapeHtml(start.beginCta)}</a>
        <a class="btn btn--secondary" href="${escapeAttr(homeHref)}">${escapeHtml(start.collectionCta)}</a>
      </p>
    </section>
  `;
}

function renderHomeStory(home, locale) {
  const benefits = home.benefits
    .map(
      (item, index) => `
      <li class="home-principles__item">
        <p class="home-principles__index" aria-hidden="true">${String(index + 1).padStart(2, "0")}</p>
        <h3 class="home-principles__title">${escapeHtml(item.title)}</h3>
        <p class="home-principles__text">${escapeHtml(item.text)}</p>
      </li>`,
    )
    .join("");

  const differences = home.differences
    .map(
      (item, index) => `
      <li class="home-principles__item">
        <p class="home-principles__index" aria-hidden="true">${String(index + 1).padStart(2, "0")}</p>
        <h3 class="home-principles__title">${escapeHtml(item.title)}</h3>
        <p class="home-principles__text">${escapeHtml(item.text)}</p>
      </li>`,
    )
    .join("");

  const processSteps = home.processSteps
    .map((step, index) => {
      const arrow =
        index < home.processSteps.length - 1
          ? `<li class="home-process__arrow" aria-hidden="true">↓</li>`
          : "";
      return `
      <li class="home-process__card">
        <h3 class="home-process__step">${escapeHtml(step.title)}</h3>
        <p class="home-process__text">${escapeHtml(step.text)}</p>
      </li>
      ${arrow}`;
    })
    .join("");

  const support = home.supportLines
    .map((line) => `<span class="home-hero__support-line">${escapeHtml(line)}</span>`)
    .join("");

  const titleHtml = home.titleLines
    .map((line) => `<span class="home-hero__title-line">${escapeHtml(line)}</span>`)
    .join("");

  const readingTitleHtml = home.readingTitleLines
    .map((line) => `<span class="home-section__title-line">${escapeHtml(line)}</span>`)
    .join("");

  const trustBar = home.trustBar
    .map((item) => `<li class="home-trust__item">${escapeHtml(item)}</li>`)
    .join("");

  const startHref = buildBriefPath(locale, home.startSlug || DEFAULT_SLUG);

  return `
    <header class="home-hero">
      <h1 class="home-hero__brand">${titleHtml}</h1>
      <p class="home-hero__value home-hero__support">${support}</p>
      <p class="home-hero__actions">
        <a class="btn btn--primary" href="${escapeAttr(startHref)}">${escapeHtml(home.primaryCta)}</a>
        <a class="btn btn--secondary" href="#collection">${escapeHtml(home.secondaryCta)}</a>
      </p>
      <ul class="home-trust" aria-label="Trust">
        ${trustBar}
      </ul>
    </header>

    <section class="home-section home-section--benefits" aria-labelledby="home-benefit-title">
      <h2 id="home-benefit-title" class="home-section__title">${escapeHtml(home.benefitTitle)}</h2>
      <ol class="home-principles__list">${benefits}</ol>
    </section>

    <section class="home-section home-section--difference" aria-labelledby="home-difference-title">
      <div class="home-section__intro">
        <h2 id="home-difference-title" class="home-section__title">${escapeHtml(home.differenceTitle)}</h2>
        ${
          home.differenceSubtitle
            ? `<p class="home-section__lede">${escapeHtml(home.differenceSubtitle)}</p>`
            : ""
        }
      </div>
      <ol class="home-principles__list">${differences}</ol>
    </section>

    <section class="home-section home-section--reading" aria-labelledby="home-reading-title">
      <h2 id="home-reading-title" class="home-section__title">${readingTitleHtml}</h2>
      <p class="home-reading__id">${escapeHtml(home.readingId)}</p>
      <p class="home-reading__why">
        <span class="home-reading__why-label">${escapeHtml(home.readingGainLabel)}</span>
        ${
          Array.isArray(home.readingGainLines)
            ? home.readingGainLines
                .map((line) => `<span class="home-hero__support-line">${escapeHtml(line)}</span>`)
                .join("")
            : escapeHtml(home.readingGain || "")
        }
      </p>
      <p class="home-start__action">
        <a class="btn btn--primary" href="${escapeAttr(startHref)}">${escapeHtml(home.primaryCta)}</a>
      </p>
    </section>

    <section class="home-section home-section--process" aria-labelledby="home-process-title">
      <div class="home-section__intro">
        <h2 id="home-process-title" class="home-section__title">${escapeHtml(home.processTitle)}</h2>
        ${
          home.processSubtitle
            ? `<p class="home-section__lede">${escapeHtml(home.processSubtitle)}</p>`
            : ""
        }
      </div>
      <ol class="home-process">${processSteps}</ol>
    </section>
  `;
}

function renderCollection(cards, locale, ui) {
  const items = cards
    .map((card) => {
      const href = buildBriefPath(locale, card.slug);
      const category = ui.categories[card.category] ?? card.category;
      const languages = card.translationReady
        ? formatLanguages(card.languages, ui)
        : ui.translationPending;
      const pendingClass = card.translationReady ? "" : " brief-card--pending";
      const why = getBriefWhy(card.slug, locale);
      return `
        <li>
          <a class="brief-card${pendingClass}" href="${escapeAttr(href)}">
            <div class="brief-card__top">
              <p class="brief-card__id">${escapeHtml(card.productId)}</p>
              ${card.translationReady ? "" : `<p class="brief-card__status">${escapeHtml(ui.translationPending)}</p>`}
            </div>
            <h2 class="brief-card__title" id="collection-title-${escapeAttr(card.slug)}">${escapeHtml(card.title)}</h2>
            ${
              why
                ? `<p class="brief-card__takeaway"><span class="brief-card__takeaway-label">${escapeHtml(ui.cardTakeaway)}</span> ${escapeHtml(why)}</p>`
                : ""
            }
            <dl class="brief-card__meta">
              <div>
                <dt>${escapeHtml(ui.cardCategory)}</dt>
                <dd>${escapeHtml(category)}</dd>
              </div>
              <div>
                <dt>${escapeHtml(ui.cardPublished)}</dt>
                <dd><time datetime="${escapeAttr(card.publishedDate)}">${escapeHtml(formatPublishedDate(card.publishedDate, locale))}</time></dd>
              </div>
              <div>
                <dt>${escapeHtml(ui.cardReadTime)}</dt>
                <dd>${escapeHtml(card.readingTime)}</dd>
              </div>
              <div>
                <dt>${escapeHtml(ui.cardConfidence)}</dt>
                <dd>${confidenceBadge(card.confidence, locale)}</dd>
              </div>
              <div class="brief-card__meta-lang">
                <dt>${escapeHtml(ui.cardLanguage)}</dt>
                <dd>${escapeHtml(languages)}</dd>
              </div>
            </dl>
          </a>
        </li>`;
    })
    .join("");

  return `
    <header class="collection__header">
      <p class="collection__eyebrow">${escapeHtml(ui.collectionEyebrow)}</p>
      <h2 id="collection-title" class="collection__title">${escapeHtml(ui.collectionTitle)}</h2>
      <p class="collection__lede">${
        Array.isArray(ui.collectionLede)
          ? ui.collectionLede.map((line) => escapeHtml(line)).join("<br>")
          : escapeHtml(ui.collectionLede)
      }</p>
    </header>
    <ol class="collection__grid">
      ${items}
    </ol>
  `;
}

function renderBriefNav(locale, slug, ui) {
  const { prev, next } = getNeighbors(slug || DEFAULT_SLUG);
  const home = buildHomePath(locale);
  const prevLink = prev
    ? `<a class="brief-nav__link" href="${escapeAttr(buildBriefPath(locale, prev))}" rel="prev">${escapeHtml(ui.previousBrief)}</a>`
    : `<span class="brief-nav__link is-disabled" aria-disabled="true">${escapeHtml(ui.previousBrief)}</span>`;
  const nextLink = next
    ? `<a class="brief-nav__link" href="${escapeAttr(buildBriefPath(locale, next))}" rel="next">${escapeHtml(ui.nextBrief)}</a>`
    : `<span class="brief-nav__link is-disabled" aria-disabled="true">${escapeHtml(ui.nextBrief)}</span>`;

  return `
    <nav class="brief-nav" aria-label="${escapeAttr(ui.briefNavLabel)}">
      <div class="brief-nav__row">
        ${prevLink}
        <a class="brief-nav__link brief-nav__link--back" href="${escapeAttr(home)}">${escapeHtml(ui.backToCollection)}</a>
        ${nextLink}
      </div>
    </nav>
  `;
}

function renderHero(data, ui, locale, slug) {
  const dateLabel = formatPublishedDate(data.meta.t0, locale);
  const source = data.meta.source || "—";
  const conclusion = slug ? getBriefConclusion(slug, locale) : "";
  const takeaways = slug ? getBriefTakeaways(slug, locale) : [];
  const takeawayList = takeaways
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");
  return `
    <header class="hero">
      <p class="hero__eyebrow" itemprop="articleSection">${escapeHtml(ui.productLabel)}</p>
      <h1 class="hero__headline" itemprop="headline">${escapeHtml(data.title)}</h1>
      ${
        conclusion
          ? `<aside class="one-line-conclusion" aria-label="${escapeAttr(ui.oneLineConclusion)}">
        <p class="one-line-conclusion__label">${escapeHtml(ui.oneLineConclusion)}</p>
        <p class="one-line-conclusion__text">${escapeHtml(conclusion)}</p>
      </aside>`
          : ""
      }
      ${
        takeawayList
          ? `<aside class="after-read" aria-label="${escapeAttr(ui.afterReadTitle)}">
        <p class="after-read__label">${escapeHtml(ui.afterReadTitle)}</p>
        <ul class="after-read__list">${takeawayList}</ul>
      </aside>`
          : ""
      }
      <p class="hero__deck">${escapeHtml(data.thesis)}</p>

      <aside class="reader-promise" aria-label="${escapeAttr(ui.readerPromiseTitle)}">
        <p class="reader-promise__title">${escapeHtml(ui.readerPromiseTitle)}</p>
        <ul class="reader-promise__list">
          ${ui.readerPromise
            .map(
              (item) => `
            <li>
              <span class="reader-promise__check" aria-hidden="true">✓</span>
              ${escapeHtml(item)}
            </li>`,
            )
            .join("")}
        </ul>
      </aside>

      <dl class="hero__facts">
        <div>
          <dt>${escapeHtml(ui.readTime)}</dt>
          <dd>${escapeHtml(localizeReadingTimeDisplay(data.meta.readingTime, locale, ui))}</dd>
        </div>
        <div>
          <dt>${escapeHtml(ui.publishedDate)}</dt>
          <dd>
            <time datetime="${escapeAttr(data.meta.t0)}" itemprop="datePublished">${escapeHtml(dateLabel)}</time>
          </dd>
        </div>
        <div>
          <dt>${escapeHtml(ui.source)}</dt>
          <dd>${escapeHtml(source)}</dd>
        </div>
      </dl>
      <p class="hero__disclaimer">${escapeHtml(data.meta.disclaimer)}</p>
    </header>
  `;
}

function localizeReadingTimeDisplay(value, locale, ui) {
  if (locale !== "zh") return value || ui.readingTimeFallback;
  if (!value) return ui.readingTimeFallback;
  const match = String(value).match(/(\d+)/);
  if (match) return `约 ${match[1]} 分钟`;
  if (/分钟/.test(value)) return value;
  return ui.readingTimeFallback;
}

function renderExecutive(data, ui) {
  const label = data.executiveSummary.label || ui.sections.whyCare;
  return `
    <section class="section" aria-labelledby="exec-title">
      <h2 id="exec-title">${escapeHtml(ui.sections.executiveSummary)}</h2>
      <div class="callout callout--summary">
        <p class="callout__label">${escapeHtml(label)}</p>
        <p>${renderInlineStrong(data.executiveSummary.body)}</p>
      </div>
    </section>
  `;
}

function renderValue(data, ui) {
  const nodes = data.valueMigration.nodes
    .map(
      (node, index) => `
        <li class="flow__node${index === 2 || index === 3 ? " flow__node--pivot" : ""}">
          <span class="flow__step">${index + 1}</span>
          <span class="flow__text">${escapeHtml(node)}</span>
        </li>`,
    )
    .join("");

  return `
    <section class="section section--value" aria-labelledby="value-title">
      <h2 id="value-title">${escapeHtml(ui.sections.valueMigration)}</h2>
      <p class="section__lede">${escapeHtml(data.valueMigration.lede)}</p>
      <figure class="flow" aria-label="${escapeAttr(ui.valueFlowLabel)}">
        <ol class="flow__list">${nodes}</ol>
        <figcaption class="flow__caption">${escapeHtml(data.valueMigration.caption)}</figcaption>
      </figure>
    </section>
  `;
}

function renderChanged(data, ui) {
  const items = data.whatChanged.items
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");
  return `
    <section class="section" aria-labelledby="changed-title">
      <h2 id="changed-title">${escapeHtml(ui.sections.whatChanged)}</h2>
      <p>${escapeHtml(data.whatChanged.intro)}</p>
      <ul class="fact-list">${items}</ul>
    </section>
  `;
}

function renderMatters(data, ui) {
  const before = data.whyItMatters.before
    .map((p) => `<p>${renderInlineStrong(p)}</p>`)
    .join("");
  const after = data.whyItMatters.after
    .map((p) => `<p>${renderInlineStrong(p)}</p>`)
    .join("");
  const shifts = data.whyItMatters.shifts
    .map(
      (shift) => `
        <li>
          <strong>${escapeHtml(shift.title)}</strong> — ${escapeHtml(shift.text)}
        </li>`,
    )
    .join("");
  return `
    <section class="section" aria-labelledby="matters-title">
      <h2 id="matters-title">${escapeHtml(ui.sections.whyItMatters)}</h2>
      ${before}
      ${shifts ? `<ol class="shift-list">${shifts}</ol>` : ""}
      ${after}
    </section>
  `;
}

function renderBeneficiaries(data, ui, locale) {
  const rows = data.beneficiaries.rows
    .map(
      (row) => `
      <tr>
        <th scope="row">${escapeHtml(row.company)}</th>
        <td>${escapeHtml(row.reason)}</td>
        <td>${confidenceBadge(row.confidence, locale)}</td>
        <td>${escapeHtml(row.unknown)}</td>
      </tr>`,
    )
    .join("");

  return `
    <section class="section" aria-labelledby="beneficiaries-title">
      <h2 id="beneficiaries-title">${escapeHtml(ui.sections.beneficiaries)}</h2>
      <p class="section__note">${escapeHtml(data.beneficiaries.note)}</p>
      <div class="table-wrap" role="region" aria-label="${escapeAttr(ui.beneficiariesLabel)}" tabindex="0">
        <table class="beneficiaries">
          <thead>
            <tr>
              <th scope="col">${escapeHtml(ui.table.company)}</th>
              <th scope="col">${escapeHtml(ui.table.reason)}</th>
              <th scope="col">${escapeHtml(ui.table.confidence)}</th>
              <th scope="col">${escapeHtml(ui.table.unknown)}</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </section>
  `;
}

function renderReality(data, ui) {
  const wrong = data.realityCheck.wrong
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");
  return `
    <section class="section section--reality" aria-labelledby="reality-title">
      <h2 id="reality-title">${escapeHtml(ui.sections.realityCheck)}</h2>
      <div class="callout callout--reality">
        <div class="reality-block">
          <h3>${escapeHtml(ui.sections.currentThesis)}</h3>
          <p>${escapeHtml(data.realityCheck.thesis)}</p>
        </div>
        <div class="reality-block">
          <h3>${escapeHtml(ui.sections.proveWrong)}</h3>
          <ul>${wrong}</ul>
        </div>
        <div class="reality-block reality-block--next">
          <h3>${escapeHtml(ui.sections.nextValidation)}</h3>
          <p>${escapeHtml(data.realityCheck.next)}</p>
        </div>
      </div>
    </section>
  `;
}

function renderBottom(data, ui) {
  return `
    <section class="section section--bottom" aria-labelledby="bottom-title">
      <h2 id="bottom-title">${escapeHtml(ui.sections.bottomLine)}</h2>
      <p class="bottom-line" itemprop="description">${escapeHtml(data.bottomLine)}</p>
    </section>
  `;
}

function renderSources(data, ui) {
  const items = data.sources.items
    .map((item) => {
      const label = localizeSourceLabel(item.label, ui);
      return `
        <li>
          <strong>${escapeHtml(label)}</strong> ${escapeHtml(item.text)}
          ${item.path ? `<span class="sources__path">${escapeHtml(item.path)}</span>` : ""}
        </li>`;
    })
    .join("");

  return `
    <section class="section section--sources" aria-labelledby="sources-title">
      <h2 id="sources-title">${escapeHtml(ui.sections.sources)}</h2>
      <ul class="sources">${items}</ul>
      <p class="sources__note">${escapeHtml(data.sources.note)}</p>
    </section>
  `;
}

function localizeSourceLabel(label, ui) {
  if (/^Parent( Decision Brief)? research/i.test(label)) return ui.parentResearch;
  if (/Underlying official source/i.test(label)) return ui.underlyingSource;
  return `${label}:`;
}

function formatLanguages(locales, ui) {
  return locales
    .map((code) => (code === "zh" ? ui.langZh : ui.langEn))
    .join(" · ");
}

function confidenceBadge(value, locale = "en") {
  const raw = String(value ?? "").trim() || "—";
  const normalized = raw.toLowerCase();
  let mod = "unknown";
  if (normalized === "medium") mod = "medium";
  else if (normalized === "low") mod = "low";
  else if (normalized === "high") mod = "medium";
  const display = localizeConfidence(raw, locale);
  return `<span class="badge badge--${mod}">${escapeHtml(display)}</span>`;
}

function formatPublishedDate(iso, locale) {
  if (!iso) return "";
  const match = iso.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return iso;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  if (locale === "zh") {
    return `${year}年${month}月${day}日`;
  }
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return `${day} ${months[month - 1]} ${year}`;
}

function extractProductId(product) {
  const match = String(product).match(/DB-\d+/i);
  return match ? match[0].toUpperCase() : null;
}

function renderInlineStrong(text) {
  const escaped = escapeHtml(text);
  return escaped.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/'/g, "&#39;");
}
