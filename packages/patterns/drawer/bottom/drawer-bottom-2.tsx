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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const title = "Bottom Drawer with Form";

const Example = () => (
  <Drawer>
    <DrawerTrigger asChild>
      <Button variant="outline">Add Contact</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Add New Contact</DrawerTitle>
        <DrawerDescription>
          Fill in the details below to add a new contact.
        </DrawerDescription>
      </DrawerHeader>
      <div className="space-y-4 p-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Enter email" type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" placeholder="Enter phone number" type="tel" />
        </div>
      </div>
      <DrawerFooter>
        <Button>Add Contact</Button>
        <DrawerClose asChild>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

export default Example;
