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

const menuSections = [
  {
    trigger: "Products",
    items: [
      { label: "Product 1", href: "#" },
      { label: "Product 2", href: "#" },
      { label: "Product 3", href: "#" },
      { label: "Product 4", href: "#" },
    ],
  },
  {
    trigger: "Company",
    items: [
      { label: "About", href: "#" },
      { label: "Team", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

const Example = () => (
  <div className="pr-[50vw] pb-[50vh]">
    <div className="w-full max-w-md rounded-md border bg-background p-px">
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          {menuSections.map((section, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuTrigger>{section.trigger}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-48 p-2">
                  {section.items.map((item, itemIndex) => (
                    <NavigationMenuLink href={item.href} key={itemIndex}>
                      {item.label}
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </div>
);

export default Example;
