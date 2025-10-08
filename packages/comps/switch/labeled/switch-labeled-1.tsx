"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export const title = "Switch with Label";

const Example = () => (
  <div className="flex items-center gap-2">
    <Switch id="airplane-mode" />
    <Label htmlFor="airplane-mode">Airplane Mode</Label>
  </div>
);

export default Example;
