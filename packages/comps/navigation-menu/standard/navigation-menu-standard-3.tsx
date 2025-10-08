"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { FileText, Book, Video } from "lucide-react";

export const title = "Navigation with Descriptions";

const Example = () => (
  <div className="pb-[50vh]">
    <div className="w-full max-w-md bg-background rounded-md p-px border">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-80 p-2">
                <NavigationMenuLink href="#">
                  <FileText />
                  <div>
                    <span className="font-medium">Documentation</span>
                    <span className="text-muted-foreground">
                      Learn how to integrate our tools
                    </span>
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink href="#">
                  <Book />
                  <div>
                    <span className="font-medium">Guides & Tutorials</span>
                    <span className="text-muted-foreground">
                      Step-by-step guides to get started
                    </span>
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink href="#">
                  <Video />
                  <div>
                    <span className="font-medium">Video Courses</span>
                    <span className="text-muted-foreground">
                      Learn at your own pace with videos
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
