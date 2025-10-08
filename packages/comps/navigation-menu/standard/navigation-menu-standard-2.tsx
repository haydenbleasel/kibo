"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Package, Zap, Shield, Heart } from "lucide-react";

export const title = "Navigation with Icons";

const Example = () => (
  <div className="pb-[50vh]">
    <div className="w-full max-w-md bg-background rounded-md p-px border">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Features</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-56 p-2">
                <NavigationMenuLink href="#">
                  <Package />
                  <div>
                    <span className="font-medium">Components</span>
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink href="#">
                  <Zap />
                  <div>
                    <span className="font-medium">Performance</span>
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink href="#">
                  <Shield />
                  <div>
                    <span className="font-medium">Security</span>
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink href="#">
                  <Heart />
                  <div>
                    <span className="font-medium">Accessibility</span>
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
