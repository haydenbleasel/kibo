'use client';

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@repo/shadcn-ui/components/ui/resizable';
import type { ReactNode } from 'react';

type PreviewContentProps = {
  children: ReactNode;
};

export const PreviewContent = ({ children }: PreviewContentProps) => {
  return (
    <ResizablePanelGroup className="size-full" direction="horizontal">
      <ResizablePanel
        className="peer"
        defaultSize={100}
        maxSize={100}
        minSize={40}
      >
        {children}
      </ResizablePanel>
      <ResizableHandle
        className="peer-data-[panel-size=100.0]:w-0"
        withHandle
      />
      <ResizablePanel
        className="border-none bg-background"
        defaultSize={0}
        maxSize={70}
        minSize={0}
      />
    </ResizablePanelGroup>
  );
};
