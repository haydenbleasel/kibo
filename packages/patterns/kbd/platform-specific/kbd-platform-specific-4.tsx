"use client";

import { Kbd, KbdGroup } from "@/components/ui/kbd";

export const title = "Platform-Aware Shortcut";

const Example = () => {
  const isMac =
    typeof window !== "undefined" &&
    navigator.platform.toUpperCase().indexOf("MAC") >= 0;

  return (
    <div className="rounded-md border bg-background p-4">
      <KbdGroup>
        <Kbd>{isMac ? "⌘" : "Ctrl"}</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
    </div>
  );
};

export default Example;
