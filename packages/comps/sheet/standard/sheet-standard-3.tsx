import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const title = "Left-Sided Sheet";

const Example = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button>Open Sheet</Button>
    </SheetTrigger>
    <SheetContent side="left">
      <SheetHeader>
        <SheetTitle>Left Sheet</SheetTitle>
        <SheetDescription>
          This sheet slides in from the left side of the screen.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
);

export default Example;
