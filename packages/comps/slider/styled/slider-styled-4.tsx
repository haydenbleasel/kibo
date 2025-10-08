"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export const title = "Minimal Style";

const Example = () => {
  const [value, setValue] = useState([40]);

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="slider">Intensity</Label>
        <span className="text-muted-foreground text-sm">{value[0]}</span>
      </div>
      <Slider
        className="[&_[data-slot=slider-thumb]]:border-2 [&_[data-slot=slider-track]]:border [&_[data-slot=slider-track]]:bg-transparent"
        id="slider"
        onValueChange={setValue}
        value={value}
      />
    </div>
  );
};

export default Example;
