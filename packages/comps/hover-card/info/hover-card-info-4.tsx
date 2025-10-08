"use client";

import { AlertCircle } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const title = "Warning Info";

const Example = () => (
  <div className="flex items-center gap-2 rounded-lg border border-orange-200 bg-orange-50 p-3 dark:border-orange-900 dark:bg-orange-950">
    <AlertCircle className="h-4 w-4 text-orange-600 dark:text-orange-400" />
    <span className="text-orange-900 text-sm dark:text-orange-100">
      Limited time offer
    </span>
    <HoverCard>
      <HoverCardTrigger className="ml-auto inline-flex">
        <span className="text-orange-600 text-xs underline dark:text-orange-400">
          Details
        </span>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">Special Promotion</h4>
          <p className="text-muted-foreground text-sm">
            Get 50% off your first month when you upgrade to Pro before the end
            of this week. This offer expires on December 31st.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  </div>
);

export default Example;
