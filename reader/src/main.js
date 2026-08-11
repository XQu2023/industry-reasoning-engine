import "../styles.css";
import { listCollectionCards, loadParsedBrief } from "./briefs.js";
import { getJournalBrief, mountJournalApp, unmountJournalApp } from "./journal/index.ts";
import { renderApp } from "./render.js";
import {
  parseRoute,
  rememberLocale,
  resolveInitialPath,
  SUPPORTED_LOCALES,
  switchLocalePath,
} from "./router.js";
import { buildValidationLayer } from "./validation/index.js";

const root = document.getElementById("app");

function navigate(path, { replace = false } = {}) {
  if (replace) {
    window.history.replaceState({}, "", path);
  } else {
    window.history.pushState({}, "", path);
  }
  mount();
}

function mount() {
  const redirect = resolveInitialPath(window.location.pathname);
  if (redirect && redirect !== window.location.pathname) {
    navigate(redirect, { replace: true });
    return;
  }

  const route = parseRoute(window.location.pathname);
  const locale = SUPPORTED_LOCALES.includes(route.locale) ? route.locale : "en";

  if (route.type === "home") {
    const cards = listCollectionCards(locale);
    const view = renderApp({
      locale,
      type: "home",
      slug: null,
      brief: null,
      productId: null,
      cards,
    });
    applyView(view);
    return;
  }

  if (route.type === "brief" && route.slug) {
    const journal = getJournalBrief(route.slug, locale);
    if (journal) {
      unmountJournalApp();
      mountJournalApp(root, journal, navigate);
      return;
    }

    const parsed = loadParsedBrief(route.slug, locale);
    if (!parsed) {
      applyView(
        renderApp({
          locale,
          type: "notfound",
          slug: route.slug,
          brief: null,
          productId: null,
          cards: null,
        }),
      );
      return;
    }

    if (parsed.unavailable) {
      applyView(
        renderApp({
          locale,
          type: "locale-unavailable",
          slug: route.slug,
          brief: null,
          productId: extractProductId(parsed.meta?.product) ?? route.slug.toUpperCase(),
          cards: null,
          unavailable: true,
          fallbackLocale: parsed.fallbackLocale || "en",
        }),
      );
      return;
    }

    applyView(
      renderApp({
        locale,
        type: "brief",
        slug: route.slug,
        brief: parsed.brief,
        productId: extractProductId(parsed.brief.meta.product),
        cards: null,
        validationLayer: buildValidationLayer(route.slug),
      }),
    );
    return;
  }

  applyView(
    renderApp({
      locale,
      type: "notfound",
      slug: route.slug,
      brief: null,
      productId: null,
      cards: null,
    }),
  );
}

function applyView(view) {
  unmountJournalApp();
  document.documentElement.lang = view.htmlLang;
  document.title = view.title;
  setMetaDescription(view.description);
  root.innerHTML = view.body;
  bindNavigation();
  window.scrollTo(0, 0);
}

function bindNavigation() {
  root.querySelectorAll("a[href]").forEach((anchor) => {
    const href = anchor.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("http")) return;
    anchor.addEventListener("click", (event) => {
      if (
        event.defaultPrevented
        || event.button !== 0
        || event.metaKey
        || event.ctrlKey
        || event.shiftKey
        || event.altKey
      ) {
        return;
      }
      event.preventDefault();
      const nextLocale = anchor.getAttribute("data-locale");
      if (nextLocale && SUPPORTED_LOCALES.includes(nextLocale)) {
        rememberLocale(nextLocale);
      }
      navigate(href);
    });
  });
}

function setMetaDescription(description) {
  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", "description");
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", description);
}

function extractProductId(product) {
  const match = String(product ?? "").match(/DB-\d+/i);
  return match ? match[0].toUpperCase() : null;
}

window.addEventListener("popstate", () => {
  mount();
});

/** Expose for tests / debugging */
export { navigate, mount, switchLocalePath };

mount();
