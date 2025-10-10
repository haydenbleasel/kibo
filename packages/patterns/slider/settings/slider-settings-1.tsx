"use client";

import { Volume2Icon } from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export const title = "Volume Control";

const Example = () => {
  const [value, setValue] = useState([65]);

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Volume2Icon className="size-4" />
          <Label htmlFor="slider">Volume</Label>
        </div>
        <span className="text-muted-foreground text-sm">{value[0]}%</span>
      </div>
      <Slider id="slider" onValueChange={setValue} value={value} />
    </div>
  );
};

export default Example;
