import { HelpCircle } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const title = "FAQ with Icon";

const Example = () => (
  <Collapsible className="group w-full max-w-lg rounded-lg border p-4 hover:border-primary/50">
    <CollapsibleTrigger className="flex w-full items-start gap-3 text-left">
      <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
      <div className="flex-1">
        <h3 className="font-medium">What payment methods do you accept?</h3>
      </div>
    </CollapsibleTrigger>
    <CollapsibleContent className="ml-8 pt-2 text-muted-foreground text-sm">
      We accept all major credit cards (Visa, Mastercard, American Express),
      PayPal, and bank transfers for enterprise customers.
    </CollapsibleContent>
  </Collapsible>
);

export default Example;
