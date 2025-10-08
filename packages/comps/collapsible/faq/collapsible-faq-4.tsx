import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const title = "Numbered FAQ";

const Example = () => (
  <Collapsible className="group w-full max-w-lg border-b pb-4">
    <CollapsibleTrigger className="flex w-full items-start gap-4 text-left">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary text-xs">
        1
      </span>
      <div className="flex-1">
        <h3 className="font-medium">Can I cancel my subscription anytime?</h3>
      </div>
    </CollapsibleTrigger>
    <CollapsibleContent className="ml-10 pt-2 text-muted-foreground text-sm">
      Absolutely. You can cancel your subscription at any time from your account
      settings. Your access will continue until the end of your billing period.
    </CollapsibleContent>
  </Collapsible>
);

export default Example;
