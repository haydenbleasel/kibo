"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export const title = "Slider with Step Indicators";

const Example = () => {
  const [value, setValue] = useState([50]);

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="slider">Level</Label>
        <span className="text-muted-foreground text-sm">{value[0]}</span>
      </div>
      <Slider
        id="slider"
        max={100}
        min={0}
        onValueChange={setValue}
        step={25}
        value={value}
      />
      <div className="flex items-center justify-between text-muted-foreground text-xs tabular-nums">
        <span className="w-6 text-left">0</span>
        <span className="w-6 text-center">25</span>
        <span className="w-6 text-center">50</span>
        <span className="w-6 text-center">75</span>
        <span className="w-6 text-right">100</span>
      </div>
    </div>
  );
};

export default Example;
