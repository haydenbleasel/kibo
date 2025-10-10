"use client";

import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const title = "Tooltip with Keyboard Shortcut";

const Example = () => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Save</Button>
    </TooltipTrigger>
    <TooltipContent>
      <div className="flex items-center gap-2">
        <p>Save changes</p>
        <Kbd className="text-primary-foreground">⌘S</Kbd>
      </div>
    </TooltipContent>
  </Tooltip>
);

export default Example;
