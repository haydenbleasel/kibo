"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export const title = "With Gradient Track";

const Example = () => {
  const [value, setValue] = useState([70]);

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="slider">Heat</Label>
        <span className="text-muted-foreground text-sm">{value[0]}°</span>
      </div>
      <Slider
        className="[&_[data-slot=slider-range]]:bg-transparent [&_[data-slot=slider-track]]:bg-gradient-to-r [&_[data-slot=slider-track]]:from-blue-500 [&_[data-slot=slider-track]]:to-red-500"
        id="slider"
        onValueChange={setValue}
        value={value}
      />
    </div>
  );
};

export default Example;
