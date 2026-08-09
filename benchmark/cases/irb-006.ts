import type { BenchmarkCase } from "../types.ts";

/**
 * Fidelity: PASS
 * T0 source: Amazon press release, 2006-03-14
 *   https://press.aboutamazon.com/2006/3/amazon-web-services-launches
 * Ground-truth later outcome: not required for T0 S3 launch thesis.
 */
export const irb006Fidelity = "PASS" as const;

export const irb006: BenchmarkCase = {
  id: "IRB-006",
  title: "Amazon S3",
  frozenDate: "2006-03-14",
  input: {
    text: "Amazon Web Services press release (2006-03-14): Amazon announces Amazon S3, a simple storage service offering software developers a highly scalable, reliable, and low-latency data storage infrastructure at very low costs. Amazon states S3 is available at http://aws.amazon.com/s3.",
  },
  groundTruth: {
    facts: [
      "T0: AWS announces Amazon S3 on 2006-03-14.",
      "T0: Amazon describes S3 as highly scalable, reliable, low-latency storage for software developers at very low costs.",
      "T0: Amazon states S3 is available via aws.amazon.com/s3.",
    ],
    customerProblem:
      "T0: Software developers need scalable storage infrastructure without building it themselves.",
    leadingSignal:
      "T0: Amazon launches S3 as an API-accessible pay-as-you-go object storage service.",
    change:
      "T0: Application storage can be procured as a cloud web service rather than only as self-operated storage infrastructure.",
    reasoning:
      "T0 chain: developers need scalable storage → self-operated infrastructure is costly/slow to scale → S3 offers API storage at low cost → value reallocates toward cloud object-storage services.",
    valueReallocation:
      "T0 thesis: value shifts from self-operated/on-prem storage buildouts toward cloud object-storage services.",
    winner: "T0 thesis: Amazon via S3.",
    evidence: [
      "Amazon press release 2006-03-14: S3 launch as scalable/reliable/low-latency developer storage service.",
    ],
    verification: "Unknown",
    marketBlindSpot:
      "T0 risk: storage value may still be framed mainly as hardware while API-delivered object storage captures application budgets.",
  },
  scoringCriteria: {
    facts: "Only 2006-03-14 Amazon PR attributes.",
    customerProblem: "Developer need for scalable storage infrastructure.",
    leadingSignal: "S3 launch disclosure.",
    reasoning: "Scale need → cloud object storage value.",
    valueReallocation: "Toward cloud object storage.",
    evidence: "Announcement-grounded only.",
  },
};

export default irb006;
