"use client";

import { Download, Plus, Settings, Share2, Upload, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export const title = "Top Drawer Quick Actions";

const Example = () => (
  <Drawer direction="top">
    <DrawerTrigger asChild>
      <Button variant="outline">
        <Zap className="mr-2 h-4 w-4" />
        Quick Actions
      </Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Quick Actions</DrawerTitle>
        <DrawerDescription>
          Perform common actions quickly from here
        </DrawerDescription>
      </DrawerHeader>
      <div className="p-4">
        <div className="mx-auto grid max-w-2xl grid-cols-3 gap-4">
          <Button className="h-20 flex-col gap-2" variant="outline">
            <Plus className="h-6 w-6" />
            <span className="text-xs">New File</span>
          </Button>
          <Button className="h-20 flex-col gap-2" variant="outline">
            <Upload className="h-6 w-6" />
            <span className="text-xs">Upload</span>
          </Button>
          <Button className="h-20 flex-col gap-2" variant="outline">
            <Download className="h-6 w-6" />
            <span className="text-xs">Download</span>
          </Button>
          <Button className="h-20 flex-col gap-2" variant="outline">
            <Share2 className="h-6 w-6" />
            <span className="text-xs">Share</span>
          </Button>
          <Button className="h-20 flex-col gap-2" variant="outline">
            <Settings className="h-6 w-6" />
            <span className="text-xs">Settings</span>
          </Button>
          <Button className="h-20 flex-col gap-2" variant="outline">
            <Plus className="h-6 w-6" />
            <span className="text-xs">More</span>
          </Button>
        </div>
      </div>
    </DrawerContent>
  </Drawer>
);

export default Example;
