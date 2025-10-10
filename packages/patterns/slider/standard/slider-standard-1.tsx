"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";

export const title = "Simple Slider";

const Example = () => {
  const [value, setValue] = useState([50]);

  return (
    <div className="w-full max-w-md">
      <Slider onValueChange={setValue} value={value} />
    </div>
  );
};

export default Example;
