"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Palette,
  Layers,
  Zap,
  ArrowRight,
  Play,
} from "lucide-react";

export const title = "Mixed Content Types";

const Example = () => (
  <div className="pb-[50vh]">
    <div className="w-full max-w-md bg-background rounded-md p-px border">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[800px] p-6">
              <div className="grid grid-cols-[1fr_300px] gap-6">
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  <NavigationMenuLink href="#">
                    <Code className="h-5 w-5" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Developer Platform</span>
                        <Badge variant="secondary">Popular</Badge>
                      </div>
                      <span className="text-muted-foreground">
                        Everything you need to build modern apps
                      </span>
                    </div>
                  </NavigationMenuLink>
                  <NavigationMenuLink href="#">
                    <Palette className="h-5 w-5" />
                    <div>
                      <span className="font-medium">Design System</span>
                      <span className="text-muted-foreground">
                        Beautiful, accessible components
                      </span>
                    </div>
                  </NavigationMenuLink>
                  <NavigationMenuLink href="#">
                    <Layers className="h-5 w-5" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Component Library</span>
                        <Badge variant="default">New</Badge>
                      </div>
                      <span className="text-muted-foreground">
                        Pre-built UI components and templates
                      </span>
                    </div>
                  </NavigationMenuLink>
                  <NavigationMenuLink href="#">
                    <Zap className="h-5 w-5" />
                    <div>
                      <span className="font-medium">API Infrastructure</span>
                      <span className="text-muted-foreground">
                        Scalable backend services
                      </span>
                    </div>
                  </NavigationMenuLink>
                </div>
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-lg bg-muted">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5" />
                    <div className="p-4">
                      <Badge variant="default" className="mb-2">
                        Webinar
                      </Badge>
                      <h4 className="mb-1 font-semibold">
                        Building at Scale
                      </h4>
                      <p className="mb-3 text-sm text-muted-foreground">
                        Learn how teams scale their applications
                      </p>
                      <Button size="sm" className="w-full">
                        <Play />
                        Watch Now
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-card p-4">
                    <h4 className="mb-1 font-semibold">Start Building</h4>
                    <p className="mb-3 text-sm text-muted-foreground">
                      Get started with our platform in minutes
                    </p>
                    <div className="space-y-2">
                      <Button variant="default" size="sm" className="w-full">
                        Create Account
                        <ArrowRight />
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        View Docs
                      </Button>
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
