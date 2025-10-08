"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChevronRight } from "lucide-react";

export const title = "Multi-level Nested Navigation";

const Example = () => (
  <div className="pb-[50vh]">
    <div className="w-full max-w-md bg-background rounded-md p-px border">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[600px] p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="mb-3 text-sm font-semibold">Development</h4>
                  <div className="space-y-1">
                    <NavigationMenuLink href="#">
                      <div className="flex flex-1 items-center justify-between">
                        <span className="font-medium">Frontend</span>
                        <ChevronRight className="h-4 w-4" />
                      </div>
                    </NavigationMenuLink>
                    <div className="ml-4 space-y-1 border-l pl-4">
                      <NavigationMenuLink href="#">
                        <span>React Framework</span>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#">
                        <span>Vue Framework</span>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#">
                        <span>Component Library</span>
                      </NavigationMenuLink>
                    </div>
                    <NavigationMenuLink href="#">
                      <div className="flex flex-1 items-center justify-between">
                        <span className="font-medium">Backend</span>
                        <ChevronRight className="h-4 w-4" />
                      </div>
                    </NavigationMenuLink>
                    <div className="ml-4 space-y-1 border-l pl-4">
                      <NavigationMenuLink href="#">
                        <span>Node.js Runtime</span>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#">
                        <span>API Gateway</span>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#">
                        <span>Database ORM</span>
                      </NavigationMenuLink>
                    </div>
                    <NavigationMenuLink href="#">
                      <div className="flex flex-1 items-center justify-between">
                        <span className="font-medium">Mobile</span>
                        <ChevronRight className="h-4 w-4" />
                      </div>
                    </NavigationMenuLink>
                    <div className="ml-4 space-y-1 border-l pl-4">
                      <NavigationMenuLink href="#">
                        <span>iOS SDK</span>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#">
                        <span>Android SDK</span>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#">
                        <span>React Native</span>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="mb-3 text-sm font-semibold">Infrastructure</h4>
                  <div className="space-y-1">
                    <NavigationMenuLink href="#">
                      <div className="flex flex-1 items-center justify-between">
                        <span className="font-medium">Hosting</span>
                        <ChevronRight className="h-4 w-4" />
                      </div>
                    </NavigationMenuLink>
                    <div className="ml-4 space-y-1 border-l pl-4">
                      <NavigationMenuLink href="#">
                        <span>Serverless Functions</span>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#">
                        <span>Edge Network</span>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#">
                        <span>Static Hosting</span>
                      </NavigationMenuLink>
                    </div>
                    <NavigationMenuLink href="#">
                      <div className="flex flex-1 items-center justify-between">
                        <span className="font-medium">Storage</span>
                        <ChevronRight className="h-4 w-4" />
                      </div>
                    </NavigationMenuLink>
                    <div className="ml-4 space-y-1 border-l pl-4">
                      <NavigationMenuLink href="#">
                        <span>Object Storage</span>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#">
                        <span>Block Storage</span>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#">
                        <span>File Storage</span>
                      </NavigationMenuLink>
                    </div>
                    <NavigationMenuLink href="#">
                      <div className="flex flex-1 items-center justify-between">
                        <span className="font-medium">Databases</span>
                        <ChevronRight className="h-4 w-4" />
                      </div>
                    </NavigationMenuLink>
                    <div className="ml-4 space-y-1 border-l pl-4">
                      <NavigationMenuLink href="#">
                        <span>PostgreSQL</span>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#">
                        <span>MongoDB</span>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#">
                        <span>Redis Cache</span>
                      </NavigationMenuLink>
                    </div>
                  </div>
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
