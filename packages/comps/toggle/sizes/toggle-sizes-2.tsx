"use client";

import { ItalicIcon } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

export const title = "Default Size Toggle";

const Example = () => (
  <Toggle aria-label="Toggle italic">
    <ItalicIcon />
  </Toggle>
);

export default Example;
