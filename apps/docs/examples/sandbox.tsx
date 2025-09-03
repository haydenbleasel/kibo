"use client";

import {
  SandboxCodeEditor,
  SandboxConsole,
  SandboxFileExplorer,
  SandboxLayout,
  SandboxPreview,
  SandboxProvider,
  SandboxTabs,
  SandboxTabsContent,
  SandboxTabsList,
  SandboxTabsTrigger,
} from "@repo/sandbox";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@repo/shadcn-ui/components/ui/resizable";
import { AppWindowIcon, CodeIcon, TerminalIcon } from "lucide-react";

const Example = () => (
  <SandboxProvider>
    <SandboxLayout>
      <SandboxTabs defaultValue="preview">
        <SandboxTabsList>
          <SandboxTabsTrigger value="code">
            <CodeIcon size={14} />
            Code
          </SandboxTabsTrigger>
          <SandboxTabsTrigger value="preview">
            <AppWindowIcon size={14} />
            Preview
          </SandboxTabsTrigger>
          <SandboxTabsTrigger value="console">
            <TerminalIcon size={14} />
            Console
          </SandboxTabsTrigger>
        </SandboxTabsList>
        <SandboxTabsContent className="overflow-hidden" value="code">
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel
              className="overflow-y-auto"
              defaultSize={25}
              maxSize={40}
              minSize={20}
            >
              <SandboxFileExplorer />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel className="overflow-y-auto">
              <SandboxCodeEditor />
            </ResizablePanel>
          </ResizablePanelGroup>
        </SandboxTabsContent>
        <SandboxTabsContent value="preview">
          <SandboxPreview
            showOpenInCodeSandbox={false}
            showRefreshButton={false}
          />
        </SandboxTabsContent>
        <SandboxTabsContent value="console">
          <SandboxConsole />
        </SandboxTabsContent>
      </SandboxTabs>
    </SandboxLayout>
  </SandboxProvider>
);

export default Example;
