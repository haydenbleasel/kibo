"use client";

import { ChevronDownIcon, GitForkIcon, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const title = "Split Button with Dropdown";

const Example = () => (
  <div className="flex flex-col gap-4">
    <ButtonGroup>
      <Button variant="outline">
        <GitForkIcon />
        Fork
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="px-2" variant="outline">
            <ChevronDownIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Create a fork</DropdownMenuItem>
          <DropdownMenuItem>View existing forks</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
    <ButtonGroup>
      <Button variant="outline">
        <StarIcon />
        Star
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="px-2" variant="outline">
            <ChevronDownIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Add to list</DropdownMenuItem>
          <DropdownMenuItem>View starred</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  </div>
);

export default Example;
