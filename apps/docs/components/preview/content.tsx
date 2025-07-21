'use client';

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@repo/shadcn-ui/components/ui/resizable';
import { PreviewRender } from './render';

type PreviewContentProps = {
  Component: React.ComponentType;
  type: 'component' | 'block';
};

export const PreviewContent = ({ Component, type }: PreviewContentProps) => {
  return (
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
  );
};
