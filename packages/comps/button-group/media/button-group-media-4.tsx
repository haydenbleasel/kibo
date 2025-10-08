"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export const title = "Playback Speed";

const Example = () => {
  const [speed, setSpeed] = useState(1);

  const speeds = [0.5, 0.75, 1, 1.25, 1.5, 2];

  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        {speeds.map((s) => (
          <Button
            key={s}
            onClick={() => setSpeed(s)}
            size="sm"
            variant={speed === s ? "default" : "outline"}
          >
            {s}x
          </Button>
        ))}
      </ButtonGroup>
      <ButtonGroup>
        <Button
          onClick={() => setSpeed(0.5)}
          size="sm"
          variant={speed === 0.5 ? "default" : "outline"}
        >
          Slow
        </Button>
        <Button
          onClick={() => setSpeed(1)}
          size="sm"
          variant={speed === 1 ? "default" : "outline"}
        >
          Normal
        </Button>
        <Button
          onClick={() => setSpeed(1.5)}
          size="sm"
          variant={speed === 1.5 ? "default" : "outline"}
        >
          Fast
        </Button>
        <Button
          onClick={() => setSpeed(2)}
          size="sm"
          variant={speed === 2 ? "default" : "outline"}
        >
          Faster
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Example;
