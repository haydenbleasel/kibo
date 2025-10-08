"use client";

import { AlertCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

export const title = "Top Drawer Notification Banner";

const Example = () => (
  <Drawer direction="top">
    <DrawerTrigger asChild>
      <Button variant="outline">Show Notification</Button>
    </DrawerTrigger>
    <DrawerContent>
      <div className="border-blue-200 border-b bg-blue-50 dark:border-blue-900 dark:bg-blue-950">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <div>
              <h4 className="font-medium text-blue-900 dark:text-blue-100">
                System Update Available
              </h4>
              <p className="text-blue-700 text-sm dark:text-blue-300">
                A new version is available. Update now to get the latest
                features.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline">
              Update Now
            </Button>
            <DrawerClose asChild>
              <Button className="h-8 w-8" size="icon" variant="ghost">
                <X className="h-4 w-4" />
              </Button>
            </DrawerClose>
          </div>
        </div>
      </div>
    </DrawerContent>
  </Drawer>
);

export default Example;
