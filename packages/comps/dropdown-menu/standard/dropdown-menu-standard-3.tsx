"use client";

import {
  ClipboardPaste,
  Copy,
  FileText,
  Menu,
  Scissors,
  Search,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const title = "Dropdown with Shortcuts";

const Example = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button size="icon" variant="outline">
        <Menu className="h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      <DropdownMenuItem>
        <FileText />
        New File
        <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Copy />
        Copy
        <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Scissors />
        Cut
        <DropdownMenuShortcut>⌘X</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <ClipboardPaste />
        Paste
        <DropdownMenuShortcut>⌘V</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Search />
        Search
        <DropdownMenuShortcut>⌘F</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem variant="destructive">
        <Trash2 />
        Delete
        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export default Example;
