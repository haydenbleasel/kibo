import { Plus } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const title = "FAQ Item";

const Example = () => (
  <Collapsible className="w-full max-w-lg border-b pb-4">
    <CollapsibleTrigger className="flex w-full items-start justify-between gap-4 text-left">
      <h3 className="font-medium text-sm">
        How do I get started with this product?
      </h3>
      <Plus className="mt-0.5 h-4 w-4 shrink-0" />
    </CollapsibleTrigger>
    <CollapsibleContent className="pt-2 text-muted-foreground text-sm">
      Getting started is easy! Simply sign up for an account, verify your email,
      and follow our interactive onboarding guide. You'll be up and running in
      just a few minutes.
    </CollapsibleContent>
  </Collapsible>
);

export default Example;
