"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export const title = "With Reset Button";

const Example = () => {
  const defaultValue = 50;
  const [value, setValue] = useState([defaultValue]);

  const reset = () => {
    setValue([defaultValue]);
  };

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="slider">Adjustment</Label>
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground text-sm">{value[0]}</span>
          <Button onClick={reset} size="sm" variant="outline">
            Reset
          </Button>
        </div>
      </div>
      <Slider id="slider" onValueChange={setValue} value={value} />
    </div>
  );
};

export default Example;
