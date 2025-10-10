"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

export const title = "Textarea with Floating Label";

const Example = () => {
  const [value, setValue] = useState("");

  return (
    <div className="relative w-full max-w-md">
      <Textarea
        className="peer bg-background focus:pt-5"
        id="floating"
        onChange={(e) => setValue(e.target.value)}
        placeholder=" "
        value={value}
      />
      <label
        className="absolute top-2 left-3 text-muted-foreground text-sm transition-all peer-placeholder-shown:top-3 peer-focus:top-2 peer-focus:text-xs"
        htmlFor="floating"
      >
        Message
      </label>
    </div>
  );
};

export default Example;
