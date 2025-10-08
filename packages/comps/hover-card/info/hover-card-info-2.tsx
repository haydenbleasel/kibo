"use client";

import { Info } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const title = "Info with Title";

const Example = () => (
  <div className="flex items-center gap-2">
    <span className="text-sm">API Rate Limit</span>
    <HoverCard>
      <HoverCardTrigger>
        <Info className="h-4 w-4 text-muted-foreground" />
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">Rate Limiting</h4>
          <p className="text-muted-foreground text-sm">
            Free tier: 100 requests per hour
            <br />
            Pro tier: 1,000 requests per hour
            <br />
            Enterprise: Unlimited requests
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  </div>
);

export default Example;
