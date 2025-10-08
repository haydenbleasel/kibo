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

export const title = "Notification Preferences Sheet";

const Example = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Notifications</Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Notification Settings</SheetTitle>
        <SheetDescription>
          Choose what notifications you want to receive
        </SheetDescription>
      </SheetHeader>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-sm">Email Notifications</h4>
          <div className="flex items-center justify-between">
            <Label htmlFor="email-updates">Product Updates</Label>
            <Checkbox defaultChecked id="email-updates" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="email-news">Newsletter</Label>
            <Checkbox id="email-news" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-sm">Push Notifications</h4>
          <div className="flex items-center justify-between">
            <Label htmlFor="push-messages">New Messages</Label>
            <Checkbox defaultChecked id="push-messages" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="push-mentions">Mentions</Label>
            <Checkbox defaultChecked id="push-mentions" />
          </div>
        </div>
      </div>
    </SheetContent>
  </Sheet>
);

export default Example;
