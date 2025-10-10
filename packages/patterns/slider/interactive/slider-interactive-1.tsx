"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export const title = "Synced with Input Field";

const Example = () => {
  const [value, setValue] = useState([50]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (!Number.isNaN(newValue) && newValue >= 0 && newValue <= 100) {
      setValue([newValue]);
    }
  };

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex flex-1 flex-col gap-2">
        <Label htmlFor="slider">Value</Label>
        <Slider id="slider" onValueChange={setValue} value={value} />
      </div>
      <Input
        className="w-20 bg-background"
        max={100}
        min={0}
        onChange={handleInputChange}
        type="number"
        value={value[0]}
      />
    </div>
  );
};

export default Example;
