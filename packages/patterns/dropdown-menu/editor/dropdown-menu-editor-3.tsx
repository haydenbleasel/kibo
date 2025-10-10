"use client";

import { Code, FileText, Image, Link, Plus, Table, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const title = "Insert Options Dropdown";

const Example = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button size="icon" variant="outline">
        <Plus className="h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-48">
      <DropdownMenuItem>
        <Image />
        Image
        <DropdownMenuShortcut>⌘⇧I</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Video />
        Video
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Link />
        Link
        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Table />
        Table
        <DropdownMenuShortcut>⌘⇧T</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Code />
        Code Block
        <DropdownMenuShortcut>⌘⇧C</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <FileText />
        File
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export default Example;
