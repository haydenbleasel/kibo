"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export const title = "Theme Toggle with Icons";

const Example = () => (
  <div className="flex items-center gap-2">
    <SunIcon className="size-4" />
    <Switch />
    <MoonIcon className="size-4 text-muted-foreground" />
  </div>
);

export default Example;
