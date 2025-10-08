"use client";

import {
  Archive,
  CheckCircle,
  ChevronDown,
  Download,
  Tag,
  Trash2,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const title = "Batch Actions Dropdown";

const Example = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">
        Batch Actions
        <ChevronDown className="h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      <DropdownMenuLabel>3 items selected</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <CheckCircle />
        Mark as Complete
      </DropdownMenuItem>
      <DropdownMenuItem>
        <XCircle />
        Mark as Incomplete
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Tag />
        Add Tags
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Download />
        Export Selected
        <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Archive />
        Archive Selected
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem variant="destructive">
        <Trash2 />
        Delete Selected
        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export default Example;
