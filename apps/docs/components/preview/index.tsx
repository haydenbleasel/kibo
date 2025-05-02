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
import { PreviewRender } from './render';

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
    <div
      className={cn(
        'not-prose h-full max-h-[32rem] w-full overflow-hidden rounded-lg border bg-background',
        className
      )}
    >
      <Tabs defaultValue="preview" className="size-full gap-0">
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
        <TabsContent value="preview" className="size-full overflow-hidden">
          <PreviewRender>
            <Component />
          </PreviewRender>
        </TabsContent>
      </Tabs>
    </div>
  );
};
