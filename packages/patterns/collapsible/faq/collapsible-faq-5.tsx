import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const title = "FAQ with Badge";

const Example = () => (
  <Collapsible className="w-full max-w-lg space-y-2">
    <CollapsibleTrigger className="flex w-full items-start gap-3 text-left">
      <ChevronRight className="mt-1 h-4 w-4 shrink-0 transition-transform duration-200" />
      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-2">
          <h3 className="font-medium">Do you offer enterprise plans?</h3>
          <Badge variant="outline">Popular</Badge>
        </div>
      </div>
    </CollapsibleTrigger>
    <CollapsibleContent className="ml-7 text-muted-foreground text-sm">
      Yes, we offer custom enterprise plans with dedicated support, SLA
      guarantees, and volume discounts. Contact our sales team for more
      information.
    </CollapsibleContent>
  </Collapsible>
);

export default Example;
