"use client";

import { DollarSign } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const title = "Currency Input";

const Example = () => (
  <div className="w-full max-w-sm space-y-2">
    <Label htmlFor="currency-input">Amount</Label>
    <div className="relative">
      <DollarSign className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 text-muted-foreground" />
      <Input
        className="bg-background pl-9"
        id="currency-input"
        min="0"
        placeholder="0.00"
        step="0.01"
        type="number"
      />
    </div>
    <p className="text-muted-foreground text-xs">Enter amount in USD</p>
  </div>
);

export default Example;
