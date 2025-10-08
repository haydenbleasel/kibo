"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const title = "Tooltip with Title and Description";

const Example = () => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent className="max-w-xs">
      <div className="flex flex-col gap-1">
        <p className="font-semibold">Pro Feature</p>
        <p className="text-xs">
          Upgrade to Pro to unlock this feature and many more.
        </p>
      </div>
    </TooltipContent>
  </Tooltip>
);

export default Example;
