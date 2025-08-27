#!/usr/bin/env node

import { execSync } from 'node:child_process';

const args = process.argv.slice(2);

if (args.length < 2 || args[0] !== 'add') {
  console.log('Usage: npx kibo-ui add [...packages]');
  process.exit(1);
}

const packageNames = args.slice(1);

for (const packageName of packageNames) {
  if (!packageName.trim()) {
    continue;
  }

  console.log(`Adding ${packageName} component...`);

  const url = packageName === 'ai' ? 
    new URL(
      'all.json',
      'https://registry.ai-sdk.dev/'
    ) :
    new URL(
      `r/${packageName}.json`,
      'https://www.kibo-ui.com'
    );

  execSync(`npx -y shadcn@latest add ${url.toString()}`);
}
