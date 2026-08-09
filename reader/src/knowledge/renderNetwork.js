import { buildBriefPath } from "../router.js";
import {
  BRIEF_NODES,
  CONCEPT_INDEX,
  briefTitle,
  conceptId,
  getBriefNode,
} from "./graph.js";
import { knLabels } from "./labels.js";

/**
 * Knowledge Network panel for a Decision Brief page.
 * Concept navigation uses hash + :target (no router / search dependency).
 */
export function renderKnowledgeNetwork(slug, locale) {
  const node = getBriefNode(slug);
  if (!node) return "";

  const labels = knLabels(locale);
  const related = node.related
    .map((relatedSlug) => getBriefNode(relatedSlug))
    .filter(Boolean)
    .slice(0, 5);

  const conceptKeys = uniqueIds([
    ...node.concepts,
    ...node.company,
    ...node.technology,
    ...node.industry,
  ]);

  return `
    <section class="section section--knowledge" aria-labelledby="knowledge-title">
      <header class="knowledge__head">
        <h2 id="knowledge-title">${escapeHtml(labels.title)}</h2>
        <p class="knowledge__lede">${escapeHtml(labels.lede)}</p>
      </header>

      <nav class="knowledge-nav" aria-labelledby="knowledge-related-title">
        <h3 id="knowledge-related-title" class="knowledge-label">${escapeHtml(labels.relatedTitle)}</h3>
        <ol class="knowledge-related">
          ${related
            .map((item) => {
              const href = buildBriefPath(locale, item.slug);
              return `
              <li>
                <a class="knowledge-related__link" href="${escapeAttr(href)}">
                  <span class="knowledge-related__id">${escapeHtml(item.productId)}</span>
                  <span class="knowledge-related__title">${escapeHtml(briefTitle(item, locale))}</span>
                </a>
              </li>`;
            })
            .join("")}
        </ol>
      </nav>

      <div class="knowledge-tax">
        <div class="knowledge-tax__row" aria-labelledby="knowledge-concepts-title">
          <h3 id="knowledge-concepts-title" class="knowledge-label">${escapeHtml(labels.conceptsTitle)}</h3>
          <ul class="knowledge-tags" role="list">${renderTags(node.concepts)}</ul>
        </div>
        <div class="knowledge-tax__row" aria-labelledby="knowledge-company-title">
          <h3 id="knowledge-company-title" class="knowledge-label">${escapeHtml(labels.companyTitle)}</h3>
          <ul class="knowledge-tags" role="list">${renderTags(node.company)}</ul>
        </div>
        <div class="knowledge-tax__row" aria-labelledby="knowledge-technology-title">
          <h3 id="knowledge-technology-title" class="knowledge-label">${escapeHtml(labels.technologyTitle)}</h3>
          <ul class="knowledge-tags" role="list">${renderTags(node.technology)}</ul>
        </div>
        <div class="knowledge-tax__row" aria-labelledby="knowledge-industry-title">
          <h3 id="knowledge-industry-title" class="knowledge-label">${escapeHtml(labels.industryTitle)}</h3>
          <ul class="knowledge-tags" role="list">${renderTags(node.industry)}</ul>
        </div>
      </div>

      <div class="knowledge-panels" aria-live="polite">
        ${conceptKeys.map((id) => renderConceptPanel(id, locale, labels, slug)).join("")}
      </div>
    </section>
  `;
}

function renderTags(terms) {
  return terms
    .map((term) => {
      const id = conceptId(term);
      return `
        <li>
          <a class="knowledge-tag" href="#kn-concept-${escapeAttr(id)}">${escapeHtml(term)}</a>
        </li>`;
    })
    .join("");
}

function renderConceptPanel(conceptKey, locale, labels, currentSlug) {
  const concept = CONCEPT_INDEX[conceptKey];
  if (!concept) return "";

  const briefs = concept.briefs
    .map((slug) => BRIEF_NODES[slug])
    .filter(Boolean);

  const list = briefs.length
    ? `<ol class="knowledge-concept__list">
        ${briefs
          .map((item) => {
            const href = buildBriefPath(locale, item.slug);
            const current = item.slug === currentSlug ? " is-current" : "";
            return `
            <li>
              <a class="knowledge-related__link${current}" href="${escapeAttr(href)}">
                <span class="knowledge-related__id">${escapeHtml(item.productId)}</span>
                <span class="knowledge-related__title">${escapeHtml(briefTitle(item, locale))}</span>
              </a>
            </li>`;
          })
          .join("")}
      </ol>`
    : `<p class="knowledge__empty">${escapeHtml(labels.noRelated)}</p>`;

  return `
    <aside class="knowledge-concept" id="kn-concept-${escapeAttr(concept.id)}" tabindex="-1">
      <div class="knowledge-concept__bar">
        <h3 class="knowledge-concept__title">${escapeHtml(concept.label)}</h3>
        <a class="knowledge-concept__close" href="#knowledge-title">${escapeHtml(labels.closeConcept)}</a>
      </div>
      <p class="knowledge-concept__eyebrow">${escapeHtml(labels.conceptBriefs)}</p>
      ${list}
    </aside>
  `;
}

function uniqueIds(terms) {
  const seen = new Set();
  const ids = [];
  for (const term of terms) {
    const id = conceptId(term);
    if (!id || seen.has(id)) continue;
    seen.add(id);
    ids.push(id);
  }
  return ids;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("'", "&#39;");
}
