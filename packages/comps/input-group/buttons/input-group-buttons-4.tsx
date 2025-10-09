"use client";

import { EyeIcon, EyeOffIcon, RefreshCwIcon } from "lucide-react";
import { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

export const title = "Password Actions";

const Example = () => {
  const [visible, setVisible] = useState(false);

  return (
    <InputGroup className="w-full max-w-sm bg-background">
      <InputGroupInput
        placeholder="Enter password"
        type={visible ? "text" : "password"}
      />
      <InputGroupAddon align="inline-end">
        <InputGroupButton
          aria-label="Toggle visibility"
          onClick={() => setVisible(!visible)}
          size="icon-xs"
          variant="ghost"
        >
          {visible ? <EyeOffIcon /> : <EyeIcon />}
        </InputGroupButton>
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <InputGroupButton aria-label="Generate" size="icon-xs" variant="ghost">
          <RefreshCwIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
};

export default Example;
