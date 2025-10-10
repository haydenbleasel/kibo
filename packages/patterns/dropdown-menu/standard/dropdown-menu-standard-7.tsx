"use client";

import { Clock, Download, Menu, Printer, Save, Share2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const title = "Mixed Features Dropdown";

const Example = () => {
  const [showGrid, setShowGrid] = useState(true);
  const [showRuler, setShowRuler] = useState(false);
  const [quality, setQuality] = useState("high");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Menu className="h-4 w-4" />
          File
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>File Options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Save />
            Save
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="px-2 py-1.5">
              <Download className="mr-2 size-4 text-muted-foreground" />
              Export
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Export as PDF</DropdownMenuItem>
              <DropdownMenuItem>Export as PNG</DropdownMenuItem>
              <DropdownMenuItem>Export as SVG</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuItem>
            <Share2 />
            Share
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Printer />
            Print
            <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>View Options</DropdownMenuLabel>
        <DropdownMenuCheckboxItem
          checked={showGrid}
          onCheckedChange={setShowGrid}
        >
          Show Grid
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showRuler}
          onCheckedChange={setShowRuler}
        >
          Show Ruler
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Export Quality</DropdownMenuLabel>
        <DropdownMenuRadioGroup onValueChange={setQuality} value={quality}>
          <DropdownMenuRadioItem value="low">Low</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="medium">Medium</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="high">High</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Clock />
          Recent Files
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Example;
