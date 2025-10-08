"use client";

import { FileText } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const title = "Document Preview";

const Example = () => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <a
        className="flex items-center gap-2 font-medium text-sm underline"
        href="#"
      >
        <FileText className="h-4 w-4" />
        Project Proposal.pdf
      </a>
    </HoverCardTrigger>
    <HoverCardContent className="w-80">
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-red-100 dark:bg-red-900">
            <FileText className="h-5 w-5 text-red-600 dark:text-red-400" />
          </div>
          <div className="flex-1 space-y-1">
            <h4 className="font-semibold text-sm">Project Proposal.pdf</h4>
            <p className="text-muted-foreground text-xs">
              2.4 MB · PDF Document
            </p>
          </div>
        </div>
        <p className="text-muted-foreground text-sm">
          Comprehensive project proposal including timeline, budget, and
          deliverables for Q1 2024.
        </p>
        <p className="text-muted-foreground text-xs">
          Last modified: December 15, 2023
        </p>
      </div>
    </HoverCardContent>
  </HoverCard>
);

export default Example;
