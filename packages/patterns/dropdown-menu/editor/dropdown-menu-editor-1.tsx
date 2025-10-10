"use client";

import {
  Bold,
  Code,
  Italic,
  Strikethrough,
  Type,
  Underline,
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

export const title = "Text Formatting Dropdown";

const Example = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button size="icon" variant="outline">
        <Type className="h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-48">
      <DropdownMenuItem>
        <Bold />
        Bold
        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Italic />
        Italic
        <DropdownMenuShortcut>⌘I</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Underline />
        Underline
        <DropdownMenuShortcut>⌘U</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Strikethrough />
        Strikethrough
        <DropdownMenuShortcut>⌘⇧X</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Code />
        Code
        <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export default Example;
