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

export const title = "App Preferences Sheet";

const Example = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Preferences</Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>App Preferences</SheetTitle>
        <SheetDescription>Customize your app experience</SheetDescription>
      </SheetHeader>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="notifications">Enable Notifications</Label>
          <Checkbox id="notifications" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="analytics">Share Analytics</Label>
          <Checkbox id="analytics" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="auto-update">Auto Update</Label>
          <Checkbox defaultChecked id="auto-update" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="dark-mode">Dark Mode</Label>
          <Checkbox id="dark-mode" />
        </div>
      </div>
    </SheetContent>
  </Sheet>
);

export default Example;
