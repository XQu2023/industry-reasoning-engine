import { t } from "./i18n.js";
import { buildBriefPath, DEFAULT_SLUG, SUPPORTED_LOCALES } from "./router.js";

export function renderApp({ locale, type, slug, brief, productId }) {
  const ui = t(locale);
  const htmlLang = locale === "zh" ? "zh-Hans" : "en";

  if (type === "notfound" || !brief) {
    return {
      htmlLang,
      title: ui.notFound,
      description: ui.notFound,
      body: `
        ${renderChrome({ locale, ui, productId: null, pathnameSlug: slug })}
        <main id="main" class="page-main">
          <p class="not-found">${escapeHtml(ui.notFound)}</p>
        </main>
        <footer class="site-footer"><p>${escapeHtml(ui.footer)}</p></footer>
      `,
    };
  }

  const data = brief;
  const id = productId ?? extractProductId(data.meta.product) ?? "DB-001";
  const title = `${data.title} — Decision Brief ${id}`;
  const description = data.thesis;

  return {
    htmlLang,
    title,
    description,
    body: `
      ${renderChrome({ locale, ui, productId: id, pathnameSlug: slug })}
      <main id="main">
        <article class="brief" itemscope itemtype="https://schema.org/Article">
          ${renderHero(data, ui, locale)}
          ${renderExecutive(data, ui)}
          ${renderValue(data, ui)}
          ${renderChanged(data, ui)}
          ${renderMatters(data, ui)}
          ${renderBeneficiaries(data, ui)}
          ${renderReality(data, ui)}
          ${renderBottom(data, ui)}
          ${renderSources(data, ui)}
        </article>
      </main>
      <footer class="site-footer"><p>${escapeHtml(ui.footer)}</p></footer>
    `,
  };
}

function renderChrome({ locale, ui, productId, pathnameSlug }) {
  const slug = pathnameSlug || DEFAULT_SLUG;
  const meta = productId ? `${ui.readerMeta} · ${productId}` : ui.readerMeta;
  return `
    <a class="skip-link" href="#main">${escapeHtml(ui.skipLink)}</a>
    <header class="site-bar" aria-label="Product">
      <div class="site-bar__identity">
        <p class="site-bar__brand">${escapeHtml(ui.brand)}</p>
        <p class="site-bar__meta">${escapeHtml(meta)}</p>
      </div>
      ${renderLangSwitch(locale, slug, ui)}
    </header>
  `;
}

function renderLangSwitch(locale, slug, ui) {
  const links = SUPPORTED_LOCALES.map((code) => {
    const href = buildBriefPath(code, slug || DEFAULT_SLUG);
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

function renderHero(data, ui, locale) {
  const dateLabel = formatPublishedDate(data.meta.t0, locale);
  return `
    <header class="hero">
      <p class="hero__eyebrow" itemprop="articleSection">${escapeHtml(ui.productLabel)}</p>
      <h1 class="hero__headline" itemprop="headline">${escapeHtml(data.title)}</h1>
      <p class="hero__deck">${escapeHtml(data.thesis)}</p>

      <aside class="reader-promise" aria-label="Reader Promise">
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
          <dd>${escapeHtml(data.meta.readingTime)}</dd>
        </div>
        <div>
          <dt>${escapeHtml(ui.publishedDate)}</dt>
          <dd>
            <time datetime="${escapeAttr(data.meta.t0)}" itemprop="datePublished">${escapeHtml(dateLabel)}</time>
          </dd>
        </div>
        <div>
          <dt>${escapeHtml(ui.source)}</dt>
          <dd>${escapeHtml(data.meta.source)}</dd>
        </div>
      </dl>
      <p class="hero__disclaimer">${escapeHtml(data.meta.disclaimer)}</p>
    </header>
  `;
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

function renderBeneficiaries(data, ui) {
  const rows = data.beneficiaries.rows
    .map(
      (row) => `
      <tr>
        <th scope="row">${escapeHtml(row.company)}</th>
        <td>${escapeHtml(row.reason)}</td>
        <td>${confidenceBadge(row.confidence)}</td>
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
  const labelMap = {
    "Parent research": ui.parentResearch,
    "Underlying official source (P0 only, via SRE-101)": ui.underlyingSource,
  };
  const items = data.sources.items
    .map((item) => {
      const label = labelMap[item.label] ?? `${item.label}:`;
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

function confidenceBadge(value) {
  const normalized = value.trim().toLowerCase();
  let mod = "unknown";
  if (normalized === "medium") mod = "medium";
  else if (normalized === "low") mod = "low";
  const display = value.trim() || "—";
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
