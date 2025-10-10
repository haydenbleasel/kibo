"use client";

import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const title = "Pricing Tiers Preview";

const pricingTiers = [
  {
    name: "Starter",
    price: "$9",
    period: "/month",
    description: "Perfect for individuals",
    features: ["5 projects", "10 GB storage", "Basic support"],
    cta: "Get Started →",
    href: "#",
    highlighted: false,
    badge: null,
  },
  {
    name: "Professional",
    price: "$29",
    period: "/month",
    description: "For growing teams",
    features: ["Unlimited projects", "100 GB storage", "Priority support"],
    cta: "Get Started →",
    href: "#",
    highlighted: true,
    badge: "Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: null,
    description: "For large organizations",
    features: ["Everything in Pro", "Unlimited storage", "24/7 support"],
    cta: "Contact Sales →",
    href: "#",
    highlighted: false,
    badge: null,
  },
];

const Example = () => (
  <div className="pr-[50vw] pb-[50vh]">
    <div className="w-full max-w-md rounded-md border bg-background p-px">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Pricing</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[700px] p-4">
                <div className="grid grid-cols-3 gap-4">
                  {pricingTiers.map((tier, index) => (
                    <div
                      className={`relative space-y-3 rounded-lg p-4 ${
                        tier.highlighted ? "border-2 border-primary" : "border"
                      }`}
                      key={index}
                    >
                      {tier.badge && (
                        <Badge className="-top-3 -translate-x-1/2 absolute left-1/2">
                          {tier.badge}
                        </Badge>
                      )}
                      <div>
                        <h4 className="font-semibold">{tier.name}</h4>
                        <div className="mt-2 flex items-baseline gap-1">
                          <span className="font-bold text-3xl">
                            {tier.price}
                          </span>
                          {tier.period && (
                            <span className="text-muted-foreground">
                              {tier.period}
                            </span>
                          )}
                        </div>
                        <p className="mt-2 text-muted-foreground text-sm">
                          {tier.description}
                        </p>
                      </div>
                      <div className="space-y-2">
                        {tier.features.map((feature, featureIndex) => (
                          <div
                            className="flex items-center gap-2 text-sm"
                            key={featureIndex}
                          >
                            <Check className="h-4 w-4" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <NavigationMenuLink className="block" href={tier.href}>
                        <span className="font-medium">{tier.cta}</span>
                      </NavigationMenuLink>
                    </div>
                  ))}
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
