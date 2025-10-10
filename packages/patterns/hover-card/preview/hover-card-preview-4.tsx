"use client";

import { Calendar, Clock, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const title = "Event Preview";

const Example = () => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <button className="font-medium text-sm underline">
        Team Planning Session
      </button>
    </HoverCardTrigger>
    <HoverCardContent className="w-80">
      <div className="space-y-3">
        <div>
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-sm">Team Planning Session</h4>
            <Badge variant="secondary">Upcoming</Badge>
          </div>
        </div>
        <p className="text-muted-foreground text-sm">
          Quarterly planning meeting to discuss goals, priorities, and team
          alignment for Q1.
        </p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Monday, January 15, 2024</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>2:00 PM - 3:30 PM (90 min)</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>12 attendees</span>
          </div>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
);

export default Example;
