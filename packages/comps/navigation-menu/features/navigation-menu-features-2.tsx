"use client";

import {
  Cloud,
  Code,
  Database,
  GitBranch,
  Layers,
  Package,
  Palette,
  Terminal,
  Workflow,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const title = "Feature Grid Layout";

const tools = [
  {
    icon: Code,
    label: "Code Editor",
    description: "Syntax highlighting and autocomplete",
    href: "#",
  },
  {
    icon: GitBranch,
    label: "Version Control",
    description: "Git integration built-in",
    href: "#",
  },
  {
    icon: Terminal,
    label: "CLI Tools",
    description: "Powerful command line interface",
    href: "#",
  },
  {
    icon: Package,
    label: "Package Manager",
    description: "Dependency management made easy",
    href: "#",
  },
  {
    icon: Workflow,
    label: "CI/CD Pipeline",
    description: "Automated testing and deployment",
    href: "#",
  },
  {
    icon: Database,
    label: "Database Tools",
    description: "Query builder and migrations",
    href: "#",
  },
  {
    icon: Palette,
    label: "Theme Editor",
    description: "Customize your workspace",
    href: "#",
  },
  {
    icon: Layers,
    label: "Extensions",
    description: "Extend functionality with plugins",
    href: "#",
  },
  {
    icon: Cloud,
    label: "Cloud Sync",
    description: "Access your work anywhere",
    href: "#",
  },
];

const Example = () => (
  <div className="pr-[50vw] pb-[50vh]">
    <div className="w-full max-w-md rounded-md border bg-background p-px">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Developer Tools</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[700px] grid-cols-3 gap-3 p-4">
                {tools.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <NavigationMenuLink
                      className="flex flex-row items-start gap-2"
                      href={tool.href}
                      key={tool.label}
                    >
                      <Icon className="mt-1 size-5" />
                      <div>
                        <span className="block font-medium">{tool.label}</span>
                        <span className="block text-muted-foreground">
                          {tool.description}
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
