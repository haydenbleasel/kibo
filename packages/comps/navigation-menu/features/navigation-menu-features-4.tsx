"use client";

import { Rocket, Sparkles, Star, Target, TrendingUp, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const title = "Features with Badges";

const features = [
  {
    icon: Sparkles,
    label: "AI Assistant",
    description: "Intelligent code suggestions powered by AI",
    badge: { label: "New", variant: "default" as const },
    href: "#",
  },
  {
    icon: Rocket,
    label: "Instant Deploy",
    description: "Deploy to production in seconds",
    badge: { label: "Beta", variant: "secondary" as const },
    href: "#",
  },
  {
    icon: Target,
    label: "Smart Testing",
    description: "Automated test generation and execution",
    badge: { label: "Preview", variant: "outline" as const },
    href: "#",
  },
  {
    icon: TrendingUp,
    label: "Performance Monitoring",
    description: "Real-time performance metrics and alerts",
    badge: { label: "New", variant: "default" as const },
    href: "#",
  },
  {
    icon: Zap,
    label: "Edge Functions",
    description: "Run code at the edge for ultra-low latency",
    badge: { label: "Beta", variant: "secondary" as const },
    href: "#",
  },
  {
    icon: Star,
    label: "Premium Templates",
    description: "Access exclusive professionally designed templates",
    badge: { label: "Pro", variant: "outline" as const },
    href: "#",
  },
];

const Example = () => (
  <div className="pr-[50vw] pb-[50vh]">
    <div className="w-full max-w-md rounded-md border bg-background p-px">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>What's New</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[400px] space-y-2 p-4">
                {features.map((feature) => (
                  <NavigationMenuLink
                    className="flex flex-row items-start gap-2"
                    href={feature.href}
                    key={feature.label}
                  >
                    <feature.icon className="mt-1 size-5" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="block font-medium">
                          {feature.label}
                        </span>
                        <Badge variant={feature.badge.variant}>
                          {feature.badge.label}
                        </Badge>
                      </div>
                      <span className="block text-muted-foreground">
                        {feature.description}
                      </span>
                    </div>
                  </NavigationMenuLink>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </div>
);

export default Example;
