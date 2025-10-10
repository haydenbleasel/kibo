import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const title = "Nested Card Content";

const Example = () => (
  <Collapsible className="w-full max-w-lg rounded-lg border bg-card text-card-foreground shadow-sm">
    <CollapsibleTrigger className="flex w-full items-center justify-between p-4 font-medium hover:bg-muted/50">
      Product Details
    </CollapsibleTrigger>
    <CollapsibleContent className="border-t">
      <div className="divide-y">
        <div className="p-4">
          <h5 className="mb-1 font-medium text-sm">Dimensions</h5>
          <p className="text-muted-foreground text-sm">24" x 18" x 12"</p>
        </div>
        <div className="p-4">
          <h5 className="mb-1 font-medium text-sm">Weight</h5>
          <p className="text-muted-foreground text-sm">5.2 lbs</p>
        </div>
        <div className="p-4">
          <h5 className="mb-1 font-medium text-sm">Material</h5>
          <p className="text-muted-foreground text-sm">Premium plastic</p>
        </div>
      </div>
    </CollapsibleContent>
  </Collapsible>
);

export default Example;
