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
import { ArrowRight, Sparkles, Zap, TrendingUp } from "lucide-react";

export const title = "Product Showcase with CTA";

const Example = () => (
  <div className="pb-[50vh]">
    <div className="w-full max-w-md bg-background rounded-md p-px border">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[600px] p-4">
              <div className="grid grid-cols-[2fr_1fr] gap-4">
                <div className="space-y-3">
                  <NavigationMenuLink href="#">
                    <Sparkles className="h-5 w-5" />
                    <div>
                      <span className="font-medium">AI Studio</span>
                      <span className="text-muted-foreground">
                        Build intelligent applications with our AI platform
                      </span>
                    </div>
                  </NavigationMenuLink>
                  <NavigationMenuLink href="#">
                    <Zap className="h-5 w-5" />
                    <div>
                      <span className="font-medium">Automation Suite</span>
                      <span className="text-muted-foreground">
                        Streamline workflows and boost productivity
                      </span>
                    </div>
                  </NavigationMenuLink>
                  <NavigationMenuLink href="#">
                    <TrendingUp className="h-5 w-5" />
                    <div>
                      <span className="font-medium">Analytics Pro</span>
                      <span className="text-muted-foreground">
                        Data insights that drive business growth
                      </span>
                    </div>
                  </NavigationMenuLink>
                </div>
                <div className="flex flex-col gap-3 rounded-lg bg-muted p-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Get Started</h4>
                    <p className="text-sm text-muted-foreground">
                      Start your free trial today. No credit card required.
                    </p>
                  </div>
                  <Button className="w-full">
                    Start Free Trial
                    <ArrowRight />
                  </Button>
                  <Button variant="outline" className="w-full">
                    View Pricing
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
