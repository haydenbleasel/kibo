"use client";

import { ArrowUp } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const title = "Growth Stats";

const Example = () => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <button className="flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm hover:bg-accent">
        <span className="font-semibold">$12,543</span>
        <span className="flex items-center gap-1 text-green-600 text-xs dark:text-green-400">
          <ArrowUp className="h-3 w-3" />
          12.5%
        </span>
      </button>
    </HoverCardTrigger>
    <HoverCardContent>
      <div className="space-y-3">
        <div>
          <h4 className="font-semibold text-sm">Revenue Growth</h4>
          <p className="text-muted-foreground text-xs">vs. previous period</p>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Current:</span>
            <span className="font-medium">$12,543</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Previous:</span>
            <span className="font-medium">$11,156</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Change:</span>
            <span className="font-medium text-green-600 dark:text-green-400">
              +$1,387
            </span>
          </div>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
);

export default Example;
