"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useId, useState } from "react";
import { Switch } from "@/components/ui/switch";

export const title = "Square Theme Toggle";

const Example = () => {
  const id = useId();
  const [checked, setChecked] = useState(false);

  return (
    <div className="inline-flex items-center gap-2">
      <MoonIcon className="size-4 text-muted-foreground" />
      <Switch
        checked={checked}
        className="h-5 w-9 rounded-sm [&_span]:size-4 [&_span]:rounded"
        id={id}
        onCheckedChange={setChecked}
      />
      <SunIcon className="size-4" />
    </div>
  );
};

export default Example;
