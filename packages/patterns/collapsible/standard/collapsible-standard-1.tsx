import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const title = "Simple Collapsible";

const Example = () => (
  <Collapsible className="w-full max-w-lg">
    <CollapsibleTrigger asChild>
      <Button variant="ghost">
        Toggle <ChevronDown className="ml-2 h-4 w-4" />
      </Button>
    </CollapsibleTrigger>
    <CollapsibleContent className="mt-2">
      <p className="text-muted-foreground text-sm">
        This is the collapsible content. You can put any content here.
      </p>
    </CollapsibleContent>
  </Collapsible>
);

export default Example;
