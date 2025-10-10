"use client";

import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
  ListIcon,
  ListOrderedIcon,
  UnderlineIcon,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export const title = "Rich Text Toolbar";

const Example = () => {
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button
          onClick={() => setBold(!bold)}
          size="sm"
          variant={bold ? "default" : "outline"}
        >
          <BoldIcon />
        </Button>
        <Button
          onClick={() => setItalic(!italic)}
          size="sm"
          variant={italic ? "default" : "outline"}
        >
          <ItalicIcon />
        </Button>
        <Button
          onClick={() => setUnderline(!underline)}
          size="sm"
          variant={underline ? "default" : "outline"}
        >
          <UnderlineIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button size="sm" variant="outline">
          <AlignLeftIcon />
        </Button>
        <Button size="sm" variant="outline">
          <AlignCenterIcon />
        </Button>
        <Button size="sm" variant="outline">
          <AlignRightIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button size="sm" variant="outline">
          <BoldIcon />
        </Button>
        <Button size="sm" variant="outline">
          <ItalicIcon />
        </Button>
        <Button size="sm" variant="outline">
          <ListIcon />
        </Button>
        <Button size="sm" variant="outline">
          <ListOrderedIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Example;
