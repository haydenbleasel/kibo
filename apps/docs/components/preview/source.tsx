"use client";

import { SiReact } from "@icons-pack/react-simple-icons";
import {
  type BundledLanguage,
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockItem,
} from "@repo/code-block";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type PreviewSourceProps = {
  source: { name: string; source: string }[];
};

const parseCode = (code: string) =>
  code
    .replace(/@repo\/shadcn-ui\//g, "@/")
    .replace(/@repo\//g, "@/components/ui/kibo-ui/");

export const PreviewSource = ({ source }: PreviewSourceProps) => (
  <Accordion collapsible defaultValue={source.at(0)?.name} type="single">
    {source.map(({ name, source }) => (
      <AccordionItem key={name} value={name}>
        <AccordionTrigger className="rounded-none bg-secondary px-4">
          <div className="flex items-center gap-2 text-sm">
            <SiReact className="size-4 text-muted-foreground" />
            <span>{name}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent
          className="overflow-visible"
          style={{ overflow: "visible" }}
        >
          <CodeBlock
            className="overflow-visible rounded-none border-none"
            data={[
              {
                language: "tsx",
                filename: name,
                code: parseCode(source),
              },
            ]}
            defaultValue="tsx"
          >
            <div className="sticky top-0 z-1">
              <CodeBlockCopyButton className="absolute top-1 right-1.5" />
            </div>
            <CodeBlockBody>
              {(item) => (
                <CodeBlockItem key={item.language} value={item.language}>
                  <CodeBlockContent language={item.language as BundledLanguage}>
                    {item.code}
                  </CodeBlockContent>
                </CodeBlockItem>
              )}
            </CodeBlockBody>
          </CodeBlock>
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);
