"use client";

import { UnderlineIcon } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

export const title = "Disabled Toggle";

const Example = () => (
  <Toggle aria-label="Toggle underline" disabled>
    <UnderlineIcon />
  </Toggle>
);

export default Example;
