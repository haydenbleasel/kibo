"use client";

import { Users } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";

export const title = "User Stats";

const Example = () => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <button className="flex items-center gap-2 rounded-lg border bg-card p-4 text-left hover:bg-accent">
        <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        <div>
          <div className="font-bold text-2xl">8,432</div>
          <div className="text-muted-foreground text-sm">Active Users</div>
        </div>
      </button>
    </HoverCardTrigger>
    <HoverCardContent className="w-72">
      <div className="space-y-3">
        <h4 className="font-semibold text-sm">User Activity</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="font-bold text-xl">8,432</div>
            <div className="text-muted-foreground text-xs">Active</div>
          </div>
          <div>
            <div className="font-bold text-xl">2,156</div>
            <div className="text-muted-foreground text-xs">New Today</div>
          </div>
        </div>
        <Separator />
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Online Now:</span>
            <span className="font-medium">1,234</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Peak Today:</span>
            <span className="font-medium">3,421</span>
          </div>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
);

export default Example;
