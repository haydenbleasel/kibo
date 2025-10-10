"use client";

import { useState } from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export const title = "Context Menu with Radio Items";

const Example = () => {
  const [position, setPosition] = useState("bottom");

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[200px] w-full max-w-lg items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuLabel>Panel Position</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup onValueChange={setPosition} value={position}>
          <ContextMenuRadioItem value="top">Top</ContextMenuRadioItem>
          <ContextMenuRadioItem value="bottom">Bottom</ContextMenuRadioItem>
          <ContextMenuRadioItem value="right">Right</ContextMenuRadioItem>
          <ContextMenuRadioItem value="left">Left</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default Example;
