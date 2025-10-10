"use client";

import {
  BarChart,
  Calendar,
  FileText,
  MessageSquare,
  Settings,
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

export const title = "Feature Sections with Headers";

const sections = [
  {
    title: "Team Tools",
    items: [
      {
        icon: Users,
        label: "Team Management",
        description: "Organize and manage your team members",
        href: "#",
      },
      {
        icon: MessageSquare,
        label: "Team Chat",
        description: "Real-time messaging and collaboration",
        href: "#",
      },
    ],
  },
  {
    title: "Project Tools",
    items: [
      {
        icon: Calendar,
        label: "Project Timeline",
        description: "Track milestones and deadlines",
        href: "#",
      },
      {
        icon: FileText,
        label: "Documentation",
        description: "Shared knowledge base and wikis",
        href: "#",
      },
    ],
  },
  {
    title: "Management",
    items: [
      {
        icon: BarChart,
        label: "Reports",
        description: "Team performance and insights",
        href: "#",
      },
      {
        icon: Settings,
        label: "Settings",
        description: "Configure team preferences",
        href: "#",
      },
    ],
  },
];

const Example = () => (
  <div className="pr-[50vw] pb-[50vh]">
    <div className="w-full max-w-md rounded-md border bg-background p-px">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Collaboration</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[400px] p-4">
                <div className="space-y-4">
                  {sections.map((section) => (
                    <div key={section.title}>
                      <h4 className="mb-2 font-semibold text-sm">
                        {section.title}
                      </h4>
                      <div className="space-y-1">
                        {section.items.map((item) => (
                          <NavigationMenuLink
                            className="flex flex-row items-start gap-2"
                            href={item.href}
                            key={item.label}
                          >
                            <item.icon className="mt-1 size-4" />
                            <div>
                              <span className="block font-medium">
                                {item.label}
                              </span>
                              <span className="block text-muted-foreground">
                                {item.description}
                              </span>
                            </div>
                          </NavigationMenuLink>
                        ))}
                      </div>
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
