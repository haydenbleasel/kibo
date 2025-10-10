"use client";

import { UnderlineIcon } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

export const title = "Large Toggle";

const Example = () => (
  <Toggle aria-label="Toggle underline" size="lg">
    <UnderlineIcon />
  </Toggle>
);

export default Example;
