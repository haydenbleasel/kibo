"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const title = "Input with Helper Text";

const Example = () => (
  <div className="w-full max-w-sm space-y-2">
    <Label htmlFor="email">Email</Label>
    <Input
      className="bg-background"
      id="email"
      placeholder="you@example.com"
      type="email"
    />
    <p className="text-muted-foreground text-sm">
      We'll never share your email with anyone else.
    </p>
  </div>
);

export default Example;
