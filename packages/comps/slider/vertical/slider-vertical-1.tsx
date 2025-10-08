"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export const title = "Volume Control Style";

const Example = () => {
  const [value, setValue] = useState([60]);

  return (
    <div className="flex flex-col items-center gap-4">
      <Label htmlFor="slider">Volume</Label>
      <Slider
        className="h-48"
        id="slider"
        onValueChange={setValue}
        orientation="vertical"
        value={value}
      />
      <span className="text-muted-foreground text-sm">{value[0]}%</span>
    </div>
  );
};

export default Example;
