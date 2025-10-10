import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const title = "Card Collapsible";

const Example = () => (
  <Collapsible className="w-full max-w-lg rounded-lg border bg-card text-card-foreground shadow-sm">
    <CollapsibleTrigger className="flex w-full items-center justify-between p-4 font-medium">
      <span>Features</span>
      <ChevronDown className="h-4 w-4 transition-transform duration-200" />
    </CollapsibleTrigger>
    <CollapsibleContent className="border-t px-4 py-3">
      <ul className="space-y-2 text-muted-foreground text-sm">
        <li>• Fully accessible</li>
        <li>• Keyboard navigation</li>
        <li>• Smooth animations</li>
      </ul>
    </CollapsibleContent>
  </Collapsible>
);

export default Example;
