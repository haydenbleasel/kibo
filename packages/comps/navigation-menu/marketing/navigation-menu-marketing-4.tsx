"use client";

import { BookOpen, Download, FileText, Play, Video } from "lucide-react";
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

export const title = "Resources with Lead Magnets";

const resources = [
  {
    icon: FileText,
    label: "Documentation",
    description: "Complete guides and API references",
    href: "#",
    badge: null,
  },
  {
    icon: Video,
    label: "Video Tutorials",
    description: "Learn with step-by-step video courses",
    href: "#",
    badge: { label: "Free", variant: "secondary" as const },
  },
  {
    icon: BookOpen,
    label: "Blog",
    description: "Latest insights and best practices",
    href: "#",
    badge: null,
  },
];

const featuredContent = {
  badge: { label: "Featured", variant: "default" as const },
  title: "Complete Platform Guide",
  description: "80-page comprehensive guide to mastering our platform",
  button: {
    icon: Download,
    label: "Download Free",
  },
};

const webinar = {
  title: "Webinar: Advanced Strategies",
  description: "Join our next live session on Friday at 2 PM EST",
  button: {
    icon: Play,
    label: "Register Now",
  },
};

const Example = () => (
  <div className="pr-[50vw] pb-[50vh]">
    <div className="w-full max-w-md rounded-md border bg-background p-px">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[600px] p-4">
                <div className="grid grid-cols-[1fr_240px] gap-4">
                  <div className="space-y-3">
                    {resources.map((resource) => (
                      <NavigationMenuLink
                        className="flex flex-row items-start gap-2"
                        href={resource.href}
                        key={resource.label}
                      >
                        <resource.icon className="mt-1 size-5" />
                        <div>
                          {resource.badge ? (
                            <div className="flex items-center gap-2">
                              <span className="block font-medium">
                                {resource.label}
                              </span>
                              <Badge variant={resource.badge.variant}>
                                {resource.badge.label}
                              </Badge>
                            </div>
                          ) : (
                            <span className="block font-medium">
                              {resource.label}
                            </span>
                          )}
                          <span className="block text-muted-foreground">
                            {resource.description}
                          </span>
                        </div>
                      </NavigationMenuLink>
                    ))}
                  </div>
                  <div className="space-y-3 rounded-lg bg-muted p-4">
                    <div className="aspect-video overflow-hidden rounded bg-background" />
                    <div className="space-y-2">
                      <Badge variant={featuredContent.badge.variant}>
                        {featuredContent.badge.label}
                      </Badge>
                      <h4 className="font-semibold">{featuredContent.title}</h4>
                      <p className="text-muted-foreground text-xs">
                        {featuredContent.description}
                      </p>
                    </div>
                    <Button className="w-full" size="sm">
                      <featuredContent.button.icon />
                      {featuredContent.button.label}
                    </Button>
                  </div>
                </div>
                <div className="mt-4 rounded-lg bg-primary/5 p-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h4 className="font-semibold">{webinar.title}</h4>
                      <p className="text-muted-foreground text-sm">
                        {webinar.description}
                      </p>
                    </div>
                    <Button size="sm">
                      <webinar.button.icon />
                      {webinar.button.label}
                    </Button>
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
