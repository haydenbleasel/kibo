"use client";

import { Heading } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const title = "Heading Selector";

const Example = () => {
  const [heading, setHeading] = useState("h1");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Heading className="h-4 w-4" />
          {heading.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuRadioGroup onValueChange={setHeading} value={heading}>
          <DropdownMenuRadioItem value="h1">
            <span className="font-bold text-2xl">Heading 1</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="h2">
            <span className="font-bold text-xl">Heading 2</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="h3">
            <span className="font-bold text-lg">Heading 3</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="h4">
            <span className="font-bold text-base">Heading 4</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="h5">
            <span className="font-bold text-sm">Heading 5</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="h6">
            <span className="font-bold text-xs">Heading 6</span>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Example;
