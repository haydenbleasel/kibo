"use client";

import {
  Briefcase,
  Building2,
  GraduationCap,
  Heart,
  Home,
  ShoppingCart,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const title = "Industry Solutions";

const industries = [
  {
    icon: Building2,
    name: "Financial Services",
    description: "Secure, compliant solutions for banking and fintech",
    href: "#",
  },
  {
    icon: ShoppingCart,
    name: "E-commerce",
    description: "Scale your online store with powerful tools",
    href: "#",
  },
  {
    icon: GraduationCap,
    name: "Education",
    description: "Empower learning with modern technology",
    href: "#",
  },
  {
    icon: Heart,
    name: "Healthcare",
    description: "HIPAA-compliant solutions for providers",
    href: "#",
  },
  {
    icon: Briefcase,
    name: "Professional Services",
    description: "Tools for consultants and agencies",
    href: "#",
  },
  {
    icon: Home,
    name: "Real Estate",
    description: "Streamline property management workflows",
    href: "#",
  },
];

const Example = () => (
  <div className="pr-[50vw] pb-[50vh]">
    <div className="w-full max-w-md rounded-md border bg-background p-px">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[700px] p-4">
                <div className="mb-4">
                  <h3 className="font-semibold text-muted-foreground text-sm">
                    SOLUTIONS BY INDUSTRY
                  </h3>
                  <p className="mt-1 text-muted-foreground text-sm">
                    Tailored solutions for your specific industry needs
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {industries.map((industry, index) => {
                    const Icon = industry.icon;
                    return (
                      <NavigationMenuLink href={industry.href} key={index}>
                        <div className="flex flex-col items-start gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium">{industry.name}</div>
                            <p className="text-muted-foreground text-sm">
                              {industry.description}
                            </p>
                          </div>
                        </div>
                      </NavigationMenuLink>
                    );
                  })}
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
