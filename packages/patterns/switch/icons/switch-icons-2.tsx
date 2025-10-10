"use client";

import { BellIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export const title = "Icon with Label";

const Example = () => (
  <div className="flex items-center gap-3">
    <BellIcon className="size-4 text-muted-foreground" />
    <div className="flex flex-1 items-center justify-between gap-4">
      <Label htmlFor="notifications">Notifications</Label>
      <Switch defaultChecked id="notifications" />
    </div>
  </div>
);

export default Example;
