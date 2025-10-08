"use client";

import { ThermometerIcon } from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export const title = "Temperature Control";

const Example = () => {
  const [value, setValue] = useState([22]);

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ThermometerIcon className="size-4" />
          <Label htmlFor="slider">Temperature</Label>
        </div>
        <span className="text-muted-foreground text-sm">{value[0]}°C</span>
      </div>
      <Slider
        className="[&_[data-slot=slider-range]]:bg-transparent [&_[data-slot=slider-track]]:bg-gradient-to-r [&_[data-slot=slider-track]]:from-blue-400 [&_[data-slot=slider-track]]:to-red-400"
        id="slider"
        max={30}
        min={16}
        onValueChange={setValue}
        value={value}
      />
      <div className="flex items-center justify-between text-muted-foreground text-xs">
        <span>16°C</span>
        <span>30°C</span>
      </div>
    </div>
  );
};

export default Example;
