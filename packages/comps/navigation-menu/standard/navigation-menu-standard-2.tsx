"use client";

import { Heart, Package, Shield, Zap } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const title = "Navigation with Icons";

const features = [
  { icon: Package, label: "Components", href: "#" },
  { icon: Zap, label: "Performance", href: "#" },
  { icon: Shield, label: "Security", href: "#" },
  { icon: Heart, label: "Accessibility", href: "#" },
];

const Example = () => (
  <div className="pr-[50vw] pb-[50vh]">
    <div className="w-full max-w-md rounded-md border bg-background p-px">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Features</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-56 p-2">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <NavigationMenuLink href={feature.href} key={index}>
                      <Icon />
                      <div>
                        <span className="font-medium">{feature.label}</span>
                      </div>
                    </NavigationMenuLink>
                  );
                })}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </div>
);

export default Example;
