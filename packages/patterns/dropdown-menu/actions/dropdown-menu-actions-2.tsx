"use client";

import {
  Archive,
  Copy,
  Edit,
  Flag,
  MoreVertical,
  Star,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const title = "Table Row Actions";

const Example = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button className="h-8 w-8" size="icon" variant="ghost">
        <MoreVertical className="h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-40">
      <DropdownMenuItem>
        <Edit />
        Edit
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Copy />
        Duplicate
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Star />
        Favorite
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Flag />
        Report
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Archive />
        Archive
      </DropdownMenuItem>
      <DropdownMenuItem variant="destructive">
        <Trash2 />
        Delete
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export default Example;
