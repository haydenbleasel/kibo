import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const title = "Top-Sliding Sheet";

const Example = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button>Open Sheet</Button>
    </SheetTrigger>
    <SheetContent side="top">
      <SheetHeader>
        <SheetTitle>Top Sheet</SheetTitle>
        <SheetDescription>
          This sheet slides down from the top of the screen.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
);

export default Example;
