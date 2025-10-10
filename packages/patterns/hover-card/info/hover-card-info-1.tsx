"use client";

import { HelpCircle } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const title = "Simple Info Tooltip";

const Example = () => (
  <div className="flex items-center gap-2">
    <span className="text-sm">Storage Limit</span>
    <HoverCard>
      <HoverCardTrigger>
        <HelpCircle className="h-4 w-4 text-muted-foreground" />
      </HoverCardTrigger>
      <HoverCardContent>
        <p className="text-sm">
          Your current plan includes 100GB of storage. Upgrade to get more space
          for your files.
        </p>
      </HoverCardContent>
    </HoverCard>
  </div>
);

export default Example;
