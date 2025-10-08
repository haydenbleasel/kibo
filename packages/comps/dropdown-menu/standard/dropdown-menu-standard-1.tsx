"use client";

import {
  HelpCircle,
  LogOut,
  MoreHorizontal,
  Settings,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const title = "Simple Dropdown with Icons";

const Example = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button size="icon" variant="outline">
        <MoreHorizontal className="h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>
        <User />
        Profile
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Settings />
        Settings
      </DropdownMenuItem>
      <DropdownMenuItem>
        <HelpCircle />
        Help
      </DropdownMenuItem>
      <DropdownMenuItem variant="destructive">
        <LogOut />
        Log out
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export default Example;
