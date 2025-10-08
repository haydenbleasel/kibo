"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export const title = "Slider with Label";

const Example = () => {
  const [value, setValue] = useState([30]);

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Label htmlFor="slider">Volume</Label>
      <Slider id="slider" onValueChange={setValue} value={value} />
    </div>
  );
};

export default Example;
