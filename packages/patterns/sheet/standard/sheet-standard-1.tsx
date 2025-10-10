import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const title = "Bottom-Sliding Sheet";

const Example = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button>Open Sheet</Button>
    </SheetTrigger>
    <SheetContent side="bottom">
      <SheetHeader>
        <SheetTitle>Bottom Sheet</SheetTitle>
        <SheetDescription>
          This sheet slides up from the bottom of the screen.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
);

export default Example;
