"use client";

import { CheckCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const title = "Tooltip with Icon";

const Example = () => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Status</Button>
    </TooltipTrigger>
    <TooltipContent>
      <div className="flex items-center gap-2">
        <CheckCircleIcon className="size-4 text-primary-foreground" />
        <p>All systems operational</p>
      </div>
    </TooltipContent>
  </Tooltip>
);

export default Example;
