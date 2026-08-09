import type { BenchmarkCase } from "../types.ts";

/**
 * Fidelity: PASS
 * T0 source: Apple Newsroom, 2020-11-10
 *   https://www.apple.com/newsroom/2020/11/apple-unleashes-m1/
 * Later ground-truth source: Apple Newsroom, 2023-06-05
 *   https://www.apple.com/newsroom/2023/06/apple-unveils-new-mac-studio-and-brings-apple-silicon-to-mac-pro/
 *   (Mac Pro with M2 Ultra completes Mac transition to Apple silicon)
 */
export const irb013Fidelity = "PASS" as const;

export const irb013: BenchmarkCase = {
  id: "IRB-013",
  title: "Apple M1",
  frozenDate: "2020-11-10",
  input: {
    text: "Apple Newsroom (2020-11-10): Apple announces M1, the first chip designed specifically for the Mac and described as the most powerful chip Apple has ever created. Apple states M1 is a system on a chip (SoC) with unified memory architecture, the first personal computer chip built using 5-nanometer process technology with 16 billion transistors. Apple claims up to 3.5x faster CPU performance, up to 6x faster GPU performance, up to 15x faster machine learning, and battery life up to 2x longer than previous-generation Macs. Apple states M1 powers new MacBook Air, 13-inch MacBook Pro, and Mac mini, and that the transition to Apple silicon will take about two years to complete.",
  },
  groundTruth: {
    facts: [
      "T0: Apple announces M1 as first Mac-specific Apple-designed SoC (2020-11-10).",
      "T0: Apple claims major CPU/GPU/ML performance and battery-life gains vs prior Macs.",
      "T0: Apple states a ~two-year transition to Apple silicon beginning with Air / 13-inch Pro / Mac mini.",
    ],
    customerProblem:
      "T0: Mac users need higher performance-per-watt and longer battery life than prior Intel-based Macs deliver.",
    leadingSignal:
      "T0: Apple launches M1 and begins Mac transition from Intel CPUs to Apple silicon.",
    change:
      "T0: Mac CPU value shifts from merchant x86 (Intel) toward Apple’s vertically integrated SoC.",
    reasoning:
      "T0 chain: Mac needs better efficiency/performance → Apple ships its own SoC → if transition completes, silicon/platform value reallocates from Intel Mac CPUs to Apple silicon.",
    valueReallocation:
      "T0 thesis: value shifts from Intel Mac processors toward Apple’s custom Mac SoCs. LATER verified outcome: Apple states Mac transition to Apple silicon is complete with M2 Ultra Mac Pro (2023-06-05).",
    winner: "Apple via Apple silicon Mac SoCs (later verified).",
    evidence: [
      "T0: Apple Newsroom 2020-11-10 M1 announcement (first Mac chip, SoC/UMA claims, performance claims, two-year transition).",
    ],
    verification:
      "LATER (not T0): Apple Newsroom 2023-06-05 — Mac Pro with M2 Ultra; Apple states Mac transition to Apple silicon is complete.",
    marketBlindSpot:
      "T0 risk: framing M1 as a one-off laptop refresh while underweighting CPU supplier displacement across the Mac lineup.",
  },
  scoringCriteria: {
    facts: "Only 2020-11-10 Apple M1 PR statements.",
    customerProblem: "Mac performance-per-watt / battery-life gap at T0.",
    leadingSignal: "M1 launch and Apple silicon transition start.",
    reasoning: "Efficiency need → Apple SoC → Intel Mac CPU displacement.",
    valueReallocation:
      "Toward Apple silicon; completed transition only as later verification.",
    evidence: "T0 Apple PR only; 2023 completion stays in verification.",
  },
};

export default irb013;
