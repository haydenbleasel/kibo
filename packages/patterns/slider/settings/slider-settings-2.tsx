"use client";

import { SunIcon } from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export const title = "Brightness Control";

const Example = () => {
  const [value, setValue] = useState([80]);

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SunIcon className="size-4" />
          <Label htmlFor="slider">Brightness</Label>
        </div>
        <span className="text-muted-foreground text-sm">{value[0]}%</span>
      </div>
      <Slider
        className="[&_[data-slot=slider-range]]:bg-yellow-500 [&_[data-slot=slider-thumb]]:border-yellow-500"
        id="slider"
        onValueChange={setValue}
        value={value}
      />
    </div>
  );
};

export default Example;
