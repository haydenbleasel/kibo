"use client";

import { Switch } from "@/components/ui/switch";

export const title = "Switch with On Label";

const Example = () => (
  <div className="flex items-center gap-2">
    <Switch defaultChecked />
    <span className="font-medium text-sm">On</span>
  </div>
);

export default Example;
