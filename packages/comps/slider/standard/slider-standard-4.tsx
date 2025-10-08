"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export const title = "Slider with Min/Max Labels";

const Example = () => {
  const [value, setValue] = useState([50]);

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Label htmlFor="slider">Size</Label>
      <Slider
        id="slider"
        max={100}
        min={0}
        onValueChange={setValue}
        value={value}
      />
      <div className="flex items-center justify-between text-muted-foreground text-xs">
        <span>0</span>
        <span>100</span>
      </div>
    </div>
  );
};

export default Example;
