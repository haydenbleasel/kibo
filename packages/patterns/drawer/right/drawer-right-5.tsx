"use client";

import { Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export const title = "Right Drawer Notifications";

const Example = () => (
  <Drawer direction="right">
    <DrawerTrigger asChild>
      <Button className="relative" size="icon" variant="outline">
        <Bell className="h-4 w-4" />
        <Badge className="-top-1 -right-1 absolute flex h-5 w-5 items-center justify-center p-0 text-xs">
          5
        </Badge>
      </Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Notifications</DrawerTitle>
        <DrawerDescription>You have 5 unread notifications</DrawerDescription>
      </DrawerHeader>
      <div className="flex-1 overflow-y-auto">
        <div className="divide-y">
          <div className="cursor-pointer p-4 hover:bg-muted/50">
            <div className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
              <div className="flex-1 space-y-1">
                <p className="font-medium text-sm">New message from John</p>
                <p className="text-muted-foreground text-xs">
                  Hey, I wanted to follow up on our conversation...
                </p>
                <p className="text-muted-foreground text-xs">2 minutes ago</p>
              </div>
            </div>
          </div>
          <div className="cursor-pointer p-4 hover:bg-muted/50">
            <div className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
              <div className="flex-1 space-y-1">
                <p className="font-medium text-sm">Project updated</p>
                <p className="text-muted-foreground text-xs">
                  Sarah updated the design files in your project
                </p>
                <p className="text-muted-foreground text-xs">1 hour ago</p>
              </div>
            </div>
          </div>
          <div className="cursor-pointer p-4 hover:bg-muted/50">
            <div className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
              <div className="flex-1 space-y-1">
                <p className="font-medium text-sm">New comment</p>
                <p className="text-muted-foreground text-xs">
                  Mike commented on your post
                </p>
                <p className="text-muted-foreground text-xs">3 hours ago</p>
              </div>
            </div>
          </div>
          <div className="cursor-pointer p-4 hover:bg-muted/50">
            <div className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 rounded-full bg-muted" />
              <div className="flex-1 space-y-1">
                <p className="text-sm">System update</p>
                <p className="text-muted-foreground text-xs">
                  New features are now available
                </p>
                <p className="text-muted-foreground text-xs">Yesterday</p>
              </div>
            </div>
          </div>
          <div className="cursor-pointer p-4 hover:bg-muted/50">
            <div className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 rounded-full bg-muted" />
              <div className="flex-1 space-y-1">
                <p className="text-sm">Welcome to the platform</p>
                <p className="text-muted-foreground text-xs">
                  Get started with these tips
                </p>
                <p className="text-muted-foreground text-xs">2 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t p-4">
        <DrawerClose asChild>
          <Button className="w-full" variant="outline">
            Mark all as read
          </Button>
        </DrawerClose>
      </div>
    </DrawerContent>
  </Drawer>
);

export default Example;
