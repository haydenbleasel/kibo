"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export const title = "Percentage Range";

const Example = () => {
  const [value, setValue] = useState([10, 90]);

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="slider">Percentage Range</Label>
        <span className="text-muted-foreground text-sm">
          {value[0]}% - {value[1]}%
        </span>
      </div>
      <Slider
        id="slider"
        max={100}
        min={0}
        onValueChange={setValue}
        step={5}
        value={value}
      />
      <div className="flex items-center justify-between text-muted-foreground text-xs">
        <span>0%</span>
        <span>100%</span>
      </div>
    </div>
  );
};

export default Example;
