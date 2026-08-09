/** Fixed PVF horizons from T0 (PREDICTION_VALIDATION_FRAMEWORK v1.0). */

export const HORIZONS = [
  { code: "H3", months: 3 },
  { code: "H6", months: 6 },
  { code: "H12", months: 12 },
  { code: "H24", months: 24 },
  { code: "H60", months: 60 },
];

export function addMonths(isoDate, months) {
  const [y0, m0, d0] = isoDate.split("-").map(Number);
  const total = m0 - 1 + months;
  const y = y0 + Math.floor(total / 12);
  const m = (total % 12) + 1;
  for (let day = d0; day >= 1; day -= 1) {
    const candidate = `${y}-${String(m).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    if (Number.isNaN(Date.parse(candidate))) continue;
    return candidate;
  }
  return `${y}-${String(m).padStart(2, "0")}-01`;
}

export function compareIso(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}
