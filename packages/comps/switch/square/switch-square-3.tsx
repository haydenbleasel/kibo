"use client";

import { useId } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export const title = "Square Switch with Label";

const Example = () => {
  const id = useId();

  return (
    <div className="flex items-center gap-2">
      <Switch className="rounded-sm [&_span]:rounded" defaultChecked id={id} />
      <Label htmlFor={id}>Enable notifications</Label>
    </div>
  );
};

export default Example;
