"use client";

import { Calendar, MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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

export const title = "Bottom Drawer Event Details";

const Example = () => (
  <Drawer>
    <DrawerTrigger asChild>
      <Button variant="outline">View Event</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Design Workshop 2024</DrawerTitle>
        <DrawerDescription>
          Join us for an immersive design workshop
        </DrawerDescription>
      </DrawerHeader>
      <div className="space-y-4 p-4">
        <div className="flex items-center gap-2">
          <Badge>Workshop</Badge>
          <Badge variant="outline">In-Person</Badge>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>March 15, 2024 at 2:00 PM</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>123 Design Street, San Francisco</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>24 people attending</span>
          </div>
        </div>
        <div>
          <h4 className="mb-2 font-medium text-sm">About this event</h4>
          <p className="text-muted-foreground text-sm">
            Learn the latest design trends and techniques from industry experts.
            This hands-on workshop covers everything from basics to advanced
            concepts.
          </p>
        </div>
      </div>
      <DrawerFooter>
        <Button>Register Now</Button>
        <DrawerClose asChild>
          <Button variant="outline">Maybe Later</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

export default Example;
