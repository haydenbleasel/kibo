"use client";

import { ChevronRight, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

export const title = "Left Drawer with Nested Items";

const Example = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button size="icon" variant="outline">
          <Menu className="h-4 w-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="p-4">
          <h2 className="mb-4 font-semibold text-lg">Menu</h2>
          <nav className="space-y-1">
            <Button className="w-full justify-start" variant="ghost">
              Dashboard
            </Button>
            <div>
              <Button
                className="w-full justify-between"
                onClick={() => toggleSection("products")}
                variant="ghost"
              >
                Products
                <ChevronRight
                  className={`h-4 w-4 transition-transform ${
                    expandedSections.includes("products") ? "rotate-90" : ""
                  }`}
                />
              </Button>
              {expandedSections.includes("products") && (
                <div className="mt-1 ml-4 space-y-1">
                  <Button
                    className="w-full justify-start"
                    size="sm"
                    variant="ghost"
                  >
                    All Products
                  </Button>
                  <Button
                    className="w-full justify-start"
                    size="sm"
                    variant="ghost"
                  >
                    Categories
                  </Button>
                  <Button
                    className="w-full justify-start"
                    size="sm"
                    variant="ghost"
                  >
                    Inventory
                  </Button>
                </div>
              )}
            </div>
            <div>
              <Button
                className="w-full justify-between"
                onClick={() => toggleSection("orders")}
                variant="ghost"
              >
                Orders
                <ChevronRight
                  className={`h-4 w-4 transition-transform ${
                    expandedSections.includes("orders") ? "rotate-90" : ""
                  }`}
                />
              </Button>
              {expandedSections.includes("orders") && (
                <div className="mt-1 ml-4 space-y-1">
                  <Button
                    className="w-full justify-start"
                    size="sm"
                    variant="ghost"
                  >
                    All Orders
                  </Button>
                  <Button
                    className="w-full justify-start"
                    size="sm"
                    variant="ghost"
                  >
                    Pending
                  </Button>
                  <Button
                    className="w-full justify-start"
                    size="sm"
                    variant="ghost"
                  >
                    Completed
                  </Button>
                </div>
              )}
            </div>
            <Button className="w-full justify-start" variant="ghost">
              Analytics
            </Button>
          </nav>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Example;
