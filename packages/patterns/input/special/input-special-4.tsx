"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const title = "Disabled Input";

const Example = () => (
  <div className="w-full max-w-sm space-y-2">
    <Label htmlFor="disabled-input">Account ID</Label>
    <Input
      className="bg-background"
      disabled
      id="disabled-input"
      type="text"
      value="ACC-12345"
    />
    <p className="text-muted-foreground text-xs">
      This field cannot be edited.
    </p>
  </div>
);

export default Example;
