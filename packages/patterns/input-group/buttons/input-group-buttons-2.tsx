"use client";

import { HeartIcon, InfoIcon } from "lucide-react";
import { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

export const title = "Multiple Action Buttons";

const Example = () => {
  const [favorited, setFavorited] = useState(false);

  return (
    <InputGroup className="w-full max-w-sm bg-background">
      <InputGroupInput placeholder="https://github.com/shadcn" readOnly />
      <InputGroupAddon align="inline-end">
        <InputGroupButton aria-label="Info" size="icon-xs" variant="ghost">
          <InfoIcon />
        </InputGroupButton>
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <InputGroupButton
          aria-label="Favorite"
          onClick={() => setFavorited(!favorited)}
          size="icon-xs"
          variant="ghost"
        >
          <HeartIcon className={favorited ? "fill-current" : ""} />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
};

export default Example;
