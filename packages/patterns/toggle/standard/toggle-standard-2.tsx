"use client";

import { ItalicIcon } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

export const title = "Outline Toggle";

const Example = () => (
  <Toggle aria-label="Toggle italic" variant="outline">
    <ItalicIcon />
  </Toggle>
);

export default Example;
