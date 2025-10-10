import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const title = "Card with Badge";

const Example = () => (
  <Collapsible className="w-full max-w-lg rounded-lg border bg-card text-card-foreground shadow-sm">
    <CollapsibleTrigger className="flex w-full items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <span className="font-medium">Premium Features</span>
        <Badge variant="secondary">New</Badge>
      </div>
      <ChevronDown className="h-4 w-4" />
    </CollapsibleTrigger>
    <CollapsibleContent className="border-t p-4 text-muted-foreground text-sm">
      Unlock advanced features with our premium plan including priority support,
      advanced analytics, and custom integrations.
    </CollapsibleContent>
  </Collapsible>
);

export default Example;
