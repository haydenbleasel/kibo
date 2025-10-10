"use client";

import {
  Download,
  Filter,
  Plus,
  RefreshCw,
  Search,
  Upload,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const title = "Quick Actions Menu";

const Example = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button>
        <Zap className="h-4 w-4" />
        Quick Actions
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      <DropdownMenuLabel>Quick Actions</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <Plus />
          Create New
          <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Search />
          Search
          <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Filter />
          Filter
          <DropdownMenuShortcut>⌘F</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuLabel>Import/Export</DropdownMenuLabel>
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <Upload />
          Import
          <DropdownMenuShortcut>⌘I</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Download />
          Export
          <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <RefreshCw />
        Refresh
        <DropdownMenuShortcut>⌘R</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export default Example;
