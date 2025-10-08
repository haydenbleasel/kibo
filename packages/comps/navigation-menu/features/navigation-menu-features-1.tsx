"use client";

import { BarChart, Globe, Lock, Shield, Smartphone, Zap } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const title = "Feature Cards with Icons";

const features = [
  {
    icon: Zap,
    label: "Lightning Fast",
    description: "Built for speed with optimized performance",
    href: "#",
  },
  {
    icon: Shield,
    label: "Enterprise Security",
    description: "Bank-level encryption and compliance",
    href: "#",
  },
  {
    icon: BarChart,
    label: "Advanced Analytics",
    description: "Real-time insights and reporting",
    href: "#",
  },
  {
    icon: Globe,
    label: "Global CDN",
    description: "Fast delivery to users worldwide",
    href: "#",
  },
  {
    icon: Lock,
    label: "Data Privacy",
    description: "GDPR and CCPA compliant",
    href: "#",
  },
  {
    icon: Smartphone,
    label: "Mobile Ready",
    description: "Responsive design for all devices",
    href: "#",
  },
];

const Example = () => (
  <div className="pr-[50vw] pb-[50vh]">
    <div className="w-full max-w-md rounded-md border bg-background p-px">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Platform Features</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[600px] grid-cols-2 gap-3 p-4">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <NavigationMenuLink
                      className="flex flex-row items-start gap-2"
                      href={feature.href}
                      key={feature.label}
                    >
                      <Icon className="mt-1 size-5" />
                      <div>
                        <span className="block font-medium">
                          {feature.label}
                        </span>
                        <span className="block text-muted-foreground">
                          {feature.description}
                        </span>
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
