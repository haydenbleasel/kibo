"use client";

import { Command } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";

export const title = "Top Drawer Command Bar";

const Example = () => (
  <Drawer direction="top">
    <DrawerTrigger asChild>
      <Button variant="outline">
        <Command className="mr-2 h-4 w-4" />
        Command Bar
      </Button>
    </DrawerTrigger>
    <DrawerContent>
      <div className="space-y-4 p-4">
        <div className="relative">
          <Command className="-translate-y-1/2 absolute top-1/2 left-3 h-5 w-5 text-muted-foreground" />
          <Input
            className="h-12 pl-10 text-base"
            placeholder="Type a command or search..."
          />
        </div>
        <div className="space-y-1">
          <Button className="w-full justify-between" size="sm" variant="ghost">
            <span className="flex items-center gap-3">
              <span className="text-sm">Create new project</span>
            </span>
            <Badge variant="secondary">⌘N</Badge>
          </Button>
          <Button className="w-full justify-between" size="sm" variant="ghost">
            <span className="flex items-center gap-3">
              <span className="text-sm">Open file</span>
            </span>
            <Badge variant="secondary">⌘O</Badge>
          </Button>
          <Button className="w-full justify-between" size="sm" variant="ghost">
            <span className="flex items-center gap-3">
              <span className="text-sm">Search everywhere</span>
            </span>
            <Badge variant="secondary">⌘K</Badge>
          </Button>
          <Button className="w-full justify-between" size="sm" variant="ghost">
            <span className="flex items-center gap-3">
              <span className="text-sm">Settings</span>
            </span>
            <Badge variant="secondary">⌘,</Badge>
          </Button>
        </div>
      </div>
    </DrawerContent>
  </Drawer>
);

export default Example;
