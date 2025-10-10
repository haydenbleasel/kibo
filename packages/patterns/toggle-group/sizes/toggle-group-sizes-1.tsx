"use client";

import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export const title = "Small Toggle Group";

const Example = () => (
  <ToggleGroup size="sm" type="multiple" variant="outline">
    <ToggleGroupItem aria-label="Toggle bold" value="bold">
      <BoldIcon />
    </ToggleGroupItem>
    <ToggleGroupItem aria-label="Toggle italic" value="italic">
      <ItalicIcon />
    </ToggleGroupItem>
    <ToggleGroupItem aria-label="Toggle underline" value="underline">
      <UnderlineIcon />
    </ToggleGroupItem>
  </ToggleGroup>
);

export default Example;
