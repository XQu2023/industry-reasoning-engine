export const SUPPORTED_LOCALES = ["en", "zh"];
/** Future-ready locale prefixes (not implemented as content yet). */
export const FUTURE_LOCALES = ["ja", "de", "fr"];
export const ALL_LOCALE_PREFIXES = [...SUPPORTED_LOCALES.filter((l) => l !== "en"), ...FUTURE_LOCALES];
export const DEFAULT_LOCALE = "en";
export const DEFAULT_SLUG = "db-001";
export const LOCALE_STORAGE_KEY = "decision-brief-reader-locale";

export function parseRoute(pathname = "/") {
  const parts = String(pathname).split("/").filter(Boolean);
  let locale = DEFAULT_LOCALE;
  let rest = parts;

  if (parts[0] && ALL_LOCALE_PREFIXES.includes(parts[0])) {
    locale = parts[0];
    rest = parts.slice(1);
  } else if (parts[0] === "en") {
    locale = "en";
    rest = parts.slice(1);
  }

  if (rest.length === 0) {
    return { locale, type: "home", slug: null };
  }

  if (rest[0] === "start" && rest.length === 1) {
    return { locale, type: "start", slug: null };
  }

  if (rest[0] === "briefs" && rest[1]) {
    return { locale, type: "brief", slug: rest[1].toLowerCase() };
  }

  return { locale, type: "notfound", slug: null };
}

export function buildBriefPath(locale, slug = DEFAULT_SLUG) {
  const prefix = locale === "en" ? "" : `/${locale}`;
  return `${prefix}/briefs/${slug}`;
}

export function buildHomePath(locale) {
  return locale === "en" ? "/" : `/${locale}`;
}

export function buildStartPath(locale) {
  const prefix = locale === "en" ? "" : `/${locale}`;
  return `${prefix}/start`;
}

export function switchLocalePath(pathname, nextLocale) {
  const current = parseRoute(pathname);
  if (current.type === "brief" && current.slug) {
    return buildBriefPath(nextLocale, current.slug);
  }
  if (current.type === "start") {
    return buildStartPath(nextLocale);
  }
  if (current.type === "home") {
    return buildHomePath(nextLocale);
  }
  return buildHomePath(nextLocale);
}

export function rememberLocale(locale) {
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    /* ignore */
  }
}

export function readRememberedLocale() {
  try {
    const value = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (SUPPORTED_LOCALES.includes(value)) return value;
  } catch {
    /* ignore */
  }
  return null;
}

export function resolveInitialPath(pathname) {
  const route = parseRoute(pathname);
  const remembered = typeof window !== "undefined" ? readRememberedLocale() : null;

  if (
    route.type === "home"
    && route.locale === DEFAULT_LOCALE
    && remembered
    && remembered !== DEFAULT_LOCALE
    && SUPPORTED_LOCALES.includes(remembered)
    && (pathname === "/" || pathname === "")
  ) {
    return buildHomePath(remembered);
  }

  return null;
}
