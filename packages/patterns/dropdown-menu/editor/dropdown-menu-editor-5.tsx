"use client";

import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const title = "Alignment Options";

const Example = () => {
  const [alignment, setAlignment] = useState("left");

  const getIcon = () => {
    switch (alignment) {
      case "center":
        return <AlignCenter className="h-4 w-4" />;
      case "right":
        return <AlignRight className="h-4 w-4" />;
      case "justify":
        return <AlignJustify className="h-4 w-4" />;
      default:
        return <AlignLeft className="h-4 w-4" />;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="outline">
          {getIcon()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuRadioGroup onValueChange={setAlignment} value={alignment}>
          <DropdownMenuRadioItem value="left">
            <AlignLeft />
            Align Left
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="center">
            <AlignCenter />
            Align Center
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">
            <AlignRight />
            Align Right
          </DropdownMenuRadioItem>
          <DropdownMenuSeparator />
          <DropdownMenuRadioItem value="justify">
            <AlignJustify />
            Justify
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Example;
