"use client";

import { GridIcon, LayoutGridIcon, ListIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export const title = "View Switcher";

const Example = () => {
  const [view, setView] = useState<"grid" | "list" | "cards">("grid");

  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button
          onClick={() => setView("grid")}
          size="sm"
          variant={view === "grid" ? "default" : "outline"}
        >
          <GridIcon />
          Grid
        </Button>
        <Button
          onClick={() => setView("list")}
          size="sm"
          variant={view === "list" ? "default" : "outline"}
        >
          <ListIcon />
          List
        </Button>
        <Button
          onClick={() => setView("cards")}
          size="sm"
          variant={view === "cards" ? "default" : "outline"}
        >
          <LayoutGridIcon />
          Cards
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button
          onClick={() => setView("grid")}
          size="sm"
          variant={view === "grid" ? "default" : "outline"}
        >
          <GridIcon />
        </Button>
        <Button
          onClick={() => setView("list")}
          size="sm"
          variant={view === "list" ? "default" : "outline"}
        >
          <ListIcon />
        </Button>
        <Button
          onClick={() => setView("cards")}
          size="sm"
          variant={view === "cards" ? "default" : "outline"}
        >
          <LayoutGridIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Example;
