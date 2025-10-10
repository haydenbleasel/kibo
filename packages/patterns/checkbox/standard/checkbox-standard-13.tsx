"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const title = "Nested List";

const Example = () => {
  const [parentChecked, setParentChecked] = useState(false);
  const [child1Checked, setChild1Checked] = useState(false);
  const [child2Checked, setChild2Checked] = useState(false);
  const [child3Checked, setChild3Checked] = useState(false);

  const handleParentChange = (checked: boolean) => {
    setParentChecked(checked);
    setChild1Checked(checked);
    setChild2Checked(checked);
    setChild3Checked(checked);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <Checkbox
          checked={parentChecked}
          id="parent"
          onCheckedChange={handleParentChange}
        />
        <Label className="font-semibold" htmlFor="parent">
          Select all features
        </Label>
      </div>
      <div className="ml-6 space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox
            checked={child1Checked}
            id="child1"
            onCheckedChange={setChild1Checked}
          />
          <Label htmlFor="child1">Analytics dashboard</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            checked={child2Checked}
            id="child2"
            onCheckedChange={setChild2Checked}
          />
          <Label htmlFor="child2">Advanced reporting</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            checked={child3Checked}
            id="child3"
            onCheckedChange={setChild3Checked}
          />
          <Label htmlFor="child3">Data export</Label>
        </div>
      </div>
    </div>
  );
};

export default Example;
