"use client";

import {
  Book,
  Bug,
  FileQuestion,
  HelpCircle,
  Keyboard,
  MessageCircle,
  Video,
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

export const title = "Help Menu";

const Example = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button size="icon" variant="ghost">
        <HelpCircle className="h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      <DropdownMenuItem>
        <Book />
        Documentation
        <DropdownMenuShortcut>⌘/</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Video />
        Video Tutorials
      </DropdownMenuItem>
      <DropdownMenuItem>
        <FileQuestion />
        FAQs
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Keyboard />
        Keyboard Shortcuts
        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <MessageCircle />
        Chat with Support
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Bug />
        Report a Bug
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export default Example;
