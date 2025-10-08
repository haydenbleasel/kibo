"use client";

import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export const title = "Right Drawer Settings Panel";

const Example = () => (
  <Drawer direction="right">
    <DrawerTrigger asChild>
      <Button size="icon" variant="outline">
        <Settings className="h-4 w-4" />
      </Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Settings</DrawerTitle>
        <DrawerDescription>Manage your preferences</DrawerDescription>
      </DrawerHeader>
      <div className="space-y-6 p-4">
        <div className="space-y-4">
          <h4 className="font-medium text-sm">Notifications</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-sm" htmlFor="email-notifs">
                Email notifications
              </Label>
              <Switch id="email-notifs" />
            </div>
            <div className="flex items-center justify-between">
              <Label className="text-sm" htmlFor="push-notifs">
                Push notifications
              </Label>
              <Switch defaultChecked id="push-notifs" />
            </div>
            <div className="flex items-center justify-between">
              <Label className="text-sm" htmlFor="sms-notifs">
                SMS notifications
              </Label>
              <Switch id="sms-notifs" />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-medium text-sm">Privacy</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-sm" htmlFor="profile-visible">
                Profile visible
              </Label>
              <Switch defaultChecked id="profile-visible" />
            </div>
            <div className="flex items-center justify-between">
              <Label className="text-sm" htmlFor="show-activity">
                Show activity
              </Label>
              <Switch defaultChecked id="show-activity" />
            </div>
          </div>
        </div>
      </div>
      <DrawerFooter>
        <Button>Save Changes</Button>
        <DrawerClose asChild>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

export default Example;
