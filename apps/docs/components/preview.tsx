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
  const resolvedPath = join('..', 'examples', path);
  const filePath = join(process.cwd(), 'content', resolvedPath);
  const code = await readFile(filePath, 'utf-8');
  const Component = await import(resolvedPath).then((module) => module.default);
  const parsedCode = code.replace(/@repo\//g, '@/components/ui/kibo-ui/');

  return (
    <Tabs
      defaultValue="code"
      className={cn(
        'h-full max-h-[30rem] w-full gap-0 overflow-hidden rounded-lg border',
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
        className="size-full overflow-y-auto bg-background"
      >
        <Component />
      </TabsContent>
    </Tabs>
  );
};
