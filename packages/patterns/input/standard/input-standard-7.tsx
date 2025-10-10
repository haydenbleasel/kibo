"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const title = "Inline Label";

const Example = () => (
  <div className="flex w-full max-w-sm items-center gap-4">
    <Label className="w-24 text-right" htmlFor="age">
      Age
    </Label>
    <Input
      className="flex-1 bg-background"
      id="age"
      placeholder="25"
      type="number"
    />
  </div>
);

export default Example;
