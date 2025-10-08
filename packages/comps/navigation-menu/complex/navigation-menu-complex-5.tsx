"use client";

import type { LucideIcon } from "lucide-react";
import { ArrowRight, Code, Layers, Palette, Play, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const title = "Mixed Content Types";

const solutions: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: { label: string; variant: "default" | "secondary" };
}> = [
  {
    icon: Code,
    title: "Developer Platform",
    description: "Everything you need to build modern apps",
    badge: { label: "Popular", variant: "secondary" },
  },
  {
    icon: Palette,
    title: "Design System",
    description: "Beautiful, accessible components",
  },
  {
    icon: Layers,
    title: "Component Library",
    description: "Pre-built UI components and templates",
    badge: { label: "New", variant: "default" },
  },
  {
    icon: Zap,
    title: "API Infrastructure",
    description: "Scalable backend services",
  },
];

const sidebarContent = {
  webinar: {
    badge: { label: "Webinar", variant: "default" as const },
    title: "Building at Scale",
    description: "Learn how teams scale their applications",
    buttonText: "Watch Now",
    buttonIcon: Play,
  },
  getStarted: {
    title: "Start Building",
    description: "Get started with our platform in minutes",
    buttons: [
      {
        label: "Create Account",
        variant: "default" as const,
        icon: ArrowRight,
      },
      { label: "View Docs", variant: "outline" as const },
    ],
  },
};

const Example = () => (
  <div className="pr-[50vw] pb-[50vh]">
    <div className="w-full max-w-md rounded-md border bg-background p-px">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[800px] p-6">
                <div className="grid grid-cols-[1fr_300px] gap-6">
                  <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                    {solutions.map((solution) => {
                      const Icon = solution.icon;
                      return (
                        <NavigationMenuLink
                          className="flex flex-col justify-between gap-4"
                          href="#"
                          key={solution.title}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <Icon className="size-5" />
                            {solution.badge && (
                              <Badge variant={solution.badge.variant}>
                                {solution.badge.label}
                              </Badge>
                            )}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">
                                {solution.title}
                              </span>
                            </div>
                            <span className="text-muted-foreground">
                              {solution.description}
                            </span>
                          </div>
                        </NavigationMenuLink>
                      );
                    })}
                  </div>
                  <div className="space-y-4">
                    <div className="overflow-hidden rounded-lg bg-muted">
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5" />
                      <div className="p-4">
                        <Badge
                          className="mb-2"
                          variant={sidebarContent.webinar.badge.variant}
                        >
                          {sidebarContent.webinar.badge.label}
                        </Badge>
                        <h4 className="mb-1 font-semibold">
                          {sidebarContent.webinar.title}
                        </h4>
                        <p className="mb-3 text-muted-foreground text-sm">
                          {sidebarContent.webinar.description}
                        </p>
                        <Button className="w-full" size="sm">
                          <sidebarContent.webinar.buttonIcon />
                          {sidebarContent.webinar.buttonText}
                        </Button>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <h4 className="mb-1 font-semibold">
                        {sidebarContent.getStarted.title}
                      </h4>
                      <p className="mb-3 text-muted-foreground text-sm">
                        {sidebarContent.getStarted.description}
                      </p>
                      <div className="space-y-2">
                        {sidebarContent.getStarted.buttons.map((button) => {
                          const Icon = button.icon;
                          return (
                            <Button
                              className="w-full"
                              key={button.label}
                              size="sm"
                              variant={button.variant}
                            >
                              {button.label}
                              {Icon && <Icon />}
                            </Button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </div>
);

export default Example;
