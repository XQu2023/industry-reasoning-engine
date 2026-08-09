import "../styles.css";
import { loadParsedBrief } from "./briefs.js";
import { renderApp } from "./render.js";
import {
  DEFAULT_SLUG,
  parseRoute,
  rememberLocale,
  resolveInitialPath,
  SUPPORTED_LOCALES,
  switchLocalePath,
} from "./router.js";

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
  const slug = route.slug || DEFAULT_SLUG;

  let parsed = null;
  if (route.type === "home" || route.type === "brief") {
    parsed = loadParsedBrief(slug, locale);
  }

  const view = renderApp({
    locale,
    type: parsed ? route.type : "notfound",
    slug,
    brief: parsed?.brief ?? null,
    productId: parsed ? extractProductId(parsed.brief.meta.product) : null,
  });

  document.documentElement.lang = view.htmlLang;
  document.title = view.title;
  setMetaDescription(view.description);
  root.innerHTML = view.body;
  bindNavigation();
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
