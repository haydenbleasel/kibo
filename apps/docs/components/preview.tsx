import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { CodeBlockContent } from '@repo/code-block/server';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@repo/shadcn-ui/components/ui/tabs';
import { cn } from '@repo/shadcn-ui/lib/utils';
import { CodeIcon, EyeIcon } from 'lucide-react';

type PreviewProps = {
  path: string;
  className?: string;
};

export const Preview = async ({ path, className }: PreviewProps) => {
  const resolvedPath = join('..', 'examples', `${path}.tsx`);
  const filePath = join(process.cwd(), 'content', resolvedPath);
  const code = await readFile(filePath, 'utf-8');
  const Component = await import(resolvedPath).then((module) => module.default);
  const parsedCode = code.replace(/@repo\//g, '@/components/ui/kibo-ui/');

  return (
    <Tabs
      defaultValue="preview"
      className={cn(
        'not-prose h-full max-h-[30rem] w-full gap-0 overflow-hidden rounded-lg border',
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
        <CodeBlockContent
          className="[&_code]:rounded-none [&_code]:border-none [&_code]:p-4 [&_pre]:p-0"
          themes={{
            light: 'github-light',
            dark: 'github-dark',
          }}
        >
          {parsedCode}
        </CodeBlockContent>
      </TabsContent>
      <TabsContent
        value="preview"
        className="relative flex size-full flex-col items-center justify-center gap-4 overflow-y-auto bg-secondary/50 p-8"
      >
        <div className="absolute top-8 right-0 left-0 border border-border/50 border-dashed" />
        <div className="absolute right-0 bottom-8 left-0 border border-border/50 border-dashed" />
        <div className="absolute top-0 bottom-0 left-8 border border-border/50 border-dashed" />
        <div className="absolute top-0 right-8 bottom-0 border border-border/50 border-dashed" />
        <Component />
      </TabsContent>
    </Tabs>
  );
};
