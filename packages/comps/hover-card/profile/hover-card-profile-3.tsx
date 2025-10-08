"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const title = "Profile with Badge";

const Example = () => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <a className="flex items-center gap-2 font-medium text-sm" href="#">
        <Avatar className="h-6 w-6">
          <AvatarImage src="https://github.com/haydenbleasel.png" />
          <AvatarFallback>HB</AvatarFallback>
        </Avatar>
        <span>Hayden Bleasel</span>
      </a>
    </HoverCardTrigger>
    <HoverCardContent>
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/haydenbleasel.png" />
          <AvatarFallback>HB</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-2">
            <h4 className="font-semibold text-sm">Hayden Bleasel</h4>
            <Badge variant="secondary">Pro</Badge>
          </div>
          <p className="text-muted-foreground text-sm">
            Product designer and developer
          </p>
          <p className="text-muted-foreground text-xs">Joined March 2020</p>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
);

export default Example;
