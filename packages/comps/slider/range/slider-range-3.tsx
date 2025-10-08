"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export const title = "Range with Value Display";

const Example = () => {
  const [value, setValue] = useState([30, 70]);

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="slider">Range</Label>
        <span className="text-muted-foreground text-sm">
          {value[0]} - {value[1]}
        </span>
      </div>
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
