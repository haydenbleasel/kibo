"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const title = "Optional Field";

const Example = () => (
  <div className="w-full max-w-sm space-y-2">
    <Label htmlFor="middlename">
      Middle Name{" "}
      <span className="font-normal text-muted-foreground text-xs">
        (optional)
      </span>
    </Label>
    <Input
      className="bg-background"
      id="middlename"
      placeholder="Enter your middle name"
    />
  </div>
);

export default Example;
