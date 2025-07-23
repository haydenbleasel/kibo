import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@repo/shadcn-ui/components/ui/tabs';
import { cn } from '@repo/shadcn-ui/lib/utils';
import { BoxIcon, CodeIcon, EyeIcon } from 'lucide-react';
import { PreviewCode } from './code';
import { PreviewContent } from './content';
import { PreviewRender } from './render';
import { PreviewSource } from './source';

type PreviewProps = {
  path: string;
  className?: string;
  type?: 'component' | 'block';
};

export const Preview = async ({
  path,
  className,
  type = 'component',
}: PreviewProps) => {
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

  const sourceComponentNames =
    parsedCode
      .match(/@\/components\/ui\/kibo-ui\/([^'"`]+)/g)
      ?.map((match) => match.replace('@/components/ui/kibo-ui/', '')) || [];

  const sourceComponents: { name: string; source: string }[] = [];

  for (const component of sourceComponentNames) {
    const fileName = component.includes('/')
      ? `${component}.tsx`
      : `${component}/index.tsx`;

    const source = await readFile(
      join(process.cwd(), '..', '..', 'packages', fileName),
      'utf-8'
    );

    if (sourceComponents.some((s) => s.name === component)) {
      continue;
    }

    sourceComponents.push({ name: component, source });
  }

  return (
    <div
      className={cn(
        'size-full overflow-hidden rounded-lg border bg-background',
        type === 'block' && 'h-[48rem] prose-code:border-none prose-code:p-0',
        type === 'component' && 'not-prose h-[32rem]',
        className
      )}
    >
      <Tabs className="size-full gap-0" defaultValue="preview">
        <TabsList className="w-full rounded-none border-b">
          <TabsTrigger value="source">
            <BoxIcon className="text-muted-foreground" size={16} />
            Source
          </TabsTrigger>
          <TabsTrigger value="code">
            <CodeIcon className="text-muted-foreground" size={16} />
            Code
          </TabsTrigger>
          <TabsTrigger value="preview">
            <EyeIcon className="text-muted-foreground" size={16} />
            Preview
          </TabsTrigger>
        </TabsList>
        <TabsContent
          className="not-prose size-full overflow-y-auto bg-background"
          value="source"
        >
          <PreviewSource source={sourceComponents} />
        </TabsContent>
        <TabsContent
          className="size-full overflow-y-auto bg-background"
          value="code"
        >
          <PreviewCode code={parsedCode} filename="index.tsx" language="tsx" />
        </TabsContent>
        <TabsContent
          className={cn(
            'not-fumadocs-codeblock size-full',
            type === 'component' ? 'overflow-hidden' : 'overflow-auto'
          )}
          value="preview"
        >
          <PreviewContent>
            {type === 'block' ? (
              <Component />
            ) : (
              <PreviewRender>
                <Component />
              </PreviewRender>
            )}
          </PreviewContent>
        </TabsContent>
      </Tabs>
    </div>
  );
};
