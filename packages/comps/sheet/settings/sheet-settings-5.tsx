import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const title = "Privacy Settings Sheet";

const Example = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Privacy</Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Privacy Settings</SheetTitle>
        <SheetDescription>
          Control your privacy and data preferences
        </SheetDescription>
      </SheetHeader>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="profile-public">Public Profile</Label>
          <Checkbox defaultChecked id="profile-public" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="show-email">Show Email Address</Label>
          <Checkbox id="show-email" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="search-indexing">Allow Search Indexing</Label>
          <Checkbox defaultChecked id="search-indexing" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="activity-status">Show Activity Status</Label>
          <Checkbox defaultChecked id="activity-status" />
        </div>
        <Button className="mt-4 w-full" variant="destructive">
          Delete Account
        </Button>
      </div>
    </SheetContent>
  </Sheet>
);

export default Example;
