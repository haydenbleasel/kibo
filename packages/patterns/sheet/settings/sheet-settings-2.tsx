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

export const title = "Account Settings Sheet";

const Example = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Account Settings</Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Account Settings</SheetTitle>
        <SheetDescription>Manage your account information</SheetDescription>
      </SheetHeader>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="current-email">Email Address</Label>
          <Input defaultValue="john@example.com" id="current-email" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="current-password">Current Password</Label>
          <Input id="current-password" type="password" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="new-password">New Password</Label>
          <Input id="new-password" type="password" />
        </div>
      </div>
      <SheetFooter>
        <Button className="w-full">Save Changes</Button>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

export default Example;
