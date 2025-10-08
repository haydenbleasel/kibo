import { ChevronsUpDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const title = "Inline Trigger Collapsible";

const Example = () => (
  <Collapsible className="w-full max-w-lg space-y-2">
    <CollapsibleTrigger className="flex w-full items-center justify-between font-medium text-sm">
      <span>Can I use this in my project?</span>
      <ChevronsUpDown className="h-4 w-4" />
    </CollapsibleTrigger>
    <CollapsibleContent className="text-muted-foreground text-sm">
      Yes. Free to use for personal and commercial projects. No attribution
      required.
    </CollapsibleContent>
  </Collapsible>
);

export default Example;
