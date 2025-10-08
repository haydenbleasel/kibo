"use client";

import { ChevronRight } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const title = "Multi-level Nested Navigation";

const categories = [
  {
    title: "Development",
    subcategories: [
      {
        title: "Frontend",
        items: ["React Framework", "Vue Framework", "Component Library"],
      },
      {
        title: "Backend",
        items: ["Node.js Runtime", "API Gateway", "Database ORM"],
      },
      {
        title: "Mobile",
        items: ["iOS SDK", "Android SDK", "React Native"],
      },
    ],
  },
  {
    title: "Infrastructure",
    subcategories: [
      {
        title: "Hosting",
        items: ["Serverless Functions", "Edge Network", "Static Hosting"],
      },
      {
        title: "Storage",
        items: ["Object Storage", "Block Storage", "File Storage"],
      },
      {
        title: "Databases",
        items: ["PostgreSQL", "MongoDB", "Redis Cache"],
      },
    ],
  },
];

const Example = () => (
  <div className="pr-[50vw] pb-[50vh]">
    <div className="w-full max-w-md rounded-md border bg-background p-px">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[600px] p-4">
                <div className="grid grid-cols-2 gap-4">
                  {categories.map((category) => (
                    <div key={category.title}>
                      <h4 className="mb-3 font-semibold text-sm">
                        {category.title}
                      </h4>
                      <div className="space-y-1">
                        {category.subcategories.map((subcategory) => (
                          <div key={subcategory.title}>
                            <NavigationMenuLink href="#">
                              <div className="flex flex-1 items-center justify-between">
                                <span className="font-medium">
                                  {subcategory.title}
                                </span>
                                <ChevronRight className="h-4 w-4" />
                              </div>
                            </NavigationMenuLink>
                            <div className="ml-4 space-y-1 border-l pl-4">
                              {subcategory.items.map((item) => (
                                <NavigationMenuLink href="#" key={item}>
                                  <span>{item}</span>
                                </NavigationMenuLink>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
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
