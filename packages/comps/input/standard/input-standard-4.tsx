"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const title = "Required Field";

const Example = () => (
  <div className="w-full max-w-sm space-y-2">
    <Label htmlFor="fullname">
      Full Name <span className="text-destructive">*</span>
    </Label>
    <Input
      className="bg-background"
      id="fullname"
      placeholder="Enter your full name"
      required
    />
    <p className="text-muted-foreground text-xs">* Required field</p>
  </div>
);

export default Example;
