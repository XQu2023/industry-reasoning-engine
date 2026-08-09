import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { IRB_CASES, IRB_FIDELITY } from "../benchmark/cases/index.ts";
import { ReasoningEngine } from "../src/reasoning-engine.ts";
import { OpenAIStageExecutor } from "../src/openai-stage-executor.ts";

function loadEnvLocal(): void {
  if (process.env.OPENAI_API_KEY) return;
  try {
    const text = readFileSync(resolve(process.cwd(), ".env.local"), "utf8");
    for (const line of text.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq <= 0) continue;
      const key = trimmed.slice(0, eq).trim();
      const value = trimmed.slice(eq + 1).trim();
      if (key === "OPENAI_API_KEY" && value) {
        process.env.OPENAI_API_KEY = value;
      }
    }
  } catch {
    // optional when env already set
  }
}

async function main(): Promise<void> {
  loadEnvLocal();
  if (!process.env.OPENAI_API_KEY) {
    console.error("OPENAI_API_KEY is required.");
    process.exit(1);
  }

  const engine = new ReasoningEngine(new OpenAIStageExecutor());

  for (const benchmarkCase of IRB_CASES) {
    const fidelity = IRB_FIDELITY[benchmarkCase.id as keyof typeof IRB_FIDELITY];
    console.log("=".repeat(72));
    console.log(`Case ID: ${benchmarkCase.id}`);
    console.log(`Title: ${benchmarkCase.title}`);
    console.log(`frozenDate: ${benchmarkCase.frozenDate}`);
    console.log(`Fidelity: ${fidelity}`);
    console.log("-".repeat(72));

    try {
      const result = await engine.run(benchmarkCase.input);
      console.log("Generated GoldCase:");
      console.log(JSON.stringify(result, null, 2));
      console.log("Ready for evaluator scoring.");
    } catch (error) {
      console.error("RUN FAILED:");
      console.error(error);
      console.log("Ready for evaluator scoring.");
    }
    console.log("");
  }
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
