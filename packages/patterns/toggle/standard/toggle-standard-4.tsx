"use client";

import { BoldIcon } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

export const title = "Toggle with Text";

const Example = () => (
  <Toggle aria-label="Toggle bold">
    <BoldIcon />
    Bold
  </Toggle>
);

export default Example;
