import type { BenchmarkCase } from "../types.ts";

/**
 * Fidelity: PASS
 * T0 source: Google Open Source Blog / GCP cross-post, 2014-06-10
 *   https://opensource.googleblog.com/2014/06/an-update-on-container-support-on.html
 * Later ground-truth source: Google Cloud Platform Blog, 2015-07-21
 *   https://cloudplatform.googleblog.com/2015/07/Kubernetes-V1-Released.html
 *   (Kubernetes v1 production-ready release; CNCF seeded with Kubernetes)
 */
export const irb011Fidelity = "PASS" as const;

export const irb011: BenchmarkCase = {
  id: "IRB-011",
  title: "Kubernetes",
  frozenDate: "2014-06-10",
  input: {
    text: "Google Open Source Blog (2014-06-10, Eric Brewer): Google announces Kubernetes, an open-source container manager that deploys containers into a fleet of machines, provides health management and replication capabilities, and makes it easy for containers to connect to one another and the outside world. Google states Kubernetes was developed from the outset to be an extensible, community-supported project, with source and documentation on GitHub.",
  },
  groundTruth: {
    facts: [
      "T0: Google announces Kubernetes as an open-source container manager (2014-06-10).",
      "T0: Kubernetes deploys containers across a fleet of machines with health management and replication.",
      "T0: Google positions Kubernetes as an extensible, community-supported project on GitHub.",
    ],
    customerProblem:
      "T0: Developers need a way to schedule, health-manage, and connect containers across fleets of machines without Google-scale internal systems.",
    leadingSignal:
      "T0: Google open-sources Kubernetes as a lean container manager for Docker-era workloads.",
    change:
      "T0: Container orchestration is offered as open-source community infrastructure rather than proprietary Google-only tooling.",
    reasoning:
      "T0 chain: operators need container scheduling/health/networking → Kubernetes provides that open-source manager → control plane and orchestration value can concentrate around Kubernetes if adoption follows.",
    valueReallocation:
      "T0 thesis: value shifts toward open-source container orchestration (Kubernetes) versus ad-hoc Docker host management. LATER verified outcome: Kubernetes reaches v1 production-ready status and is contributed to the Cloud Native Computing Foundation (2015-07-21).",
    winner: "Kubernetes / CNCF open-source orchestration layer (later verified).",
    evidence: [
      "T0: Google Open Source Blog 2014-06-10 Kubernetes announcement (schedule/deploy, health, replication, networking, GitHub).",
    ],
    verification:
      "LATER (not T0): Google Cloud Platform Blog 2015-07-21 — Kubernetes V1 released as production-ready; Kubernetes seeded to newly formed CNCF.",
    marketBlindSpot:
      "T0 risk: observers may treat containers as a Docker packaging story while underweighting orchestration/control-plane lock-in.",
  },
  scoringCriteria: {
    facts: "Only 2014-06-10 Google Kubernetes announcement statements.",
    customerProblem: "Need to schedule/manage/connect containers across machines.",
    leadingSignal: "Open-source Kubernetes announcement.",
    reasoning: "Container ops need → Kubernetes manager → orchestration value.",
    valueReallocation:
      "Toward Kubernetes orchestration; v1/CNCF only as later verification.",
    evidence: "T0 Google blog only; v1/CNCF stays in verification.",
  },
};

export default irb011;
