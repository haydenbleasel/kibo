"use client";

import { Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const title = "Phone Input";

const Example = () => (
  <div className="w-full max-w-sm space-y-2">
    <Label htmlFor="phone-input">Phone Number</Label>
    <div className="relative">
      <Phone className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 text-muted-foreground" />
      <Input
        className="bg-background pl-9"
        id="phone-input"
        placeholder="+1 (555) 000-0000"
        type="tel"
      />
    </div>
    <p className="text-muted-foreground text-xs">Format: +1 (555) 000-0000</p>
  </div>
);

export default Example;
