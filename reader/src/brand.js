/**
 * FORESIGHT brand mark — single source for chrome (see docs/BRAND_SYSTEM.md).
 *
 * Logo system:
 * - Official logo: Circle + FORESIGHT wordmark
 * - Product logo: FORESIGHT + 预见 subtitle
 * - Circle: circular F monogram (same geometry as Journal ForesightMark)
 */
export const BRAND = {
  mark: "FORESIGHT",
  subtitle: "预见",
  tagline: {
    en: "Primary evidence. See where value flows.",
    zh: "第一手证据，预见价值流向。",
  },
  footerLines: ["Understand how value moves.", "Think independently."],
};

/** Primary Latin wordmark (nav, hero, footer). */
export function getBrandMark(_locale = "en") {
  return BRAND.mark;
}

/** Chinese subtitle shown with the mark. */
export function getBrandSubtitle(_locale = "en") {
  return BRAND.subtitle;
}

export function getBrandTagline(locale = "en") {
  return BRAND.tagline[locale] ?? BRAND.tagline.en;
}

/** Fixed brand footer lines (Journal + site chrome). */
export function getBrandFooterLines() {
  return BRAND.footerLines;
}

/**
 * Circle monogram SVG. Geometry matches Journal `ForesightMark`
 * (viewBox 0 0 24 24, F at y=15.5). Do not alter.
 */
export function renderBrandCircleHtml(className = "brand-circle") {
  return `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="12"></circle><text x="12" y="15.5" text-anchor="middle">F</text></svg>`;
}

export function withBrandPrefix(locale, rest) {
  return `${getBrandMark(locale)} — ${rest}`;
}

export function withBrandFooter(locale, rest) {
  return `${getBrandMark(locale)} · ${rest}`;
}
