"use client";

import { Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const title = "Info with Icon and Badge";

const Example = () => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <Badge className="cursor-pointer gap-1" variant="secondary">
        <Shield className="h-3 w-3" />
        Verified
      </Badge>
    </HoverCardTrigger>
    <HoverCardContent>
      <div className="flex gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
          <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />
        </div>
        <div className="space-y-1">
          <h4 className="font-semibold text-sm">Verified Account</h4>
          <p className="text-muted-foreground text-sm">
            This account has been verified by our team and meets our security
            standards.
          </p>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
);

export default Example;
