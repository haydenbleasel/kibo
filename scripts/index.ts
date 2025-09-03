#!/usr/bin/env node

import { spawnSync } from "node:child_process";

const args = process.argv.slice(2);

if (args.length < 2 || args[0] !== "add") {
  console.log("Usage: npx kibo-ui add [...packages]");
  process.exit(1);
}

const packageNames = args.slice(1);

for (const packageName of packageNames) {
  if (!packageName.trim()) {
    continue;
  }

  console.log(`Adding ${packageName} component...`);

  const url =
    packageName === "ai"
      ? new URL("all.json", "https://registry.ai-sdk.dev/")
      : new URL(`r/${packageName}.json`, "https://www.kibo-ui.com");

  const command = `npx -y shadcn@latest add ${url.toString()}`;

  const result = spawnSync(command, {
    stdio: "inherit",
    shell: true,
  });

  if (result.error) {
    console.error(`Failed to add ${packageName}:`, result.error.message);
    process.exit(1);
  } else if (result.status !== 0) {
    console.error(`Command failed with exit code ${result.status}`);
    process.exit(1);
  }
}
