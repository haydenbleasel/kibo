"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export const title = "Bottom Drawer No Scale Background";

const Example = () => (
  <Drawer shouldScaleBackground={false}>
    <DrawerTrigger asChild>
      <Button variant="outline">Open (No Scaling)</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>No Background Scaling</DrawerTitle>
        <DrawerDescription>
          The background doesn't scale when this drawer opens.
        </DrawerDescription>
      </DrawerHeader>
      <div className="p-4">
        <p className="text-muted-foreground text-sm">
          By default, drawers scale the background content. This drawer has{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">
            shouldScaleBackground=false
          </code>{" "}
          so the background remains static.
        </p>
      </div>
    </DrawerContent>
  </Drawer>
);

export default Example;
