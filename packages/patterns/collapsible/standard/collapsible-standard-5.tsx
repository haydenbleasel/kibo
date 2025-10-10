"use client";

import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const title = "Controlled Collapsible";

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-lg space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground text-sm">
          Status: {isOpen ? "Open" : "Closed"}
        </span>
      </div>
      <Collapsible onOpenChange={setIsOpen} open={isOpen}>
        <CollapsibleTrigger className="font-medium text-sm underline-offset-4 hover:underline">
          Toggle content
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 text-muted-foreground text-sm">
          This is a controlled collapsible component. The open state is managed
          externally.
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default Example;
