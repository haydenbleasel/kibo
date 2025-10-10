"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export const title = "Settings List";

const Example = () => (
  <div className="flex flex-col divide-y rounded-lg border bg-background">
    <div className="flex items-center justify-between gap-4 p-4">
      <div className="flex flex-col gap-1">
        <Label className="font-medium" htmlFor="marketing">
          Marketing emails
        </Label>
        <p className="text-muted-foreground text-sm">
          Receive emails about new products
        </p>
      </div>
      <Switch id="marketing" />
    </div>
    <div className="flex items-center justify-between gap-4 p-4">
      <div className="flex flex-col gap-1">
        <Label className="font-medium" htmlFor="security">
          Security emails
        </Label>
        <p className="text-muted-foreground text-sm">
          Receive emails about account security
        </p>
      </div>
      <Switch defaultChecked id="security" />
    </div>
  </div>
);

export default Example;
