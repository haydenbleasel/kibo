"use client";

import { Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const title = "Date Input";

const Example = () => (
  <div className="w-full max-w-sm space-y-2">
    <Label htmlFor="date-input">Date of Birth</Label>
    <div className="relative">
      <Calendar className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 text-muted-foreground" />
      <Input className="bg-background pl-9" id="date-input" type="date" />
    </div>
  </div>
);

export default Example;
