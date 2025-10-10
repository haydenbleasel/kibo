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

export const title = "Simple Bottom Drawer";

const Example = () => (
  <Drawer>
    <DrawerTrigger asChild>
      <Button variant="outline">Open Drawer</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Drawer Title</DrawerTitle>
        <DrawerDescription>
          This is a simple bottom drawer with header and footer.
        </DrawerDescription>
      </DrawerHeader>
      <div className="p-4">
        <p className="text-muted-foreground text-sm">
          Add your content here. This drawer slides up from the bottom.
        </p>
      </div>
      <DrawerFooter>
        <Button>Submit</Button>
        <DrawerClose asChild>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

export default Example;
