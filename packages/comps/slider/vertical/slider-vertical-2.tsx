"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export const title = "Height Selector";

const Example = () => {
  const [value, setValue] = useState([170]);

  return (
    <div className="flex flex-col items-center gap-4">
      <Label htmlFor="slider">Height (cm)</Label>
      <Slider
        className="h-64"
        id="slider"
        max={250}
        min={100}
        onValueChange={setValue}
        orientation="vertical"
        value={value}
      />
      <span className="text-muted-foreground text-sm">{value[0]} cm</span>
    </div>
  );
};

export default Example;
