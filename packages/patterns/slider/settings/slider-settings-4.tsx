"use client";

import { GaugeIcon } from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export const title = "Speed Control";

const Example = () => {
  const [value, setValue] = useState([1]);

  const speedLabels = ["Slow", "Normal", "Fast", "Very Fast"];

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GaugeIcon className="size-4" />
          <Label htmlFor="slider">Speed</Label>
        </div>
        <span className="text-muted-foreground text-sm">
          {speedLabels[value[0]]}
        </span>
      </div>
      <Slider
        id="slider"
        max={3}
        min={0}
        onValueChange={setValue}
        step={1}
        value={value}
      />
      <div className="flex items-center justify-between text-muted-foreground text-xs">
        {speedLabels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  );
};

export default Example;
