"use client";

import {
  FileText,
  HelpCircle,
  Home,
  Menu,
  Settings,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

export const title = "Left Drawer Navigation Menu";

const Example = () => (
  <Drawer direction="left">
    <DrawerTrigger asChild>
      <Button size="icon" variant="outline">
        <Menu className="h-4 w-4" />
      </Button>
    </DrawerTrigger>
    <DrawerContent>
      <div className="p-4">
        <h2 className="mb-4 font-semibold text-lg">Navigation</h2>
        <nav className="space-y-1">
          <Button className="w-full justify-start" variant="ghost">
            <Home className="mr-3 h-4 w-4" />
            Home
          </Button>
          <Button className="w-full justify-start" variant="ghost">
            <Users className="mr-3 h-4 w-4" />
            Team
          </Button>
          <Button className="w-full justify-start" variant="ghost">
            <FileText className="mr-3 h-4 w-4" />
            Projects
          </Button>
          <Button className="w-full justify-start" variant="ghost">
            <Settings className="mr-3 h-4 w-4" />
            Settings
          </Button>
          <Button className="w-full justify-start" variant="ghost">
            <HelpCircle className="mr-3 h-4 w-4" />
            Help
          </Button>
        </nav>
      </div>
    </DrawerContent>
  </Drawer>
);

export default Example;
