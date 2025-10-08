"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const title = "Profile with Follow Button";

const Example = () => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <a className="font-medium text-sm underline" href="#">
        @haydenbleasel
      </a>
    </HoverCardTrigger>
    <HoverCardContent>
      <div className="flex justify-between gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/haydenbleasel.png" />
          <AvatarFallback>HB</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-1">
          <h4 className="font-semibold text-sm">Hayden Bleasel</h4>
          <p className="text-muted-foreground text-sm">
            Product designer and developer
          </p>
          <div className="flex items-center gap-2 pt-2">
            <span className="text-muted-foreground text-xs">
              <span className="font-medium text-foreground">2.5k</span>{" "}
              followers
            </span>
            <span className="text-muted-foreground text-xs">·</span>
            <span className="text-muted-foreground text-xs">
              <span className="font-medium text-foreground">180</span> following
            </span>
          </div>
        </div>
      </div>
      <Button className="mt-4 w-full" size="sm">
        Follow
      </Button>
    </HoverCardContent>
  </HoverCard>
);

export default Example;
