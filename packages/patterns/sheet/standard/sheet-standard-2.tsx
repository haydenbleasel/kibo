import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const title = "Sheet with Title and Description";

const Example = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button>Open Sheet</Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Sheet Title</SheetTitle>
        <SheetDescription>
          This is a description that provides additional context about the sheet
          content.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
);

export default Example;
