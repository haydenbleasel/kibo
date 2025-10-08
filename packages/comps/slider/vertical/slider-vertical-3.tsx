"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export const title = "Vertical with Labels";

const Example = () => {
  const [value, setValue] = useState([50]);

  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-end gap-2 text-muted-foreground text-xs">
        <span>100</span>
        <span className="mt-8">75</span>
        <span className="mt-8">50</span>
        <span className="mt-8">25</span>
        <span className="mt-8">0</span>
      </div>
      <Slider
        className="h-48"
        id="slider"
        onValueChange={setValue}
        orientation="vertical"
        value={value}
      />
      <div className="flex flex-col gap-2">
        <Label htmlFor="slider">Level</Label>
        <span className="text-muted-foreground text-sm">{value[0]}</span>
      </div>
    </div>
  );
};

export default Example;
