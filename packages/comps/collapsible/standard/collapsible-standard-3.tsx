import { Plus } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const title = "Collapsible with Icon";

const Example = () => (
  <Collapsible className="w-full max-w-lg space-y-2">
    <CollapsibleTrigger className="flex items-center gap-2 font-medium text-sm hover:underline">
      <Plus className="h-4 w-4" />
      Show more information
    </CollapsibleTrigger>
    <CollapsibleContent className="space-y-2">
      <p className="text-muted-foreground text-sm">
        Additional details about this section can be found here.
      </p>
      <p className="text-muted-foreground text-sm">
        This content was hidden by default but can be revealed by clicking the
        trigger.
      </p>
    </CollapsibleContent>
  </Collapsible>
);

export default Example;
