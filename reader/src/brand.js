/**
 * Public brand mark. Layout assumes a short Latin wordmark + optional Chinese subtitle.
 */
export const BRAND = {
  mark: "FORESIGHT",
  subtitle: "预见",
  tagline: {
    en: "Primary evidence. See where value flows.",
    zh: "第一手证据，预见价值流向。",
  },
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

export function withBrandPrefix(locale, rest) {
  return `${getBrandMark(locale)} — ${rest}`;
}

export function withBrandFooter(locale, rest) {
  return `${getBrandMark(locale)} · ${rest}`;
}
