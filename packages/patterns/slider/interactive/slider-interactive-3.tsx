"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export const title = "With Preset Values";

const Example = () => {
  const [value, setValue] = useState([50]);
  const presets = [0, 25, 50, 75, 100];

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex items-center justify-between">
        <Label htmlFor="slider">Level</Label>
        <span className="text-muted-foreground text-sm">{value[0]}</span>
      </div>
      <Slider id="slider" onValueChange={setValue} value={value} />
      <div className="flex gap-2">
        {presets.map((preset) => (
          <Button
            className="flex-1"
            key={preset}
            onClick={() => setValue([preset])}
            size="sm"
            variant="outline"
          >
            {preset}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Example;
