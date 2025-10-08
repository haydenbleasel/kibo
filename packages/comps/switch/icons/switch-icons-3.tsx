"use client";

import { Volume2Icon, VolumeXIcon } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export const title = "Volume Toggle";

const Example = () => (
  <div className="flex items-center gap-2">
    <VolumeXIcon className="size-4 text-muted-foreground" />
    <Switch defaultChecked />
    <Volume2Icon className="size-4" />
  </div>
);

export default Example;
