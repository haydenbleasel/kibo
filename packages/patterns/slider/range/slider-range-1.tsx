"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export const title = "Basic Range Slider";

const Example = () => {
  const [value, setValue] = useState([25, 75]);

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Label htmlFor="slider">Select Range</Label>
      <Slider
        id="slider"
        max={100}
        min={0}
        onValueChange={setValue}
        value={value}
      />
    </div>
  );
};

export default Example;
