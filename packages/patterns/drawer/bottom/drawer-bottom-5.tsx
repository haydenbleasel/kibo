"use client";

import { useState } from "react";
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

export const title = "Nested Bottom Drawers";

const Example = () => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer onOpenChange={setOpen} open={open}>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Parent Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Parent Drawer</DrawerTitle>
          <DrawerDescription>
            This drawer contains another drawer inside.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p className="mb-4 text-muted-foreground text-sm">
            Nested drawers allow you to create multi-level interactions.
          </p>
          <Drawer>
            <DrawerTrigger asChild>
              <Button>Open Nested Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Nested Drawer</DrawerTitle>
                <DrawerDescription>
                  This is a drawer inside another drawer.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4">
                <p className="text-muted-foreground text-sm">
                  Nested content goes here. You can close this to return to the
                  parent drawer.
                </p>
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline">Close Nested</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Example;
