"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export const title = "With Increment/Decrement Buttons";

const Example = () => {
  const [value, setValue] = useState([50]);

  const increment = () => {
    setValue([Math.min(100, value[0] + 10)]);
  };

  const decrement = () => {
    setValue([Math.max(0, value[0] - 10)]);
  };

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="slider">Quantity</Label>
        <span className="text-muted-foreground text-sm">{value[0]}</span>
      </div>
      <div className="flex items-center gap-2">
        <Button onClick={decrement} size="icon" variant="outline">
          <MinusIcon className="size-4" />
        </Button>
        <Slider
          className="flex-1"
          id="slider"
          onValueChange={setValue}
          value={value}
        />
        <Button onClick={increment} size="icon" variant="outline">
          <PlusIcon className="size-4" />
        </Button>
      </div>
    </div>
  );
};

export default Example;
