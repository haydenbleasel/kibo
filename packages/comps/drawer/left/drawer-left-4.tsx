"use client";

import { FileText, Home, Menu, Search, Settings, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";

export const title = "Left Drawer with Search";

const Example = () => (
  <Drawer direction="left">
    <DrawerTrigger asChild>
      <Button size="icon" variant="outline">
        <Menu className="h-4 w-4" />
      </Button>
    </DrawerTrigger>
    <DrawerContent>
      <div className="space-y-4 p-4">
        <div className="relative">
          <Search className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 text-muted-foreground" />
          <Input className="pl-9" placeholder="Search..." />
        </div>
        <div>
          <h3 className="mb-2 font-medium text-muted-foreground text-xs uppercase">
            Main Menu
          </h3>
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
              Documents
            </Button>
          </nav>
        </div>
        <div>
          <h3 className="mb-2 font-medium text-muted-foreground text-xs uppercase">
            Settings
          </h3>
          <nav className="space-y-1">
            <Button className="w-full justify-start" variant="ghost">
              <Settings className="mr-3 h-4 w-4" />
              Preferences
            </Button>
          </nav>
        </div>
      </div>
    </DrawerContent>
  </Drawer>
);

export default Example;
