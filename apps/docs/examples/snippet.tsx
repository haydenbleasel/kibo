"use client";

import {
  Snippet,
  SnippetCopyButton,
  SnippetHeader,
  SnippetTabsContent,
  SnippetTabsList,
  SnippetTabsTrigger,
} from "@repo/snippet";
import { BoxIcon, HeartIcon } from "lucide-react";
import { useState } from "react";

const commands = [
  {
    label: "kibo-ui",
    icon: HeartIcon,
    code: "npx kibo-ui@latest add snippet",
  },
  {
    label: "shadcn",
    icon: BoxIcon,
    code: "npx shadcn@latest add https://www.kibo-ui.com/r/snippet.json",
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
              <command.icon size={14} />
              <span>{command.label}</span>
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
