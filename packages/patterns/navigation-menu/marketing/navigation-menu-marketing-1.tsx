"use client";

import { ArrowRight, Sparkles, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const title = "Product Showcase with CTA";

const products = [
  {
    icon: Sparkles,
    label: "AI Studio",
    description: "Build intelligent applications with our AI platform",
    href: "#",
  },
  {
    icon: Zap,
    label: "Automation Suite",
    description: "Streamline workflows and boost productivity",
    href: "#",
  },
  {
    icon: TrendingUp,
    label: "Analytics Pro",
    description: "Data insights that drive business growth",
    href: "#",
  },
];

const ctaSection = {
  title: "Get Started",
  description: "Start your free trial today. No credit card required.",
  buttons: [
    {
      label: "Start Free Trial",
      icon: ArrowRight,
      variant: "default" as const,
    },
    { label: "View Pricing", variant: "outline" as const },
  ],
};

const Example = () => (
  <div className="pr-[50vw] pb-[50vh]">
    <div className="w-full max-w-md rounded-md border bg-background p-px">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[600px] p-4">
                <div className="grid grid-cols-[2fr_1fr] gap-4">
                  <div className="space-y-3">
                    {products.map((product) => (
                      <NavigationMenuLink
                        className="flex flex-row items-start gap-2"
                        href={product.href}
                        key={product.label}
                      >
                        <product.icon className="mt-1 size-5" />
                        <div>
                          <span className="block font-medium">
                            {product.label}
                          </span>
                          <span className="block text-muted-foreground">
                            {product.description}
                          </span>
                        </div>
                      </NavigationMenuLink>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3 rounded-lg bg-muted p-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">{ctaSection.title}</h4>
                      <p className="text-muted-foreground text-sm">
                        {ctaSection.description}
                      </p>
                    </div>
                    {ctaSection.buttons.map((button) => (
                      <Button
                        className="w-full"
                        key={button.label}
                        variant={button.variant}
                      >
                        {button.label}
                        {button.icon && <button.icon className="size-4" />}
                      </Button>
                    ))}
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
