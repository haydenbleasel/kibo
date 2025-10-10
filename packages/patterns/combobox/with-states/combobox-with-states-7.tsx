"use client";

import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

export const title = "Read-Only/View Mode";

const selectedOption = "Option 2";

const Example = () => (
  <div className="space-y-2">
    <Button
      className="w-[200px] justify-between"
      disabled
      role="combobox"
      variant="outline"
    >
      <div className="flex items-center gap-2">
        <Eye className="size-4 opacity-50" />
        {selectedOption}
      </div>
    </Button>
    <p className="text-muted-foreground text-xs">
      This field is read-only and cannot be changed
    </p>
  </div>
);

export default Example;
