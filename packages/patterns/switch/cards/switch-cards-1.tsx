"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export const title = "Settings Card";

const Example = () => (
  <div className="flex items-start gap-3 rounded-lg border bg-background p-4">
    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-500">
      <span className="text-lg">🔔</span>
    </div>
    <div className="flex flex-1 flex-col gap-1">
      <div className="flex items-center justify-between gap-4">
        <Label className="font-medium" htmlFor="card-notifications">
          Notifications
        </Label>
        <Switch id="card-notifications" />
      </div>
      <p className="text-muted-foreground text-sm">
        A short description goes here.
      </p>
    </div>
  </div>
);

export default Example;
