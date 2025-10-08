"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const title = "Simple Navigation";

const menuItems = [
  {
    type: "dropdown" as const,
    trigger: "Products",
    items: [
      { label: "Product 1", href: "#" },
      { label: "Product 2", href: "#" },
      { label: "Product 3", href: "#" },
    ],
  },
  {
    type: "dropdown" as const,
    trigger: "Solutions",
    items: [
      { label: "Solution 1", href: "#" },
      { label: "Solution 2", href: "#" },
      { label: "Solution 3", href: "#" },
    ],
  },
  {
    type: "link" as const,
    label: "Pricing",
    href: "#",
  },
];

const Example = () => (
  <div className="pr-[50vw] pb-[50vh]">
    <div className="w-full max-w-md rounded-md border bg-background p-px">
      <NavigationMenu>
        <NavigationMenuList>
          {menuItems.map((item, index) =>
            item.type === "dropdown" ? (
              <NavigationMenuItem key={index}>
                <NavigationMenuTrigger>{item.trigger}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-48 p-2">
                    {item.items.map((subItem, subIndex) => (
                      <NavigationMenuLink href={subItem.href} key={subIndex}>
                        {subItem.label}
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink href={item.href}>
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            )
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </div>
);

export default Example;
