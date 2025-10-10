"use client";

import { BoldIcon } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

export const title = "Small Toggle";

const Example = () => (
  <Toggle aria-label="Toggle bold" size="sm">
    <BoldIcon />
  </Toggle>
);

export default Example;
