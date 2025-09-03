"use client";

import {
  Snippet,
  SnippetCopyButton,
  SnippetHeader,
  SnippetTabsContent,
  SnippetTabsList,
  SnippetTabsTrigger,
} from "@repo/snippet";
import { useState } from "react";

const commands = [
  {
    label: "npm",
    code: "npx next-forge@latest init",
  },
  {
    label: "yarn",
    code: "yarn dlx next-forge@latest init",
  },
  {
    label: "pnpm",
    code: "pnpx next-forge@latest init",
  },
  {
    label: "bun",
    code: "bunx next-forge@latest init",
  },
];

const Example = () => {
  const [value, setValue] = useState(commands[0].label);
  const activeCommand = commands.find((command) => command.label === value);

  return (
    <Snippet onValueChange={setValue} value={value}>
      <SnippetHeader>
        <SnippetTabsList>
          {commands.map((command) => (
            <SnippetTabsTrigger key={command.label} value={command.label}>
              {command.label}
            </SnippetTabsTrigger>
          ))}
        </SnippetTabsList>
        {activeCommand && (
          <SnippetCopyButton
            onCopy={() =>
              console.log(`Copied "${activeCommand.code}" to clipboard`)
            }
            onError={() =>
              console.error(
                `Failed to copy "${activeCommand.code}" to clipboard`
              )
            }
            value={activeCommand.code}
          />
        )}
      </SnippetHeader>
      {commands.map((command) => (
        <SnippetTabsContent key={command.label} value={command.label}>
          {command.code}
        </SnippetTabsContent>
      ))}
    </Snippet>
  );
};

export default Example;
