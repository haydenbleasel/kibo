"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Code,
  Palette,
  Layers,
  GitBranch,
  Terminal,
  Package,
  Workflow,
  Database,
  Cloud,
} from "lucide-react";

export const title = "Feature Grid Layout";

const Example = () => (
  <div className="pb-[50vh]">
    <div className="w-full max-w-md bg-background rounded-md p-px border">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Developer Tools</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[700px] grid-cols-3 gap-3 p-4">
              <NavigationMenuLink href="#">
                <Code className="h-5 w-5" />
                <div>
                  <span className="font-medium">Code Editor</span>
                  <span className="text-muted-foreground">
                    Syntax highlighting and autocomplete
                  </span>
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <GitBranch className="h-5 w-5" />
                <div>
                  <span className="font-medium">Version Control</span>
                  <span className="text-muted-foreground">
                    Git integration built-in
                  </span>
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <Terminal className="h-5 w-5" />
                <div>
                  <span className="font-medium">CLI Tools</span>
                  <span className="text-muted-foreground">
                    Powerful command line interface
                  </span>
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <Package className="h-5 w-5" />
                <div>
                  <span className="font-medium">Package Manager</span>
                  <span className="text-muted-foreground">
                    Dependency management made easy
                  </span>
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <Workflow className="h-5 w-5" />
                <div>
                  <span className="font-medium">CI/CD Pipeline</span>
                  <span className="text-muted-foreground">
                    Automated testing and deployment
                  </span>
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <Database className="h-5 w-5" />
                <div>
                  <span className="font-medium">Database Tools</span>
                  <span className="text-muted-foreground">
                    Query builder and migrations
                  </span>
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <Palette className="h-5 w-5" />
                <div>
                  <span className="font-medium">Theme Editor</span>
                  <span className="text-muted-foreground">
                    Customize your workspace
                  </span>
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <Layers className="h-5 w-5" />
                <div>
                  <span className="font-medium">Extensions</span>
                  <span className="text-muted-foreground">
                    Extend functionality with plugins
                  </span>
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <Cloud className="h-5 w-5" />
                <div>
                  <span className="font-medium">Cloud Sync</span>
                  <span className="text-muted-foreground">
                    Access your work anywhere
                  </span>
                </div>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </div>
  </div>
);

export default Example;
