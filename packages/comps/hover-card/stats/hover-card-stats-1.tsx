"use client";

import { TrendingUp } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const title = "Simple Stats";

const Example = () => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <button className="flex items-center gap-2 rounded-lg border bg-card p-4 text-left hover:bg-accent">
        <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" />
        <div>
          <div className="font-bold text-2xl">12,543</div>
          <div className="text-muted-foreground text-sm">Total Views</div>
        </div>
      </button>
    </HoverCardTrigger>
    <HoverCardContent>
      <div className="space-y-2">
        <h4 className="font-semibold text-sm">View Statistics</h4>
        <div className="space-y-1 text-muted-foreground text-sm">
          <div className="flex justify-between">
            <span>Today:</span>
            <span className="font-medium text-foreground">342</span>
          </div>
          <div className="flex justify-between">
            <span>This Week:</span>
            <span className="font-medium text-foreground">2,156</span>
          </div>
          <div className="flex justify-between">
            <span>This Month:</span>
            <span className="font-medium text-foreground">8,932</span>
          </div>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
);

export default Example;
