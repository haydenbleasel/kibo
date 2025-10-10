"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export const title = "Density Controls";

const Example = () => {
  const [density, setDensity] = useState("comfortable");

  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button
          onClick={() => setDensity("compact")}
          size="sm"
          variant={density === "compact" ? "default" : "outline"}
        >
          Compact
        </Button>
        <Button
          onClick={() => setDensity("comfortable")}
          size="sm"
          variant={density === "comfortable" ? "default" : "outline"}
        >
          Comfortable
        </Button>
        <Button
          onClick={() => setDensity("spacious")}
          size="sm"
          variant={density === "spacious" ? "default" : "outline"}
        >
          Spacious
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button
          onClick={() => setDensity("xs")}
          size="sm"
          variant={density === "xs" ? "default" : "outline"}
        >
          XS
        </Button>
        <Button
          onClick={() => setDensity("sm")}
          size="sm"
          variant={density === "sm" ? "default" : "outline"}
        >
          S
        </Button>
        <Button
          onClick={() => setDensity("md")}
          size="sm"
          variant={density === "md" ? "default" : "outline"}
        >
          M
        </Button>
        <Button
          onClick={() => setDensity("lg")}
          size="sm"
          variant={density === "lg" ? "default" : "outline"}
        >
          L
        </Button>
        <Button
          onClick={() => setDensity("xl")}
          size="sm"
          variant={density === "xl" ? "default" : "outline"}
        >
          XL
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Example;
