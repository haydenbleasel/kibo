"use client";

import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const title = "Email Input";

const Example = () => (
  <div className="w-full max-w-sm space-y-2">
    <Label htmlFor="email-input">Email Address</Label>
    <div className="relative">
      <Mail className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 text-muted-foreground" />
      <Input
        className="bg-background pl-9"
        id="email-input"
        placeholder="you@example.com"
        type="email"
      />
    </div>
  </div>
);

export default Example;
