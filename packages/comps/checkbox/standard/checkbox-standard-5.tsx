"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export const title = "Todo Style Checkbox";

const Example = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        checked={checked}
        id="todo"
        onCheckedChange={(value) => setChecked(value as boolean)}
      />
      <Label
        className={cn(
          "transition-all",
          checked && "text-muted-foreground line-through"
        )}
        htmlFor="todo"
      >
        Complete the project documentation
      </Label>
    </div>
  );
};

export default Example;
