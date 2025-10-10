"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const title = "Input with Description";

const Example = () => (
  <div className="w-full max-w-sm space-y-2">
    <Label htmlFor="username">Username</Label>
    <p className="text-muted-foreground text-sm">
      This will be your unique identifier on the platform.
    </p>
    <Input className="bg-background" id="username" placeholder="johndoe" />
  </div>
);

export default Example;
