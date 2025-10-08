"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const title = "Navigation without Viewport";

const Example = () => (
  <div className="pb-[50vh]">
    <div className="w-full max-w-md bg-background rounded-md p-px border">
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-48 p-2">
                <NavigationMenuLink href="#">Product 1</NavigationMenuLink>
                <NavigationMenuLink href="#">Product 2</NavigationMenuLink>
                <NavigationMenuLink href="#">Product 3</NavigationMenuLink>
                <NavigationMenuLink href="#">Product 4</NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Company</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-48 p-2">
                <NavigationMenuLink href="#">About</NavigationMenuLink>
                <NavigationMenuLink href="#">Team</NavigationMenuLink>
                <NavigationMenuLink href="#">Careers</NavigationMenuLink>
                <NavigationMenuLink href="#">Contact</NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </div>
);

export default Example;
