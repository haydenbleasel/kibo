"use client";

import { Rating, RatingButton } from "@repo/rating";
import { Input } from "@repo/shadcn-ui/components/ui/input";
import { useState } from "react";

const Example = () => {
  const [value, setValue] = useState(3);

  return (
    <>
      <Rating onValueChange={setValue} value={value}>
        {Array.from({ length: 5 }).map((_, index) => (
          <RatingButton key={index} />
        ))}
      </Rating>
      <Input
        className="w-32 bg-background"
        max={5}
        min={0}
        onChange={(e) => setValue(Number(e.target.value))}
        type="number"
        value={value}
      />
    </>
  );
};

export default Example;
