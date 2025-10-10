"use client";

import { AlertTriangle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const title = "Warning State";

const Example = () => (
  <div className="w-full max-w-sm space-y-2">
    <Label htmlFor="password-warning">Password</Label>
    <Input
      className="border-orange-600 bg-background focus-visible:border-orange-600 focus-visible:ring-orange-600/50"
      defaultValue="weak123"
      id="password-warning"
      placeholder="Enter password"
      type="password"
    />
    <div className="flex items-center gap-2 text-orange-600 text-sm dark:text-orange-400">
      <AlertTriangle className="h-4 w-4" />
      <span>Password is weak. Consider using a stronger password</span>
    </div>
  </div>
);

export default Example;
