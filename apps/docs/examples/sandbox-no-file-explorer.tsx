"use client";

import {
  SandboxCodeEditor,
  SandboxConsole,
  SandboxLayout,
  SandboxPreview,
  SandboxProvider,
  SandboxTabs,
  SandboxTabsContent,
  SandboxTabsList,
  SandboxTabsTrigger,
} from "@repo/sandbox";
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
        <SandboxTabsContent value="code">
          <SandboxCodeEditor showTabs />
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
