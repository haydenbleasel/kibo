"use client";

import { CalendarDays, MapPin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const title = "Profile with Location";

const Example = () => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <a className="font-medium text-sm underline" href="#">
        @haydenbleasel
      </a>
    </HoverCardTrigger>
    <HoverCardContent className="w-80">
      <div className="flex gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src="https://github.com/haydenbleasel.png" />
          <AvatarFallback>HB</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-2">
          <div>
            <h4 className="font-semibold text-sm">Hayden Bleasel</h4>
            <p className="text-muted-foreground text-sm">@haydenbleasel</p>
          </div>
          <p className="text-sm">
            Product designer and developer building tools for creators.
          </p>
          <div className="flex items-center gap-4 text-muted-foreground text-xs">
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              San Francisco
            </div>
            <div className="flex items-center gap-1">
              <CalendarDays className="h-3 w-3" />
              Joined 2020
            </div>
          </div>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
);

export default Example;
