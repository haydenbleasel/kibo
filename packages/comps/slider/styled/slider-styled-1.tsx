"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export const title = "Colored Slider";

const Example = () => {
  const [value, setValue] = useState([60]);

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="slider">Success Rate</Label>
        <span className="text-muted-foreground text-sm">{value[0]}%</span>
      </div>
      <Slider
        className="[&_[data-slot=slider-range]]:bg-green-500 [&_[data-slot=slider-thumb]]:border-green-500"
        id="slider"
        onValueChange={setValue}
        value={value}
      />
    </div>
  );
};

export default Example;
