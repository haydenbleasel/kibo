import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@repo/shadcn-ui/components/ui/tabs';
import { cn } from '@repo/shadcn-ui/lib/utils';
import { CodeIcon, EyeIcon } from 'lucide-react';
import { PreviewCode } from './code';

type PreviewProps = {
  path: string;
  className?: string;
};

export const Preview = async ({ path, className }: PreviewProps) => {
  const code = await readFile(
    join(process.cwd(), 'examples', `${path}.tsx`),
    'utf-8'
  );

  const Component = await import(`../../examples/${path}.tsx`).then(
    (module) => module.default
  );

  const parsedCode = code
    .replace(/@repo\/shadcn-ui\//g, '@/')
    .replace(/@repo\//g, '@/components/ui/kibo-ui/');

  return (
    <Tabs
      defaultValue="preview"
      className={cn(
        'not-prose h-full max-h-[30rem] w-full gap-0 overflow-hidden rounded-lg border bg-background',
        className
      )}
    >
      <TabsList className="w-full rounded-none border-b">
        <TabsTrigger value="code">
          <CodeIcon size={16} className="text-muted-foreground" />
          Code
        </TabsTrigger>
        <TabsTrigger value="preview">
          <EyeIcon size={16} className="text-muted-foreground" />
          Preview
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="code"
        className="size-full overflow-y-auto bg-background"
      >
        <PreviewCode code={parsedCode} language="tsx" filename="index.tsx" />
      </TabsContent>
      <TabsContent
        value="preview"
        className="relative flex size-full flex-col items-center justify-center gap-4 overflow-y-auto p-8"
      >
        <div className="-translate-y-px absolute top-8 right-0 left-0 border border-border/50 border-dashed" />
        <div className="absolute right-0 bottom-8 left-0 translate-y-px border border-border/50 border-dashed" />
        <div className="-translate-x-px absolute top-0 bottom-0 left-8 border border-border/50 border-dashed" />
        <div className="absolute top-0 right-8 bottom-0 translate-x-px border border-border/50 border-dashed" />
        <Component />
      </TabsContent>
    </Tabs>
  );
};
