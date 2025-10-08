import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const title = "Multi-Step Form Sheet";

const Example = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button>Start Setup</Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Account Setup</SheetTitle>
        <SheetDescription>Step 1 of 3: Personal Information</SheetDescription>
      </SheetHeader>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="first-name">First Name</Label>
          <Input id="first-name" placeholder="Enter first name" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="last-name">Last Name</Label>
          <Input id="last-name" placeholder="Enter last name" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="Enter phone number" type="tel" />
        </div>
      </div>
      <SheetFooter>
        <Button className="w-full" variant="outline">
          Back
        </Button>
        <Button className="w-full">Next</Button>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

export default Example;
