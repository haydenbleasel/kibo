"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export const title = "Vertical Range";

const Example = () => {
  const [value, setValue] = useState([30, 70]);

  return (
    <div className="flex flex-col items-center gap-4">
      <Label htmlFor="slider">Range</Label>
      <Slider
        className="h-56"
        id="slider"
        onValueChange={setValue}
        orientation="vertical"
        value={value}
      />
      <div className="flex flex-col items-center gap-1 text-muted-foreground text-sm">
        <span>{value[1]}</span>
        <span>-</span>
        <span>{value[0]}</span>
      </div>
    </div>
  );
};

export default Example;
