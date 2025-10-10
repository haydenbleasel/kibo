"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const title = "Range Slider with Value";

const Example = () => {
  const [value, setValue] = useState(50);

  return (
    <div className="w-full max-w-sm space-y-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="range-slider">Volume</Label>
        <span className="font-medium text-sm">{value}%</span>
      </div>
      <Input
        className="cursor-pointer bg-background"
        id="range-slider"
        max="100"
        min="0"
        onChange={(e) => setValue(Number(e.target.value))}
        type="range"
        value={value}
      />
      <div className="flex justify-between text-muted-foreground text-xs">
        <span>0%</span>
        <span>100%</span>
      </div>
    </div>
  );
};

export default Example;
