"use client";

import { Image } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const title = "Image Preview";

const Example = () => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <button className="flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-accent">
        <Image className="h-4 w-4" />
        <span>hero-banner.jpg</span>
      </button>
    </HoverCardTrigger>
    <HoverCardContent className="w-80">
      <div className="space-y-3">
        <div className="aspect-video overflow-hidden rounded-md bg-muted">
          <img
            alt="Preview"
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=225&fit=crop"
          />
        </div>
        <div className="space-y-1">
          <h4 className="font-semibold text-sm">hero-banner.jpg</h4>
          <p className="text-muted-foreground text-xs">
            1920 × 1080 · 1.2 MB · JPEG
          </p>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
);

export default Example;
