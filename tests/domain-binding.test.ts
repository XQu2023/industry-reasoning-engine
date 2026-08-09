import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  detectDomainFromT0Facts,
  domainFramingInstruction,
  t0TextForDomainDetection,
} from "../src/domain-binding.ts";

describe("domain-binding", () => {
  it("detects AI Computing from accelerator T0 facts", () => {
    const domain = detectDomainFromT0Facts(
      "NVIDIA announced H200 Tensor Core GPU with HBM3e memory for AI training workloads.",
    );
    assert.equal(domain, "AI Computing");
  });

  it("detects Consumer Electronics from App Store / iPhone T0 facts", () => {
    const domain = detectDomainFromT0Facts(
      "Apple announces App Store with native iPhone applications available via iTunes.",
    );
    assert.equal(domain, "Consumer Electronics");
  });

  it("detects Cloud Infrastructure from Kubernetes T0 facts", () => {
    const domain = detectDomainFromT0Facts(
      "Google announces Kubernetes, an open-source container manager that deploys containers into a fleet of machines.",
    );
    assert.equal(domain, "Cloud Infrastructure");
  });

  it("detects Biotechnology from mRNA T0 facts", () => {
    const domain = detectDomainFromT0Facts(
      "Moderna announces messenger RNA Therapeutics as a novel biotherapeutic modality for therapeutic proteins.",
    );
    assert.equal(domain, "Biotechnology");
  });

  it("detects Manufacturing from Gigafactory T0 facts", () => {
    const domain = detectDomainFromT0Facts(
      "Tesla plans a Gigafactory with battery manufacturing partners to reduce lithium-ion cell costs.",
    );
    assert.equal(domain, "Manufacturing");
  });

  it("uses General Technology when confidence is low", () => {
    const domain = detectDomainFromT0Facts("A company made an announcement today.");
    assert.equal(domain, "General Technology");
  });

  it("prefers extracted T0 fact texts over empty handling", () => {
    const text = t0TextForDomainDetection({
      originalInput: { text: "ignored when facts exist" },
      facts: [{ text: "Apple Watch unveiled with WatchKit for iPhone." }],
    });
    assert.match(text, /Apple Watch/);
    assert.equal(detectDomainFromT0Facts(text), "Consumer Electronics");
  });

  it("framing instruction binds domain without inventing facts", () => {
    const instruction = domainFramingInstruction("Cloud Infrastructure");
    assert.match(instruction, /Cloud Infrastructure/);
    assert.match(instruction, /framing only/i);
    assert.doesNotMatch(instruction, /AI Computing Supply Chain only/);
  });
});
