"use client";

import {
  Archive,
  Copy,
  Download,
  Eye,
  MoreHorizontal,
  Share2,
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

export const title = "File Actions Dropdown";

const Example = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button size="icon" variant="ghost">
        <MoreHorizontal className="h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-48">
      <DropdownMenuItem>
        <Eye />
        View Details
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Download />
        Download
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Share2 />
        Share
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Copy />
        Duplicate
        <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Archive />
        Archive
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
