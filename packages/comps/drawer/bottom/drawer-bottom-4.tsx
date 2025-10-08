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

export const title = "Bottom Drawer with Snap Points";

const Example = () => (
  <Drawer snapPoints={[0.2, 0.5, 1]}>
    <DrawerTrigger asChild>
      <Button variant="outline">Open with Snap Points</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Snap Points Drawer</DrawerTitle>
        <DrawerDescription>
          Drag to snap to 20%, 50%, or 100% of screen height.
        </DrawerDescription>
      </DrawerHeader>
      <div className="p-4">
        <p className="mb-4 text-muted-foreground text-sm">
          This drawer has three snap points. Try dragging it to different
          heights and it will snap to the nearest point.
        </p>
        <ul className="space-y-2 text-sm">
          <li>• 20% - Quick preview</li>
          <li>• 50% - Half screen</li>
          <li>• 100% - Full view</li>
        </ul>
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
