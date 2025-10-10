"use client";

import { ArrowDown, ArrowUp, DollarSign } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const title = "Financial Stats";

const Example = () => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <button className="flex items-center gap-2 rounded-lg border bg-card p-4 text-left hover:bg-accent">
        <DollarSign className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
        <div>
          <div className="font-bold text-2xl">$45.2k</div>
          <div className="text-muted-foreground text-sm">Monthly Revenue</div>
        </div>
      </button>
    </HoverCardTrigger>
    <HoverCardContent className="w-80">
      <div className="space-y-3">
        <h4 className="font-semibold text-sm">Revenue Breakdown</h4>
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between rounded-md bg-muted p-2">
            <div className="flex items-center gap-2">
              <ArrowUp className="h-4 w-4 text-green-600 dark:text-green-400" />
              <span className="text-muted-foreground">Income</span>
            </div>
            <span className="font-medium">$52.8k</span>
          </div>
          <div className="flex items-center justify-between rounded-md bg-muted p-2">
            <div className="flex items-center gap-2">
              <ArrowDown className="h-4 w-4 text-red-600 dark:text-red-400" />
              <span className="text-muted-foreground">Expenses</span>
            </div>
            <span className="font-medium">$7.6k</span>
          </div>
          <div className="flex items-center justify-between pt-2">
            <span className="text-muted-foreground">Net Profit</span>
            <span className="font-bold text-green-600 text-lg dark:text-green-400">
              $45.2k
            </span>
          </div>
        </div>
        <p className="text-muted-foreground text-xs">+18.2% vs. last month</p>
      </div>
    </HoverCardContent>
  </HoverCard>
);

export default Example;
