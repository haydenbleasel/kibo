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

export const title = "User Profile Edit Sheet";

const Example = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button>Edit Profile</Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Edit Profile</SheetTitle>
        <SheetDescription>
          Make changes to your profile here. Click save when you're done.
        </SheetDescription>
      </SheetHeader>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="username">Username</Label>
          <Input defaultValue="@johndoe" id="username" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="full-name">Full Name</Label>
          <Input defaultValue="John Doe" id="full-name" />
        </div>
      </div>
      <SheetFooter>
        <Button className="w-full">Save Changes</Button>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

export default Example;
