"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@repo/shadcn-ui/components/ui/tooltip";
import {
  Snippet,
  SnippetCopyButton,
  SnippetHeader,
  SnippetTabsContent,
  SnippetTabsList,
  SnippetTabsTrigger,
} from "@repo/snippet";
import { track } from "@vercel/analytics/react";
import { InfoIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import kibo from "../public/logomark.svg";
import shadcn from "../public/shadcn.svg";

type InstallerProps = {
  packageName: string;
};

export const Installer = ({ packageName }: InstallerProps) => {
  const [value, setValue] = useState("kibo-ui");

  const commands = {
    "kibo-ui": {
      label: "Kibo UI CLI",
      image: kibo,
      code: `npx kibo-ui@latest add ${packageName}`,
    },
    namespace: {
      label: "Namespace",
      image: kibo,
      code: `npx shadcn@beta add @kibo-ui/${packageName}`,
    },
    shadcn: {
      label: "shadcn CLI",
      image: shadcn,
      code: `npx shadcn@latest add https://www.kibo-ui.com/r/${packageName}.json`,
    },
  };

  return (
    <Snippet
      className="not-prose shiki shiki-themes github-light github-dark"
      onValueChange={setValue}
      value={value}
    >
      <SnippetHeader>
        <SnippetTabsList>
          {Object.entries(commands).map(([key, command]) => (
            <SnippetTabsTrigger className="basis-auto" key={key} value={key}>
              <Image
                alt=""
                className="dark:invert"
                height={14}
                src={command.image}
                width={14}
              />
              {command.label}
              {key === "namespace" && (
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="size-4" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-sm text-sm">
                    Kibo UI is a{" "}
                    <a
                      className="underline"
                      href="https://github.com/shadcn-ui/ui/blob/main/apps/v4/public/r/registries.json"
                    >
                      trusted registry
                    </a>{" "}
                    so you can use it without configuring your{" "}
                    <code className="font-mono text-xs">components.json</code>{" "}
                    file.
                  </TooltipContent>
                </Tooltip>
              )}
            </SnippetTabsTrigger>
          ))}
        </SnippetTabsList>
        <SnippetCopyButton
          onCopy={() => {
            toast.success("Copied to clipboard");
            track("Copy installer code", {
              cli: value,
              package: packageName,
            });
          }}
          onError={() => toast.error("Failed to copy to clipboard")}
          value={commands[value as keyof typeof commands].code}
        />
      </SnippetHeader>
      {Object.entries(commands).map(([key, command]) => (
        <SnippetTabsContent key={key} value={key}>
          {command.code}
        </SnippetTabsContent>
      ))}
    </Snippet>
  );
};
