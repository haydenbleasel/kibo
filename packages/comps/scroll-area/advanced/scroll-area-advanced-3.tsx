"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";

export const title = "With ResizableHandle";

const Example = () => (
  <ResizablePanelGroup
    className="max-w-4xl rounded-lg border bg-background"
    direction="horizontal"
  >
    <ResizablePanel defaultSize={50} minSize={30}>
      <div className="flex h-[400px] flex-col">
        <div className="border-b p-4">
          <h3 className="font-semibold">Files</h3>
        </div>
        <ScrollArea className="flex-1">
          <div className="space-y-1 p-2">
            {Array.from({ length: 30 }).map((_, i) => (
              <button
                className="w-full rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-accent"
                key={i}
                type="button"
              >
                <div className="font-medium">file-{i + 1}.tsx</div>
                <div className="text-muted-foreground text-xs">
                  Updated {i + 1} days ago
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </ResizablePanel>
    <ResizableHandle withHandle />
    <ResizablePanel defaultSize={50} minSize={30}>
      <div className="flex h-[400px] flex-col">
        <div className="border-b p-4">
          <h3 className="font-semibold">Preview</h3>
        </div>
        <ScrollArea className="flex-1">
          <div className="space-y-4 p-4">
            <div>
              <h4 className="mb-2 font-medium text-sm">File Content</h4>
              <p className="text-muted-foreground text-sm">
                Select a file from the list to view its contents here. The panel
                width can be adjusted by dragging the resize handle.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-muted-foreground text-sm">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-muted-foreground text-sm">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
              <p className="text-muted-foreground text-sm">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-muted-foreground text-sm">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>
              <p className="text-muted-foreground text-sm">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
              </p>
            </div>
          </div>
        </ScrollArea>
      </div>
    </ResizablePanel>
  </ResizablePanelGroup>
);

export default Example;
