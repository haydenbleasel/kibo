import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const title = "Minimal Sidebar Group";

const Example = () => (
  <div className="w-full max-w-lg">
    <Collapsible>
      <CollapsibleTrigger className="flex w-full items-center justify-between px-2 py-1 font-semibold text-muted-foreground text-xs uppercase tracking-wider hover:text-foreground">
        <span>Getting Started</span>
        <ChevronDown className="h-3 w-3" />
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-1 space-y-1">
        <div className="rounded-md px-2 py-1.5 text-sm hover:bg-muted">
          Introduction
        </div>
        <div className="rounded-md px-2 py-1.5 text-sm hover:bg-muted">
          Installation
        </div>
        <div className="rounded-md px-2 py-1.5 text-sm hover:bg-muted">
          Quick Start
        </div>
      </CollapsibleContent>
    </Collapsible>
  </div>
);

export default Example;
