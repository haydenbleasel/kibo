import { ChevronRight, Circle } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const title = "Nested Sidebar Items";

const Example = () => (
  <div className="w-full max-w-lg">
    <Collapsible>
      <CollapsibleTrigger className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 font-medium text-sm hover:bg-muted">
        <ChevronRight className="h-4 w-4" />
        <span>Documentation</span>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-1 ml-2 border-l-2 pl-2">
        <Collapsible>
          <CollapsibleTrigger className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-muted">
            <ChevronRight className="h-3 w-3" />
            <span>Components</span>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-1 ml-4 space-y-1">
            <div className="flex items-center gap-2 px-2 py-1 text-sm hover:bg-muted">
              <Circle className="h-1.5 w-1.5 fill-current" />
              <span>Button</span>
            </div>
            <div className="flex items-center gap-2 px-2 py-1 text-sm hover:bg-muted">
              <Circle className="h-1.5 w-1.5 fill-current" />
              <span>Input</span>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CollapsibleContent>
    </Collapsible>
  </div>
);

export default Example;
