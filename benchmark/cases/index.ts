import { irb001, irb001Fidelity } from "./irb-001.ts";
import { irb002, irb002Fidelity } from "./irb-002.ts";
import { irb003, irb003Fidelity } from "./irb-003.ts";
import { irb004, irb004Fidelity } from "./irb-004.ts";
import { irb005, irb005Fidelity } from "./irb-005.ts";
import { irb006, irb006Fidelity } from "./irb-006.ts";
import { irb007, irb007Fidelity } from "./irb-007.ts";
import { irb008, irb008Fidelity } from "./irb-008.ts";
import { irb009, irb009Fidelity } from "./irb-009.ts";
import { irb010, irb010Fidelity } from "./irb-010.ts";
import { irb011, irb011Fidelity } from "./irb-011.ts";
import { irb012, irb012Fidelity } from "./irb-012.ts";
import { irb013, irb013Fidelity } from "./irb-013.ts";
import { irb014, irb014Fidelity } from "./irb-014.ts";
import { irb015, irb015Fidelity } from "./irb-015.ts";
import { irb016, irb016Fidelity } from "./irb-016.ts";
import { irb017, irb017Fidelity } from "./irb-017.ts";
import { irb018, irb018Fidelity } from "./irb-018.ts";
import { irb019, irb019Fidelity } from "./irb-019.ts";
import { irb020, irb020Fidelity } from "./irb-020.ts";
import type { BenchmarkCase } from "../types.ts";

/** All IRB cases currently defined (PASS and BLOCKED stubs). */
export const IRB_CASES: BenchmarkCase[] = [
  irb001,
  irb002,
  irb003,
  irb004,
  irb005,
  irb006,
  irb007,
  irb008,
  irb009,
  irb010,
  irb011,
  irb012,
  irb013,
  irb014,
  irb015,
  irb016,
  irb017,
  irb018,
  irb019,
  irb020,
];

export const IRB_FIDELITY = {
  "IRB-001": irb001Fidelity,
  "IRB-002": irb002Fidelity,
  "IRB-003": irb003Fidelity,
  "IRB-004": irb004Fidelity,
  "IRB-005": irb005Fidelity,
  "IRB-006": irb006Fidelity,
  "IRB-007": irb007Fidelity,
  "IRB-008": irb008Fidelity,
  "IRB-009": irb009Fidelity,
  "IRB-010": irb010Fidelity,
  "IRB-011": irb011Fidelity,
  "IRB-012": irb012Fidelity,
  "IRB-013": irb013Fidelity,
  "IRB-014": irb014Fidelity,
  "IRB-015": irb015Fidelity,
  "IRB-016": irb016Fidelity,
  "IRB-017": irb017Fidelity,
  "IRB-018": irb018Fidelity,
  "IRB-019": irb019Fidelity,
  "IRB-020": irb020Fidelity,
} as const;

export const IRB_PASS_CASES = IRB_CASES.filter(
  (c) => IRB_FIDELITY[c.id as keyof typeof IRB_FIDELITY] === "PASS",
);

export {
  irb001,
  irb002,
  irb003,
  irb004,
  irb005,
  irb006,
  irb007,
  irb008,
  irb009,
  irb010,
  irb011,
  irb012,
  irb013,
  irb014,
  irb015,
  irb016,
  irb017,
  irb018,
  irb019,
  irb020,
  irb001Fidelity,
  irb002Fidelity,
  irb003Fidelity,
  irb004Fidelity,
  irb005Fidelity,
  irb006Fidelity,
  irb007Fidelity,
  irb008Fidelity,
  irb009Fidelity,
  irb010Fidelity,
  irb011Fidelity,
  irb012Fidelity,
  irb013Fidelity,
  irb014Fidelity,
  irb015Fidelity,
  irb016Fidelity,
  irb017Fidelity,
  irb018Fidelity,
  irb019Fidelity,
  irb020Fidelity,
};
