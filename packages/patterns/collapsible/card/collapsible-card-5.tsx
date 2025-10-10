import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const title = "Subtle Card Collapsible";

const Example = () => (
  <Collapsible className="w-full max-w-lg rounded-lg border-2 border-dashed bg-muted/50">
    <CollapsibleTrigger className="flex w-full items-center justify-between p-4 font-medium text-sm">
      View source code
    </CollapsibleTrigger>
    <CollapsibleContent className="px-4 pb-4">
      <pre className="rounded-md bg-background p-3 text-xs">
        <code>{`function hello() {
  console.log("Hello, World!");
}`}</code>
      </pre>
    </CollapsibleContent>
  </Collapsible>
);

export default Example;
