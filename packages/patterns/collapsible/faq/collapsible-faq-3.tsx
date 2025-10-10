import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const title = "FAQ Card Style";

const Example = () => (
  <Collapsible className="w-full max-w-lg rounded-lg border bg-card shadow-sm">
    <CollapsibleTrigger className="flex w-full items-center justify-between p-4 text-left hover:bg-muted/50">
      <span className="font-medium">Is there a free trial available?</span>
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </CollapsibleTrigger>
    <CollapsibleContent className="border-t px-4 py-3 text-muted-foreground text-sm">
      Yes! We offer a 14-day free trial with full access to all features. No
      credit card required to start your trial.
    </CollapsibleContent>
  </Collapsible>
);

export default Example;
