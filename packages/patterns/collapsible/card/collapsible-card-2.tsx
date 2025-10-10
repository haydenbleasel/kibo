import { Plus } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const title = "Card with Icon Header";

const Example = () => (
  <Collapsible className="w-full max-w-lg rounded-lg border bg-card text-card-foreground shadow-sm">
    <CollapsibleTrigger className="flex w-full items-center gap-3 p-4">
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
        <Plus className="h-4 w-4 text-primary" />
      </div>
      <div className="flex-1 text-left">
        <h4 className="font-medium">Additional Information</h4>
        <p className="text-muted-foreground text-sm">Click to expand</p>
      </div>
    </CollapsibleTrigger>
    <CollapsibleContent className="border-t px-4 py-3 text-muted-foreground text-sm">
      Here you can find additional details and information about this section.
    </CollapsibleContent>
  </Collapsible>
);

export default Example;
