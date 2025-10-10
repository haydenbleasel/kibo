"use client";

import { ExternalLink } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const title = "Link Preview";

const Example = () => (
  <p className="text-muted-foreground text-sm">
    Check out{" "}
    <HoverCard>
      <HoverCardTrigger asChild>
        <a
          className="font-medium text-foreground underline underline-offset-4"
          href="#"
        >
          this article
        </a>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">
            Getting Started with React Server Components
          </h4>
          <p className="text-muted-foreground text-sm">
            Learn how to build modern React applications with server components,
            streaming, and Suspense.
          </p>
          <div className="flex items-center gap-2 text-muted-foreground text-xs">
            <ExternalLink className="h-3 w-3" />
            example.com
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>{" "}
    for more information.
  </p>
);

export default Example;
