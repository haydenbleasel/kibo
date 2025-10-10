"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const title = "Indeterminate Checkbox";

const Example = () => {
  const [checked, setChecked] = useState<boolean | "indeterminate">(
    "indeterminate"
  );

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        checked={checked}
        id="indeterminate"
        onCheckedChange={setChecked}
      />
      <Label htmlFor="indeterminate">Indeterminate state</Label>
    </div>
  );
};

export default Example;
