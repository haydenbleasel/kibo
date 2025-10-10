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

export const title = "Simple Right Drawer";

const Example = () => (
  <Drawer direction="right">
    <DrawerTrigger asChild>
      <Button variant="outline">Open Right Drawer</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Drawer Title</DrawerTitle>
        <DrawerDescription>
          This drawer slides in from the right side.
        </DrawerDescription>
      </DrawerHeader>
      <div className="p-4">
        <p className="text-muted-foreground text-sm">
          Right-side drawers are great for supplementary content, settings, or
          detail views.
        </p>
      </div>
      <DrawerFooter>
        <Button>Confirm</Button>
        <DrawerClose asChild>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

export default Example;
