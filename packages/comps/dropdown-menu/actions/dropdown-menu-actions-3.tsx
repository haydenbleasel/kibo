"use client";

import {
  Archive,
  Copy,
  Edit,
  Facebook,
  Linkedin,
  Mail,
  MoreHorizontal,
  Share2,
  Trash2,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const title = "Card Actions with Nested Share";

const Example = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button className="h-8 w-8" size="icon" variant="ghost">
        <MoreHorizontal className="h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-48">
      <DropdownMenuItem>
        <Edit />
        Edit
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Copy />
        Duplicate
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>
          <Share2 />
          Share
        </DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          <DropdownMenuItem>
            <Mail />
            Email
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Twitter />
            Twitter
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Facebook />
            Facebook
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Linkedin />
            LinkedIn
          </DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuSub>
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
