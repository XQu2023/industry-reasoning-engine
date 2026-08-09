import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { ReasoningEngine } from "../src/reasoning-engine.ts";
import { OpenAIStageExecutor } from "../src/openai-stage-executor.ts";
import { ai001Input } from "../tests/fixtures/ai-001.ts";

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
    // .env.local is optional when OPENAI_API_KEY is already set
  }
}

async function main(): Promise<void> {
  loadEnvLocal();
  if (!process.env.OPENAI_API_KEY) {
    console.error("OPENAI_API_KEY is required for manual AI-001 run.");
    process.exit(1);
  }

  const engine = new ReasoningEngine(new OpenAIStageExecutor());
  const result = await engine.run(ai001Input);
  console.log(JSON.stringify(result, null, 2));
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
