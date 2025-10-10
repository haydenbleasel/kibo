"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export const title = "Vertical with Indicators";

const Example = () => {
  const [value, setValue] = useState([50]);

  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="slider">Intensity</Label>
        <span className="text-muted-foreground text-sm">{value[0]}%</span>
      </div>
      <Slider
        className="h-52"
        id="slider"
        onValueChange={setValue}
        orientation="vertical"
        step={25}
        value={value}
      />
      <div className="flex flex-col items-start gap-1 text-muted-foreground text-xs">
        <span className="h-11">Max</span>
        <span className="h-11">High</span>
        <span className="h-11">Med</span>
        <span className="h-11">Low</span>
        <span className="h-11">Min</span>
      </div>
    </div>
  );
};

export default Example;
