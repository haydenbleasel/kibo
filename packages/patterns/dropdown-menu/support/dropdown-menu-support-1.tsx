"use client";

import {
  Book,
  ExternalLink,
  HelpCircle,
  Mail,
  MessagesSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const title = "Support Dropdown";

const Example = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">
        <HelpCircle className="h-4 w-4" />
        Support
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      <DropdownMenuLabel>Get Help</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Book />
        Documentation
        <ExternalLink className="ml-auto h-3 w-3" />
      </DropdownMenuItem>
      <DropdownMenuItem>
        <MessagesSquare />
        Knowledge Base
        <ExternalLink className="ml-auto h-3 w-3" />
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Mail />
        Contact Us
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export default Example;
