"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const title = "Textarea with Character Count";

const Example = () => {
  const [value, setValue] = useState("");
  const maxLength = 200;

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Label htmlFor="tweet">Tweet</Label>
      <Textarea
        className="bg-background"
        id="tweet"
        maxLength={maxLength}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What's happening?"
        value={value}
      />
      <p className="text-right text-muted-foreground text-sm">
        {value.length}/{maxLength}
      </p>
    </div>
  );
};

export default Example;
