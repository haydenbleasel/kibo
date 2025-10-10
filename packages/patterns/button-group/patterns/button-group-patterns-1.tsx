"use client";

import {
  CopyIcon,
  Edit2Icon,
  MoreHorizontalIcon,
  TrashIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const title = "Overflow Menu";

const Example = () => (
  <div className="flex flex-col gap-4">
    <ButtonGroup>
      <Button size="sm" variant="outline">
        <CopyIcon />
        Copy
      </Button>
      <Button size="sm" variant="outline">
        <Edit2Icon />
        Edit
      </Button>
      <Button size="sm" variant="outline">
        <TrashIcon />
        Delete
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="sm" variant="outline">
            <MoreHorizontalIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Duplicate</DropdownMenuItem>
          <DropdownMenuItem>Archive</DropdownMenuItem>
          <DropdownMenuItem>Export</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
    <ButtonGroup>
      <Button size="sm" variant="outline">
        Copy
      </Button>
      <Button size="sm" variant="outline">
        Edit
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="sm" variant="outline">
            More
            <MoreHorizontalIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Delete</DropdownMenuItem>
          <DropdownMenuItem>Archive</DropdownMenuItem>
          <DropdownMenuItem>Move</DropdownMenuItem>
          <DropdownMenuItem>Share</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  </div>
);

export default Example;
