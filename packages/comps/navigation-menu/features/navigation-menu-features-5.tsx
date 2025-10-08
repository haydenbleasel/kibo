"use client";

import {
  Award,
  Briefcase,
  Building,
  HeadphonesIcon,
  Shield,
  Users,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const title = "Feature Categories";

const categories = [
  {
    icon: Building,
    title: "For Enterprise",
    items: [
      {
        label: "Enterprise Platform",
        description: "Scalable solution for large organizations",
        href: "#",
      },
      {
        label: "SSO & SAML",
        description: "Advanced authentication options",
        href: "#",
      },
    ],
  },
  {
    icon: Users,
    title: "For Teams",
    items: [
      {
        label: "Team Collaboration",
        description: "Work together seamlessly",
        href: "#",
      },
      {
        label: "Shared Workspaces",
        description: "Organize projects efficiently",
        href: "#",
      },
    ],
  },
  {
    icon: Briefcase,
    title: "For Freelancers",
    items: [
      {
        label: "Client Management",
        description: "Manage multiple clients easily",
        href: "#",
      },
      {
        label: "Time Tracking",
        description: "Track billable hours accurately",
        href: "#",
      },
    ],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    items: [
      {
        label: "Security Center",
        description: "Enterprise-grade security features",
        href: "#",
      },
      {
        label: "Compliance",
        description: "Meet regulatory requirements",
        href: "#",
      },
    ],
  },
  {
    icon: HeadphonesIcon,
    title: "Support & Services",
    items: [
      {
        label: "Premium Support",
        description: "24/7 dedicated support team",
        href: "#",
      },
      {
        label: "Professional Services",
        description: "Expert consultation and training",
        href: "#",
      },
    ],
  },
  {
    icon: Award,
    title: "Certification",
    items: [
      {
        label: "Training Programs",
        description: "Get certified in our platform",
        href: "#",
      },
      {
        label: "Partner Program",
        description: "Join our partner network",
        href: "#",
      },
    ],
  },
];

const Example = () => {
  const leftColumn = categories.slice(0, 3);
  const rightColumn = categories.slice(3);

  return (
    <div className="pr-[50vw] pb-[50vh]">
      <div className="w-full max-w-md rounded-md border bg-background p-px">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[600px] p-4">
                  <div className="grid grid-cols-2 gap-6">
                    {[leftColumn, rightColumn].map((column, colIndex) => (
                      <div className="space-y-3" key={colIndex}>
                        {column.map((category, catIndex) => {
                          const Icon = category.icon;
                          return (
                            <div key={catIndex}>
                              <div className="mb-2 flex items-center gap-2">
                                <Icon className="h-5 w-5 text-primary" />
                                <h4 className="font-semibold">
                                  {category.title}
                                </h4>
                              </div>
                              {category.items.map((item, itemIndex) => (
                                <NavigationMenuLink
                                  href={item.href}
                                  key={itemIndex}
                                >
                                  <span className="font-medium">
                                    {item.label}
                                  </span>
                                  <span className="text-muted-foreground">
                                    {item.description}
                                  </span>
                                </NavigationMenuLink>
                              ))}
                            </div>
                          );
                        })}
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
};

export default Example;
