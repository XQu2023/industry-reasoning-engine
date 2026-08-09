import type { BenchmarkCase } from "../types.ts";

/**
 * Fidelity: PASS
 * T0 source: NVIDIA press release, 2006-11-08
 *   "NVIDIA Unveils CUDA—The GPU Computing Revolution Begins"
 *   Archived: https://web.archive.org/web/20200703112618/http:/www.nvidia.com/object/IO_37226.html
 * Ground-truth later outcome: not required for T0 success-path ecosystem thesis;
 *   keep later CUDA lock-in as interpretive, not as T0 fact.
 */
export const irb005Fidelity = "PASS" as const;

export const irb005: BenchmarkCase = {
  id: "IRB-005",
  title: "NVIDIA CUDA",
  frozenDate: "2006-11-08",
  input: {
    text: "NVIDIA press release (2006-11-08): NVIDIA unveils CUDA technology, described as a new architecture for computing on NVIDIA GPUs and the industry's first C-compiler development environment for the GPU. NVIDIA states CUDA is available on the GeForce 8800 and that a CUDA Software Developers Kit is available through the NVIDIA registered developer program.",
  },
  groundTruth: {
    facts: [
      "T0: NVIDIA unveils CUDA (2006-11-08).",
      "T0: NVIDIA presents CUDA as GPU computing architecture plus C-compiler environment for the GPU.",
      "T0: NVIDIA states availability on GeForce 8800 and SDK via registered developer program.",
    ],
    customerProblem:
      "T0: Developers need a practical way to use NVIDIA GPUs for general-purpose / computation-intensive applications beyond traditional graphics-only approaches.",
    leadingSignal:
      "T0: NVIDIA launches CUDA as a programmable GPU compute platform for developers.",
    change:
      "T0: Software development for NVIDIA GPUs begins accumulating around the CUDA programming model and toolchain.",
    reasoning:
      "T0 chain: developers need programmable GPU compute → CUDA provides a C-based path on NVIDIA GPUs → non-CUDA GPU compute paths are less accessible at T0 → CUDA-capable NVIDIA platform becomes more valuable → value reallocates toward NVIDIA's CUDA software/platform layer, not GPU silicon alone.",
    valueReallocation:
      "T0 thesis: value shifts toward CUDA software ecosystem / platform control relative to treating GPUs as interchangeable graphics hardware.",
    winner: "T0 thesis: NVIDIA via CUDA platform control.",
    evidence: [
      "NVIDIA CUDA press release 2006-11-08: CUDA architecture + C-compiler; GeForce 8800 availability; SDK for developers.",
    ],
    verification: "Unknown",
    marketBlindSpot:
      "T0 risk: observers may treat GPUs as interchangeable hardware and underweight software-ecosystem switching costs.",
  },
  scoringCriteria: {
    facts: "Only 2006-11-08 NVIDIA CUDA PR statements.",
    customerProblem: "GPGPU programmability need; no 2020s AI hindsight in T0 scoring.",
    leadingSignal: "CUDA launch disclosure.",
    reasoning: "Programmability → ecosystem → platform value.",
    valueReallocation: "Toward CUDA ecosystem/platform.",
    evidence: "Launch-PR grounded only.",
  },
};

export default irb005;
