"use client";

import { Package } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const title = "Product Preview";

const Example = () => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <a className="font-medium text-sm underline" href="#">
        Wireless Headphones Pro
      </a>
    </HoverCardTrigger>
    <HoverCardContent className="w-80">
      <div className="space-y-3">
        <div className="flex gap-3">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md bg-muted">
            <Package className="h-8 w-8 text-muted-foreground" />
          </div>
          <div className="flex-1 space-y-1">
            <h4 className="font-semibold text-sm">Wireless Headphones Pro</h4>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">$299</span>
              <span className="text-muted-foreground text-sm line-through">
                $349
              </span>
            </div>
          </div>
        </div>
        <p className="text-muted-foreground text-sm">
          Premium wireless headphones with active noise cancellation, 30-hour
          battery life, and studio-quality sound.
        </p>
        <div className="flex items-center justify-between text-muted-foreground text-xs">
          <span>⭐ 4.8 (2,431 reviews)</span>
          <span className="text-green-600 dark:text-green-400">In Stock</span>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
);

export default Example;
