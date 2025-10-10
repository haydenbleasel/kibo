"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const title = "Tooltip with Longer Text";

const Example = () => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover for more info</Button>
    </TooltipTrigger>
    <TooltipContent className="max-w-xs">
      <p>
        This is a longer tooltip message that provides more detailed information
        to the user. It wraps to multiple lines when needed.
      </p>
    </TooltipContent>
  </Tooltip>
);

export default Example;
