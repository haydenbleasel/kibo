import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const title = "Text-only Collapsible";

const Example = () => (
  <Collapsible className="w-full max-w-lg space-y-2">
    <div className="flex items-center gap-2">
      <h4 className="font-semibold text-sm">Settings</h4>
      <CollapsibleTrigger className="text-muted-foreground text-sm underline-offset-4 hover:underline">
        [expand]
      </CollapsibleTrigger>
    </div>
    <CollapsibleContent className="space-y-2">
      <div className="rounded-md border px-4 py-2 text-sm">Option 1</div>
      <div className="rounded-md border px-4 py-2 text-sm">Option 2</div>
      <div className="rounded-md border px-4 py-2 text-sm">Option 3</div>
    </CollapsibleContent>
  </Collapsible>
);

export default Example;
