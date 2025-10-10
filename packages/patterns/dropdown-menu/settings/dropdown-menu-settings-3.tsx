"use client";

import { Settings } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const title = "Preferences Dropdown";

const Example = () => {
  const [autoSave, setAutoSave] = useState(true);
  const [spellCheck, setSpellCheck] = useState(true);
  const [lineNumbers, setLineNumbers] = useState(false);
  const [wordWrap, setWordWrap] = useState(true);
  const [minimap, setMinimap] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Settings className="h-4 w-4" />
          Preferences
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Editor Preferences</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={autoSave}
          onCheckedChange={setAutoSave}
        >
          Auto-save
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={spellCheck}
          onCheckedChange={setSpellCheck}
        >
          Spell Check
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={lineNumbers}
          onCheckedChange={setLineNumbers}
        >
          Line Numbers
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={wordWrap}
          onCheckedChange={setWordWrap}
        >
          Word Wrap
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={minimap}
          onCheckedChange={setMinimap}
        >
          Minimap
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Example;
