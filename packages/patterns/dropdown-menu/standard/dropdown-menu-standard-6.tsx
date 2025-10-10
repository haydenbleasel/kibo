"use client";

import { FileText, Folder, Image, Music, Plus, Video } from "lucide-react";
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

export const title = "Nested Dropdown";

const Example = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">
        <Plus className="h-4 w-4" />
        New
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      <DropdownMenuItem>
        <FileText />
        Document
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Folder />
        Folder
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuSub>
        <DropdownMenuSubTrigger className="px-2 py-1.5">
          <Image className="mr-2 size-4 text-muted-foreground" />
          Media
        </DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          <DropdownMenuItem>
            <Image />
            Image
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Video />
            Video
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Music />
            Audio
          </DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuSub>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger className="px-2 py-1.5">
          <FileText className="mr-2 size-4 text-muted-foreground" />
          Document Type
        </DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          <DropdownMenuItem>Text Document</DropdownMenuItem>
          <DropdownMenuItem>Spreadsheet</DropdownMenuItem>
          <DropdownMenuItem>Presentation</DropdownMenuItem>
          <DropdownMenuItem>Form</DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuSub>
    </DropdownMenuContent>
  </DropdownMenu>
);

export default Example;
