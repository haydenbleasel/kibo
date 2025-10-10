"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const title = "Number Input with Controls";

const Example = () => {
  const [value, setValue] = useState(1);

  return (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="quantity">Quantity</Label>
      <div className="flex gap-2">
        <Button
          onClick={() => setValue(Math.max(1, value - 1))}
          size="icon"
          type="button"
          variant="outline"
        >
          <Minus className="h-4 w-4" />
        </Button>
        <Input
          className="bg-background text-center"
          id="quantity"
          min="1"
          onChange={(e) => setValue(Number(e.target.value))}
          type="number"
          value={value}
        />
        <Button
          onClick={() => setValue(value + 1)}
          size="icon"
          type="button"
          variant="outline"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Example;
