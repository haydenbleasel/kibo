"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export const title = "Right Drawer Filter Panel";

const Example = () => (
  <Drawer direction="right">
    <DrawerTrigger asChild>
      <Button variant="outline">Filters</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Filters</DrawerTitle>
        <DrawerDescription>
          Refine your search with these filters
        </DrawerDescription>
      </DrawerHeader>
      <div className="space-y-6 overflow-y-auto p-4">
        <div className="space-y-3">
          <Label className="font-medium text-sm">Category</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="electronics" />
              <label
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="electronics"
              >
                Electronics
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="clothing" />
              <label
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="clothing"
              >
                Clothing
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="books" />
              <label
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="books"
              >
                Books
              </label>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <Label className="font-medium text-sm">Price Range</Label>
          <Slider data-vaul-no-drag defaultValue={[50]} max={100} step={1} />
          <div className="flex justify-between text-muted-foreground text-xs">
            <span>$0</span>
            <span>$1000</span>
          </div>
        </div>
        <div className="space-y-3">
          <Label className="font-medium text-sm">Rating</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="5stars" />
              <label
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="5stars"
              >
                ⭐⭐⭐⭐⭐
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="4stars" />
              <label
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="4stars"
              >
                ⭐⭐⭐⭐
              </label>
            </div>
          </div>
        </div>
      </div>
      <DrawerFooter>
        <Button>Apply Filters</Button>
        <DrawerClose asChild>
          <Button variant="outline">Reset</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

export default Example;
