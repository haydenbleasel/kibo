"use client";

import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export const title = "Contextual Toolbar";

const Example = () => {
  const [showToolbar, setShowToolbar] = useState(false);
  const [selectedText, setSelectedText] = useState("");

  const handleTextSelect = (e: React.MouseEvent<HTMLDivElement>) => {
    const selection = window.getSelection();
    const text = selection?.toString() || "";
    setSelectedText(text);
    setShowToolbar(text.length > 0);
  };

  return (
    <div className="flex flex-col gap-4">
      <div
        className="rounded-md border bg-background p-4"
        onMouseUp={handleTextSelect}
      >
        <p>Select this text to see the formatting toolbar appear.</p>
      </div>
      {showToolbar && (
        <ButtonGroup>
          <Button size="sm" variant="outline">
            <BoldIcon />
          </Button>
          <Button size="sm" variant="outline">
            <ItalicIcon />
          </Button>
          <Button size="sm" variant="outline">
            <UnderlineIcon />
          </Button>
        </ButtonGroup>
      )}
      <ButtonGroup>
        <Button size="sm" variant="outline">
          <BoldIcon />
          Bold
        </Button>
        <Button size="sm" variant="outline">
          <ItalicIcon />
          Italic
        </Button>
        <Button size="sm" variant="outline">
          <UnderlineIcon />
          Underline
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Example;
