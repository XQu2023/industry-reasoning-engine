import type { EvidenceItem, GoldCase } from "./types.ts";

export type ValidationResult = {
  valid: boolean;
  errors: string[];
};

const REQUIRED_STRING_FIELDS = [
  "customerProblem",
  "leadingSignal",
  "change",
  "reasoning",
  "valueReallocation",
  "winner",
  "verification",
  "marketBlindSpot",
] as const;

function isMissing(value: unknown): boolean {
  return value === undefined || value === null;
}

function isEmptyString(value: unknown): boolean {
  return typeof value !== "string" || value.trim() === "";
}

export function validateGoldCase(goldCase: GoldCase): ValidationResult {
  const errors: string[] = [];

  if (isMissing(goldCase)) {
    return { valid: false, errors: ["goldCase is missing"] };
  }

  for (const field of REQUIRED_STRING_FIELDS) {
    const value = goldCase[field];
    if (isMissing(value)) {
      errors.push(`${field} is missing`);
      continue;
    }
    if (isEmptyString(value)) {
      errors.push(`${field} is empty`);
    }
  }

  if (isMissing(goldCase.evidence)) {
    errors.push("evidence is missing");
  } else if (!Array.isArray(goldCase.evidence)) {
    errors.push("evidence must be an array");
  } else if (goldCase.evidence.length === 0) {
    errors.push("evidence is empty");
  } else {
    goldCase.evidence.forEach((item: EvidenceItem, index: number) => {
      if (isMissing(item) || isMissing(item.text) || isEmptyString(item.text)) {
        errors.push(`evidence[${index}].text is empty`);
      }
    });
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
