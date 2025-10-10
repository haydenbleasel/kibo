"use client";

import { Code } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const title = "Technical Info";

const Example = () => (
  <div className="flex items-center gap-2">
    <span className="text-sm">API Endpoint</span>
    <HoverCard>
      <HoverCardTrigger>
        <Code className="h-4 w-4 text-muted-foreground" />
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-3">
          <h4 className="font-semibold text-sm">Endpoint Details</h4>
          <div className="space-y-2 text-sm">
            <div>
              <span className="text-muted-foreground">Method:</span>{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
                GET
              </code>
            </div>
            <div>
              <span className="text-muted-foreground">URL:</span>{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
                /api/v1/users
              </code>
            </div>
            <div>
              <span className="text-muted-foreground">Auth:</span>{" "}
              <span className="text-xs">Bearer Token Required</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  </div>
);

export default Example;
