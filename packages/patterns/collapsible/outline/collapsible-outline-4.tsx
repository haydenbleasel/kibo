import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const title = "Dashed Outline";

const Example = () => (
  <Collapsible className="w-full max-w-lg rounded-lg border-2 border-dashed">
    <CollapsibleTrigger className="flex w-full items-center justify-between p-4 font-medium text-sm">
      <span>Optional Configuration</span>
      <span className="text-muted-foreground text-xs">[expand]</span>
    </CollapsibleTrigger>
    <CollapsibleContent className="border-t-2 border-dashed p-4">
      <div className="space-y-3 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Option A</span>
          <span>Enabled</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Option B</span>
          <span>Disabled</span>
        </div>
      </div>
    </CollapsibleContent>
  </Collapsible>
);

export default Example;
