import type { BenchmarkCase } from "../types.ts";

/**
 * Fidelity: PASS
 * T0 source: AWS What's New, 2006-08-24
 *   https://aws.amazon.com/about-aws/whats-new/2006/08/24/announcing-amazon-elastic-compute-cloud-amazon-ec2---beta/
 * Later ground-truth source: Amazon press release, 2008-10-22
 *   https://press.aboutamazon.com/2008/10/amazon-web-services-launches-amazon-ec2-for-windows
 *   (announces Amazon EC2 General Availability and SLA after exiting beta)
 */
export const irb010Fidelity = "PASS" as const;

export const irb010: BenchmarkCase = {
  id: "IRB-010",
  title: "AWS EC2",
  frozenDate: "2006-08-24",
  input: {
    text: "AWS What's New (2006-08-24): Amazon announces Amazon Elastic Compute Cloud (Amazon EC2) beta, a web service that provides resizable compute capacity in the cloud. Amazon states EC2 is designed to make web-scale computing easier for developers; that it provides complete control of computing resources on Amazon’s computing environment; that new server instances can be obtained and booted in minutes to scale capacity up and down; and that customers pay only for capacity actually used.",
  },
  groundTruth: {
    facts: [
      "T0: Amazon announces Amazon EC2 beta on 2006-08-24.",
      "T0: EC2 is described as resizable compute capacity in the cloud via a web service interface.",
      "T0: Amazon states instances can be obtained/booted in minutes and customers pay only for capacity used.",
    ],
    customerProblem:
      "T0: Developers need web-scale compute capacity without long lead times to obtain and manage servers.",
    leadingSignal:
      "T0: Amazon launches EC2 beta as on-demand, pay-for-use compute in the cloud.",
    change:
      "T0: Application compute can be procured as elastic cloud instances rather than only by buying/operating fixed servers.",
    reasoning:
      "T0 chain: developers need scalable compute quickly → self-operated servers are slow/expensive to scale → EC2 offers minutes-scale elastic capacity with pay-for-use economics → value reallocates toward cloud compute platforms.",
    valueReallocation:
      "T0 thesis: value shifts from self-operated server procurement toward on-demand cloud compute services. LATER verified outcome: Amazon announces EC2 general availability and an SLA after exiting beta (2008-10-22), confirming EC2 matured into a production cloud compute platform.",
    winner: "Amazon via EC2 cloud compute platform.",
    evidence: [
      "T0: AWS What's New 2006-08-24 EC2 beta announcement attributes.",
    ],
    verification:
      "LATER (not T0): Amazon press release 2008-10-22 — EC2 exits beta into General Availability and offers a Service Level Agreement (99.95% availability within a Region over a trailing 365-day period).",
    marketBlindSpot:
      "T0 risk: compute value may still be framed as owned servers while API-delivered elastic compute captures application budgets.",
  },
  scoringCriteria: {
    facts: "Only 2006-08-24 AWS EC2 beta announcement statements.",
    customerProblem: "Need for fast, scalable developer compute capacity.",
    leadingSignal: "EC2 beta launch disclosure.",
    reasoning: "Scale need → elastic cloud compute value.",
    valueReallocation: "Toward cloud compute; GA/SLA only as later verification.",
    evidence: "T0 What's New only; 2008 GA stays in verification.",
  },
};

export default irb010;
