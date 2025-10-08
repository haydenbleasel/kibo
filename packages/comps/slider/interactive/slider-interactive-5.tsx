"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export const title = "With Live Preview";

const Example = () => {
  const [value, setValue] = useState([50]);

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex items-center justify-between">
        <Label htmlFor="slider">Border Radius</Label>
        <span className="text-muted-foreground text-sm">{value[0]}px</span>
      </div>
      <Slider
        id="slider"
        max={50}
        min={0}
        onValueChange={setValue}
        value={value}
      />
      <div
        className="h-24 bg-muted-foreground transition-all"
        style={{ borderRadius: `${value[0]}px` }}
      />
    </div>
  );
};

export default Example;
