"use client";

import {
  BookOpen,
  Code,
  ExternalLink,
  FileText,
  Github,
  MessageSquare,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const title = "Resources Menu";

const Example = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">
        <BookOpen className="h-4 w-4" />
        Resources
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      <DropdownMenuLabel>Learning Resources</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <BookOpen />
          Getting Started
          <ExternalLink className="ml-auto h-3 w-3" />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <FileText />
          API Reference
          <ExternalLink className="ml-auto h-3 w-3" />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Video />
          Video Guides
          <ExternalLink className="ml-auto h-3 w-3" />
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuLabel>Developer</DropdownMenuLabel>
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <Code />
          Code Examples
          <ExternalLink className="ml-auto h-3 w-3" />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Github />
          GitHub Repository
          <ExternalLink className="ml-auto h-3 w-3" />
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <MessageSquare />
        Community Forum
        <ExternalLink className="ml-auto h-3 w-3" />
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export default Example;
