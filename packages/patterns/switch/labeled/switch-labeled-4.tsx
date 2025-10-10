"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export const title = "Switch with Description";

const Example = () => (
  <div className="flex items-center justify-between gap-4">
    <div className="flex flex-col gap-1">
      <Label htmlFor="notifications">Push Notifications</Label>
      <p className="text-muted-foreground text-sm">
        Receive notifications on your device
      </p>
    </div>
    <Switch id="notifications" />
  </div>
);

export default Example;
