"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Rocket, Target, TrendingUp, Zap, Star } from "lucide-react";

export const title = "Features with Badges";

const Example = () => (
  <div className="pb-[50vh]">
    <div className="w-full max-w-md bg-background rounded-md p-px border">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>What's New</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[500px] space-y-2 p-4">
              <NavigationMenuLink href="#">
                <Sparkles className="h-5 w-5" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">AI Assistant</span>
                    <Badge variant="default">New</Badge>
                  </div>
                  <span className="text-muted-foreground">
                    Intelligent code suggestions powered by AI
                  </span>
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <Rocket className="h-5 w-5" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Instant Deploy</span>
                    <Badge variant="secondary">Beta</Badge>
                  </div>
                  <span className="text-muted-foreground">
                    Deploy to production in seconds
                  </span>
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <Target className="h-5 w-5" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Smart Testing</span>
                    <Badge variant="outline">Preview</Badge>
                  </div>
                  <span className="text-muted-foreground">
                    Automated test generation and execution
                  </span>
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <TrendingUp className="h-5 w-5" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Performance Monitoring</span>
                    <Badge variant="default">New</Badge>
                  </div>
                  <span className="text-muted-foreground">
                    Real-time performance metrics and alerts
                  </span>
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <Zap className="h-5 w-5" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Edge Functions</span>
                    <Badge variant="secondary">Beta</Badge>
                  </div>
                  <span className="text-muted-foreground">
                    Run code at the edge for ultra-low latency
                  </span>
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <Star className="h-5 w-5" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Premium Templates</span>
                    <Badge variant="outline">Pro</Badge>
                  </div>
                  <span className="text-muted-foreground">
                    Access exclusive professionally designed templates
                  </span>
                </div>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </div>
  </div>
);

export default Example;
