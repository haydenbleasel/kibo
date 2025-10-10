"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export const title = "Simple Left Drawer";

const Example = () => (
  <Drawer direction="left">
    <DrawerTrigger asChild>
      <Button size="icon" variant="outline">
        <Menu className="h-4 w-4" />
      </Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Menu</DrawerTitle>
        <DrawerDescription>
          This drawer slides in from the left side.
        </DrawerDescription>
      </DrawerHeader>
      <div className="p-4">
        <p className="text-muted-foreground text-sm">
          Left-side drawers are commonly used for navigation menus and sidebars.
        </p>
      </div>
      <DrawerFooter>
        <DrawerClose asChild>
          <Button variant="outline">Close</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

export default Example;
