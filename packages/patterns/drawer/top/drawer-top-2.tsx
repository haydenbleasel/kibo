"use client";

import { Clock, File, Folder, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";

export const title = "Top Drawer Search Bar";

const Example = () => (
  <Drawer direction="top">
    <DrawerTrigger asChild>
      <Button variant="outline">
        <Search className="mr-2 h-4 w-4" />
        Search
      </Button>
    </DrawerTrigger>
    <DrawerContent>
      <div className="space-y-4 p-4">
        <div className="relative">
          <Search className="-translate-y-1/2 absolute top-1/2 left-3 h-5 w-5 text-muted-foreground" />
          <Input
            className="h-12 pl-10 text-base"
            placeholder="Search for files, folders, or content..."
          />
        </div>
        <div className="space-y-2">
          <h4 className="font-medium text-muted-foreground text-xs uppercase">
            Recent Searches
          </h4>
          <div className="space-y-1">
            <Button className="w-full justify-start" size="sm" variant="ghost">
              <Clock className="mr-3 h-4 w-4" />
              Project files
            </Button>
            <Button className="w-full justify-start" size="sm" variant="ghost">
              <Clock className="mr-3 h-4 w-4" />
              Team documents
            </Button>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="font-medium text-muted-foreground text-xs uppercase">
            Quick Access
          </h4>
          <div className="space-y-1">
            <Button className="w-full justify-start" size="sm" variant="ghost">
              <Folder className="mr-3 h-4 w-4" />
              My Projects
            </Button>
            <Button className="w-full justify-start" size="sm" variant="ghost">
              <File className="mr-3 h-4 w-4" />
              Recent Files
            </Button>
          </div>
        </div>
      </div>
    </DrawerContent>
  </Drawer>
);

export default Example;
