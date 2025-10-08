"use client";

import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export const title = "Single Selection Toggle Group";

const Example = () => (
  <ToggleGroup type="single" variant="outline">
    <ToggleGroupItem aria-label="Align left" value="left">
      <AlignLeftIcon />
    </ToggleGroupItem>
    <ToggleGroupItem aria-label="Align center" value="center">
      <AlignCenterIcon />
    </ToggleGroupItem>
    <ToggleGroupItem aria-label="Align right" value="right">
      <AlignRightIcon />
    </ToggleGroupItem>
  </ToggleGroup>
);

export default Example;
