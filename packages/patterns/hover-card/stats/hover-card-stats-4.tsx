"use client";

import { Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const title = "Performance Stats";

const Example = () => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <Badge className="cursor-pointer gap-1.5" variant="secondary">
        <Activity className="h-3 w-3" />
        98.5% Uptime
      </Badge>
    </HoverCardTrigger>
    <HoverCardContent className="w-80">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-sm">System Performance</h4>
          <Badge
            className="text-green-600 dark:text-green-400"
            variant="outline"
          >
            Healthy
          </Badge>
        </div>
        <div className="space-y-2 text-sm">
          <div>
            <div className="mb-1 flex justify-between">
              <span className="text-muted-foreground">Uptime</span>
              <span className="font-medium">98.5%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <div className="h-full w-[98.5%] bg-green-600 dark:bg-green-400" />
            </div>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Response Time:</span>
            <span className="font-medium">124ms</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Error Rate:</span>
            <span className="font-medium">0.02%</span>
          </div>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
);

export default Example;
