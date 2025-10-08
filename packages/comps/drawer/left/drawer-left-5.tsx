"use client";

import { ChevronRight, File, Folder, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

export const title = "Left Drawer File Explorer";

const Example = () => {
  const [expandedFolders, setExpandedFolders] = useState<string[]>(["root"]);

  const toggleFolder = (folder: string) => {
    setExpandedFolders((prev) =>
      prev.includes(folder)
        ? prev.filter((f) => f !== folder)
        : [...prev, folder]
    );
  };

  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button size="icon" variant="outline">
          <Menu className="h-4 w-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="p-4">
          <h2 className="mb-4 font-semibold text-lg">Files</h2>
          <div className="space-y-1">
            <div>
              <Button
                className="w-full justify-start"
                onClick={() => toggleFolder("root")}
                size="sm"
                variant="ghost"
              >
                <ChevronRight
                  className={`mr-1 h-3 w-3 transition-transform ${
                    expandedFolders.includes("root") ? "rotate-90" : ""
                  }`}
                />
                <Folder className="mr-2 h-3 w-3" />
                Projects
              </Button>
              {expandedFolders.includes("root") && (
                <div className="ml-4">
                  <div>
                    <Button
                      className="w-full justify-start"
                      onClick={() => toggleFolder("website")}
                      size="sm"
                      variant="ghost"
                    >
                      <ChevronRight
                        className={`mr-1 h-3 w-3 transition-transform ${
                          expandedFolders.includes("website") ? "rotate-90" : ""
                        }`}
                      />
                      <Folder className="mr-2 h-3 w-3" />
                      Website
                    </Button>
                    {expandedFolders.includes("website") && (
                      <div className="ml-4 space-y-1">
                        <Button
                          className="w-full justify-start"
                          size="sm"
                          variant="ghost"
                        >
                          <File className="mr-2 h-3 w-3" />
                          index.html
                        </Button>
                        <Button
                          className="w-full justify-start"
                          size="sm"
                          variant="ghost"
                        >
                          <File className="mr-2 h-3 w-3" />
                          styles.css
                        </Button>
                      </div>
                    )}
                  </div>
                  <div>
                    <Button
                      className="w-full justify-start"
                      onClick={() => toggleFolder("app")}
                      size="sm"
                      variant="ghost"
                    >
                      <ChevronRight
                        className={`mr-1 h-3 w-3 transition-transform ${
                          expandedFolders.includes("app") ? "rotate-90" : ""
                        }`}
                      />
                      <Folder className="mr-2 h-3 w-3" />
                      App
                    </Button>
                    {expandedFolders.includes("app") && (
                      <div className="ml-4 space-y-1">
                        <Button
                          className="w-full justify-start"
                          size="sm"
                          variant="ghost"
                        >
                          <File className="mr-2 h-3 w-3" />
                          App.tsx
                        </Button>
                        <Button
                          className="w-full justify-start"
                          size="sm"
                          variant="ghost"
                        >
                          <File className="mr-2 h-3 w-3" />
                          index.ts
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Example;
