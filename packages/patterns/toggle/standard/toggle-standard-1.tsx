"use client";

import { BoldIcon } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

export const title = "Default Toggle";

const Example = () => (
  <Toggle aria-label="Toggle bold">
    <BoldIcon />
  </Toggle>
);

export default Example;
