"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export const title = "Mixed Links and Dropdowns";

const menuItems = [
  {
    type: "dropdown" as const,
    trigger: "Products",
    items: [
      { label: "Analytics", href: "#" },
      { label: "Marketing", href: "#" },
      { label: "Commerce", href: "#" },
    ],
  },
  {
    type: "link" as const,
    label: "Pricing",
    href: "#",
  },
  {
    type: "link" as const,
    label: "About",
    href: "#",
  },
  {
    type: "dropdown" as const,
    trigger: "Support",
    items: [
      { label: "Help Center", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Status", href: "#" },
    ],
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
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href={item.href}
                >
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
