"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export const title = "Large/Thick Slider";

const Example = () => {
  const [value, setValue] = useState([55]);

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="slider">Volume</Label>
        <span className="text-muted-foreground text-sm">{value[0]}%</span>
      </div>
      <Slider
        className="[&_[data-slot=slider-thumb]]:size-6 [&_[data-slot=slider-track]]:h-3"
        id="slider"
        onValueChange={setValue}
        value={value}
      />
    </div>
  );
};

export default Example;
