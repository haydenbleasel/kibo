import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const title = "Outlined Collapsible";

const Example = () => (
  <Collapsible className="w-full max-w-lg rounded-md border-2">
    <CollapsibleTrigger className="flex w-full items-center justify-between p-4 font-medium">
      <span>System Information</span>
      <ChevronDown className="h-4 w-4" />
    </CollapsibleTrigger>
    <CollapsibleContent className="border-t-2 p-4 text-muted-foreground text-sm">
      <div className="space-y-2">
        <div>
          <span className="font-medium">Version:</span> 2.1.0
        </div>
        <div>
          <span className="font-medium">Status:</span> Active
        </div>
        <div>
          <span className="font-medium">Last Updated:</span> 2 hours ago
        </div>
      </div>
    </CollapsibleContent>
  </Collapsible>
);

export default Example;
