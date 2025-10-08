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
import { Check } from "lucide-react";

export const title = "Pricing Tiers Preview";

const Example = () => (
  <div className="pb-[50vh]">
    <div className="w-full max-w-md bg-background rounded-md p-px border">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Pricing</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[700px] p-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-3 rounded-lg border p-4">
                  <div>
                    <h4 className="font-semibold">Starter</h4>
                    <div className="mt-2 flex items-baseline gap-1">
                      <span className="text-3xl font-bold">$9</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Perfect for individuals
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4" />
                      <span>5 projects</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4" />
                      <span>10 GB storage</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4" />
                      <span>Basic support</span>
                    </div>
                  </div>
                  <NavigationMenuLink href="#" className="block">
                    <span className="font-medium">Get Started →</span>
                  </NavigationMenuLink>
                </div>
                <div className="relative space-y-3 rounded-lg border-2 border-primary p-4">
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Popular
                  </Badge>
                  <div>
                    <h4 className="font-semibold">Professional</h4>
                    <div className="mt-2 flex items-baseline gap-1">
                      <span className="text-3xl font-bold">$29</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      For growing teams
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4" />
                      <span>Unlimited projects</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4" />
                      <span>100 GB storage</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4" />
                      <span>Priority support</span>
                    </div>
                  </div>
                  <NavigationMenuLink href="#" className="block">
                    <span className="font-medium">Get Started →</span>
                  </NavigationMenuLink>
                </div>
                <div className="space-y-3 rounded-lg border p-4">
                  <div>
                    <h4 className="font-semibold">Enterprise</h4>
                    <div className="mt-2 flex items-baseline gap-1">
                      <span className="text-3xl font-bold">Custom</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      For large organizations
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4" />
                      <span>Everything in Pro</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4" />
                      <span>Unlimited storage</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4" />
                      <span>24/7 support</span>
                    </div>
                  </div>
                  <NavigationMenuLink href="#" className="block">
                    <span className="font-medium">Contact Sales →</span>
                  </NavigationMenuLink>
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
