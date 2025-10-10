"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export const title = "Price Range Slider";

const Example = () => {
  const [value, setValue] = useState([200, 800]);

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Label htmlFor="slider">Price Range</Label>
      <Slider
        id="slider"
        max={1000}
        min={0}
        onValueChange={setValue}
        value={value}
      />
      <div className="flex items-center justify-between text-muted-foreground text-sm">
        <span>${value[0]}</span>
        <span>${value[1]}</span>
      </div>
    </div>
  );
};

export default Example;
