"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const title = "Input with Label";

const Example = () => (
  <div className="w-full max-w-sm space-y-2">
    <Label htmlFor="name">Name</Label>
    <Input className="bg-background" id="name" placeholder="Enter your name" />
  </div>
);

export default Example;
