"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export const title = "Range with Constraints";

const Example = () => {
  const [value, setValue] = useState([20, 60]);

  const handleValueChange = (newValue: number[]) => {
    // Ensure minimum distance of 10 between handles
    if (newValue[1] - newValue[0] >= 10) {
      setValue(newValue);
    }
  };

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="slider">Constrained Range</Label>
        <span className="text-muted-foreground text-sm">
          {value[0]} - {value[1]}
        </span>
      </div>
      <Slider
        id="slider"
        max={100}
        min={0}
        onValueChange={handleValueChange}
        value={value}
      />
      <p className="text-muted-foreground text-xs">Minimum gap: 10</p>
    </div>
  );
};

export default Example;
