"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const title = "Input with Character Counter";

const Example = () => {
  const [value, setValue] = useState("");
  const maxLength = 50;

  return (
    <div className="w-full max-w-sm space-y-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="bio">Bio</Label>
        <span className="text-muted-foreground text-xs">
          {value.length}/{maxLength}
        </span>
      </div>
      <Input
        className="bg-background"
        id="bio"
        maxLength={maxLength}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Tell us about yourself"
        value={value}
      />
    </div>
  );
};

export default Example;
