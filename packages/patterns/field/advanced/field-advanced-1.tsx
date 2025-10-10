"use client";

import { useState } from "react";
import { Field, FieldDescription, FieldTitle } from "@/components/ui/field";
import { Slider } from "@/components/ui/slider";

export const title = "Simple Slider";

const Example = () => {
  const [value, setValue] = useState([50]);
  return (
    <div className="w-full max-w-md">
      <Field>
        <FieldTitle>Volume</FieldTitle>
        <FieldDescription>
          Current volume: <span className="font-medium">{value[0]}%</span>
        </FieldDescription>
        <Slider
          aria-label="Volume"
          className="mt-2 w-full"
          max={100}
          min={0}
          onValueChange={setValue}
          step={1}
          value={value}
        />
      </Field>
    </div>
  );
};

export default Example;
