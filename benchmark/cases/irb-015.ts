import type { BenchmarkCase } from "../types.ts";

/**
 * Fidelity: PASS
 * T0 source: Amazon press release, 2014-11-13
 *   https://press.aboutamazon.com/2014/11/amazon-web-services-announces-aws-lambda
 * Later ground-truth source: AWS Lambda release history / AWS News Blog GA
 *   https://docs.aws.amazon.com/lambda/latest/dg/lambda-releases.html (GA 2015-04-09)
 *   https://aws.amazon.com/blogs/aws/aws-lambda-update-production-status-and-a-focus-on-mobile-apps/
 *   https://aws.amazon.com/blogs/compute/aws-lambda-is-generally-available/
 */
export const irb015Fidelity = "PASS" as const;

export const irb015: BenchmarkCase = {
  id: "IRB-015",
  title: "AWS Lambda",
  frozenDate: "2014-11-13",
  input: {
    text: "Amazon press release (2014-11-13): At AWS re:Invent, Amazon Web Services announces AWS Lambda, a compute service that runs developers’ code in response to events and automatically manages the compute resources. AWS states Lambda starts running code within milliseconds of an event such as an image upload, in-app activity, website click, or connected-device output, without provisioning or managing virtual servers. Developers pay only for requests served and compute time, charged in 100-millisecond increments. Preview starts that day; customers write JavaScript to act on events (e.g. S3 uploads, DynamoDB updates, Kinesis streams) and Lambda scales compute across Availability Zones as needed.",
  },
  groundTruth: {
    facts: [
      "T0: AWS announces AWS Lambda preview on 2014-11-13 as event-driven compute that auto-manages resources.",
      "T0: Lambda runs code within milliseconds of events; no need to provision/manage servers.",
      "T0: Pricing is per request and compute time in 100ms increments; JavaScript functions at launch.",
    ],
    customerProblem:
      "T0: Developers need compute that reacts to data/events without managing and scaling server fleets.",
    leadingSignal:
      "T0: AWS launches Lambda preview as serverless, event-triggered compute.",
    change:
      "T0: Cloud compute is offered as pay-per-invocation functions on events, not only always-on instances.",
    reasoning:
      "T0 chain: event-driven apps require managed fleets → Lambda runs code on events without servers → value can reallocate toward function/runtime platforms versus EC2-centric ops if production adoption follows.",
    valueReallocation:
      "T0 thesis: value shifts toward event-driven serverless compute (Lambda) versus provisioned server fleets for many dynamic workloads. LATER verified outcome: AWS declares Lambda generally available / ready for production workloads (2015-04-09).",
    winner: "AWS Lambda serverless compute platform (later verified at GA).",
    evidence: [
      "T0: Amazon 2014-11-13 Lambda PR — event-driven compute; auto resource management; 100ms billing; preview.",
    ],
    verification:
      "LATER (not T0): AWS Lambda GA / production status on 2015-04-09 (AWS docs release history + AWS blogs stating ready for production workloads).",
    marketBlindSpot:
      "T0 risk: framing Lambda as a niche glue feature while underweighting a shift away from always-on compute for event workloads.",
  },
  scoringCriteria: {
    facts: "Only 2014-11-13 Amazon Lambda PR statements.",
    customerProblem: "Event-response compute without managing fleets.",
    leadingSignal: "Lambda preview announcement.",
    reasoning: "Event ops pain → Lambda functions → serverless value shift.",
    valueReallocation: "Toward Lambda; GA/production only as later verification.",
    evidence: "T0 Amazon PR only; GA stays in verification.",
  },
};

export default irb015;
