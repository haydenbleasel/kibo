"use client";

import { AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const title = "Multiple Validation Messages";

const Example = () => (
  <div className="w-full max-w-sm space-y-2">
    <Label htmlFor="password-multiple">Password</Label>
    <Input
      aria-invalid="true"
      className="bg-background"
      defaultValue="pass"
      id="password-multiple"
      placeholder="Enter password"
      type="password"
    />
    <div className="space-y-1">
      <div className="flex items-center gap-2 text-destructive text-sm">
        <AlertCircle className="h-4 w-4" />
        <span>Password must be at least 8 characters</span>
      </div>
      <div className="flex items-center gap-2 text-destructive text-sm">
        <AlertCircle className="h-4 w-4" />
        <span>Password must contain at least one number</span>
      </div>
      <div className="flex items-center gap-2 text-destructive text-sm">
        <AlertCircle className="h-4 w-4" />
        <span>Password must contain at least one special character</span>
      </div>
    </div>
  </div>
);

export default Example;
