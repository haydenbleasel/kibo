'use client';

import {
  TabsContent,
} from '@repo/shadcn-ui/components/ui/tabs';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@repo/shadcn-ui/components/ui/resizable';
import { cn } from '@repo/shadcn-ui/lib/utils';
import { PreviewRender } from './render';

type PreviewContentProps = {
  Component: React.ComponentType;
  type: 'component' | 'block';
};

export const PreviewContent = ({ Component, type }: PreviewContentProps) => {
  return (
    <TabsContent
      className={cn(
        'not-fumadocs-codeblock size-full',
        type === 'component' ? 'overflow-hidden' : 'overflow-auto'
      )}
      value="preview"
    >
      <ResizablePanelGroup 
        direction="horizontal" 
        className="size-full"
      >
        <ResizablePanel
          defaultSize={100}
          minSize={40}
          maxSize={100}
          className="peer"
        >
          {type === 'block' ? (
            <Component />
          ) : (
            <PreviewRender>
              <Component />
            </PreviewRender>
          )}
        </ResizablePanel>
        <ResizableHandle withHandle className="peer-data-[panel-size=100.0]:w-0" />
        <ResizablePanel
          defaultSize={0}
          minSize={0}
          maxSize={70}
          className="bg-background border-none"
        />
      </ResizablePanelGroup>
    </TabsContent>
  );
};
