"use client";

import { Columns, Eye, Grid, List } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const title = "View Options";

const Example = () => {
  const [layout, setLayout] = useState("grid");
  const [showHidden, setShowHidden] = useState(false);
  const [compactMode, setCompactMode] = useState(false);
  const [showPreview, setShowPreview] = useState(true);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="outline">
          <Eye className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Layout</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup onValueChange={setLayout} value={layout}>
          <DropdownMenuRadioItem value="list">
            <List />
            List View
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="grid">
            <Grid />
            Grid View
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="columns">
            <Columns />
            Column View
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Display Options</DropdownMenuLabel>
        <DropdownMenuCheckboxItem
          checked={showHidden}
          onCheckedChange={setShowHidden}
        >
          Show Hidden Files
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={compactMode}
          onCheckedChange={setCompactMode}
        >
          Compact Mode
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPreview}
          onCheckedChange={setShowPreview}
        >
          Show Preview
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Example;
