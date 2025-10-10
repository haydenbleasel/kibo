"use client";

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

export const title = "Simple Top Drawer";

const Example = () => (
  <Drawer direction="top">
    <DrawerTrigger asChild>
      <Button variant="outline">Open Top Drawer</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Top Drawer</DrawerTitle>
        <DrawerDescription>
          This drawer slides down from the top.
        </DrawerDescription>
      </DrawerHeader>
      <div className="p-4">
        <p className="text-muted-foreground text-sm">
          Top drawers are useful for search bars, notifications, and quick
          action panels.
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
