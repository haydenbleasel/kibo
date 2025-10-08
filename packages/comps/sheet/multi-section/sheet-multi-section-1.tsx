import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const title = "Sheet with Header, Content, and Footer";

const Example = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button>Open Sheet</Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Complete Your Profile</SheetTitle>
        <SheetDescription>
          Fill in your information to get started
        </SheetDescription>
      </SheetHeader>
      <div className="flex-1 p-4">
        <p className="text-muted-foreground text-sm">
          This is the main content area of the sheet. It can contain forms,
          lists, or any other content you need to display.
        </p>
      </div>
      <SheetFooter>
        <Button className="w-full" variant="outline">
          Cancel
        </Button>
        <Button className="w-full">Continue</Button>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

export default Example;
