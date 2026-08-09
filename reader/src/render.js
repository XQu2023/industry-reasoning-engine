import { getNeighbors } from "./briefs.js";
import { getHomeContent } from "./homeContent.js";
import { localizeConfidence, t } from "./i18n.js";
import { renderKnowledgeNetwork } from "./knowledge/index.js";
import {
  buildBriefPath,
  buildHomePath,
  DEFAULT_SLUG,
  SUPPORTED_LOCALES,
} from "./router.js";
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
          ${renderHomeStory(home)}
          <section class="collection" aria-labelledby="collection-title">
            ${renderCollection(cards ?? [], locale, ui)}
          </section>
        </main>
        <footer class="site-footer"><p>${escapeHtml(ui.footer)}</p></footer>
      `,
    };
  }

  if (type === "locale-unavailable") {
    const id = productId ?? (slug ? slug.toUpperCase() : "");
    const englishHref = buildBriefPath(fallbackLocale || "en", slug);
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
            <a class="btn btn--primary" href="${escapeAttr(englishHref)}" data-locale="en">${escapeHtml(ui.switchToEnglish)}</a>
          </section>
          ${renderBriefNav(locale, slug, ui)}
        </main>
        <footer class="site-footer"><p>${escapeHtml(ui.footer)}</p></footer>
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
        <footer class="site-footer"><p>${escapeHtml(ui.footer)}</p></footer>
      `,
    };
  }

  const data = brief;
  const id = productId ?? extractProductId(data.meta.product) ?? "DB-001";
  const title = `${data.title} — ${ui.productLabel} ${id}`;
  const description = data.thesis;

  return {
    htmlLang,
    title,
    description,
    body: `
      ${renderChrome({ locale, ui, productId: id, pathnameSlug: slug, page: "brief" })}
      <main id="main">
        <article class="brief" itemscope itemtype="https://schema.org/Article">
          ${renderBriefNav(locale, slug, ui)}
          ${renderHero(data, ui, locale)}
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
        </article>
      </main>
      <footer class="site-footer"><p>${escapeHtml(ui.footer)}</p></footer>
    `,
  };
}

function renderChrome({ locale, ui, productId, pathnameSlug, page }) {
  const meta = productId ? `${ui.readerMeta} · ${productId}` : ui.collectionTitle;
  return `
    <a class="skip-link" href="#main">${escapeHtml(ui.skipLink)}</a>
    <header class="site-bar" aria-label="${escapeAttr(ui.siteBarLabel)}">
      <div class="site-bar__identity">
        <a class="site-bar__brand" href="${escapeAttr(buildHomePath(locale))}">${escapeHtml(ui.brand)}</a>
        <p class="site-bar__meta">${escapeHtml(meta)}</p>
      </div>
      ${renderLangSwitch(locale, pathnameSlug, ui, page)}
    </header>
  `;
}

function renderLangSwitch(locale, slug, ui, page) {
  const links = SUPPORTED_LOCALES.map((code) => {
    const href = page === "brief" && slug
      ? buildBriefPath(code, slug)
      : buildHomePath(code);
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

function renderHomeStory(home) {
  const principles = home.principles
    .map(
      (item, index) => `
      <li class="home-principles__item">
        <p class="home-principles__index" aria-hidden="true">${String(index + 1).padStart(2, "0")}</p>
        <h3 class="home-principles__title">${escapeHtml(item.title)}</h3>
        <p class="home-principles__text">${escapeHtml(item.text)}</p>
      </li>`,
    )
    .join("");

  const steps = home.methodSteps
    .map(
      (step) => `
      <li class="home-method__item">
        <h3 class="home-method__title">${escapeHtml(step.title)}</h3>
        <p class="home-method__text">${escapeHtml(step.text)}</p>
      </li>`,
    )
    .join("");

  return `
    <header class="home-hero">
      <p class="home-hero__eyebrow">${escapeHtml(home.eyebrow)}</p>
      <h1 class="home-hero__brand">${escapeHtml(home.brand)}</h1>
      <p class="home-hero__lede">${escapeHtml(home.lede)}</p>
      <p class="home-hero__trust">${escapeHtml(home.trust)}</p>
    </header>

    <section class="home-section home-section--why" aria-labelledby="home-why-title">
      <h2 id="home-why-title" class="home-section__title">${escapeHtml(home.whyTitle)}</h2>
      <div class="home-section__body">
        <p>${escapeHtml(home.whyBody)}</p>
        <p>${escapeHtml(home.whyClose)}</p>
      </div>
    </section>

    <section class="home-section home-section--principles" aria-labelledby="home-principles-title">
      <div class="home-section__intro">
        <h2 id="home-principles-title" class="home-section__title">${escapeHtml(home.principlesTitle)}</h2>
        <p class="home-section__lede">${escapeHtml(home.principlesLede)}</p>
      </div>
      <ol class="home-principles__list">${principles}</ol>
    </section>

    <section class="home-section home-section--method" aria-labelledby="home-method-title">
      <div class="home-section__intro">
        <h2 id="home-method-title" class="home-section__title">${escapeHtml(home.methodTitle)}</h2>
        <p class="home-section__lede">${escapeHtml(home.methodLede)}</p>
      </div>
      <ol class="home-method__list">${steps}</ol>
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
      return `
        <li>
          <a class="brief-card${pendingClass}" href="${escapeAttr(href)}">
            <div class="brief-card__top">
              <p class="brief-card__id">${escapeHtml(card.productId)}</p>
              ${card.translationReady ? "" : `<p class="brief-card__status">${escapeHtml(ui.translationPending)}</p>`}
            </div>
            <h2 class="brief-card__title" id="collection-title-${escapeAttr(card.slug)}">${escapeHtml(card.title)}</h2>
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
      <p class="collection__lede">${escapeHtml(ui.collectionLede)}</p>
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

function renderHero(data, ui, locale) {
  const dateLabel = formatPublishedDate(data.meta.t0, locale);
  const source = data.meta.source || "—";
  return `
    <header class="hero">
      <p class="hero__eyebrow" itemprop="articleSection">${escapeHtml(ui.productLabel)}</p>
      <h1 class="hero__headline" itemprop="headline">${escapeHtml(data.title)}</h1>
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
