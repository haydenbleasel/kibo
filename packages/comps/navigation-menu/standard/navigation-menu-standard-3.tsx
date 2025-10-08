"use client";

import { Book, FileText, Video } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const title = "Navigation with Descriptions";

const resources = [
  {
    icon: FileText,
    label: "Documentation",
    description: "Learn how to integrate our tools",
    href: "#",
  },
  {
    icon: Book,
    label: "Guides & Tutorials",
    description: "Step-by-step guides to get started",
    href: "#",
  },
  {
    icon: Video,
    label: "Video Courses",
    description: "Learn at your own pace with videos",
    href: "#",
  },
];

const Example = () => (
  <div className="pr-[50vw] pb-[50vh]">
    <div className="w-full max-w-md rounded-md border bg-background p-px">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-80 p-2">
                {resources.map((resource, index) => {
                  const Icon = resource.icon;
                  return (
                    <NavigationMenuLink href={resource.href} key={index}>
                      <Icon />
                      <div>
                        <span className="font-medium">{resource.label}</span>
                        <span className="text-muted-foreground">
                          {resource.description}
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
