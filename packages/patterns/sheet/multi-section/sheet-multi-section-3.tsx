import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const title = "Sheet with Scrollable Content";

const Example = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button>View All Items</Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>All Items</SheetTitle>
        <SheetDescription>Browse through all available items</SheetDescription>
      </SheetHeader>
      <div className="flex-1 overflow-y-auto p-4">
        <div className="flex flex-col gap-3">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              className="cursor-pointer rounded-md border p-3 hover:bg-muted"
              key={i}
            >
              <h4 className="font-medium text-sm">Item {i + 1}</h4>
              <p className="text-muted-foreground text-xs">
                Description for item {i + 1}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SheetContent>
  </Sheet>
);

export default Example;
