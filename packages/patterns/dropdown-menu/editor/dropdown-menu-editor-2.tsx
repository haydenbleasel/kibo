"use client";

import {
  CheckSquare,
  Code,
  Image,
  Link,
  List,
  ListOrdered,
  Minus,
  Plus,
  Quote,
  Type,
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

export const title = "Block Type Selector";

const Example = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">
        <Plus className="h-4 w-4" />
        Insert Block
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      <DropdownMenuLabel>Basic Blocks</DropdownMenuLabel>
      <DropdownMenuItem>
        <Type />
        Text
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Quote />
        Quote
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Minus />
        Divider
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuLabel>Lists</DropdownMenuLabel>
      <DropdownMenuItem>
        <List />
        Bulleted List
      </DropdownMenuItem>
      <DropdownMenuItem>
        <ListOrdered />
        Numbered List
      </DropdownMenuItem>
      <DropdownMenuItem>
        <CheckSquare />
        To-do List
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuLabel>Media</DropdownMenuLabel>
      <DropdownMenuItem>
        <Image />
        Image
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Link />
        Embed
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Code />
        Code Block
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export default Example;
