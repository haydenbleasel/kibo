"use client";

import { AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const title = "Error State";

const Example = () => (
  <div className="w-full max-w-sm space-y-2">
    <Label htmlFor="email-error">Email</Label>
    <Input
      aria-invalid="true"
      className="bg-background"
      defaultValue="invalid-email"
      id="email-error"
      placeholder="you@example.com"
      type="email"
    />
    <div className="flex items-center gap-2 text-destructive text-sm">
      <AlertCircle className="h-4 w-4" />
      <span>Please enter a valid email address</span>
    </div>
  </div>
);

export default Example;
