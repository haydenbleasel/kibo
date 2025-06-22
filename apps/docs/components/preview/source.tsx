'use client';

import { SiReact } from '@icons-pack/react-simple-icons';
import {
  type BundledLanguage,
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockItem,
} from '@repo/code-block';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type PreviewSourceProps = {
  source: { name: string; source: string }[];
};

const parseCode = (code: string) =>
  code
    .replace(/@repo\/shadcn-ui\//g, '@/')
    .replace(/@repo\//g, '@/components/ui/kibo-ui/');

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
        <AccordionContent>
          <CodeBlock
            className="overflow-auto rounded-none border-none"
            data={[
              {
                language: 'tsx',
                filename: name,
                code: parseCode(source),
              },
            ]}
            defaultValue="tsx"
          >
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
