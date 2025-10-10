"use client";

import {
  PauseIcon,
  PlayIcon,
  SkipBackIcon,
  SkipForwardIcon,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export const title = "Player Controls";

const Example = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button size="sm" variant="outline">
          <SkipBackIcon />
        </Button>
        <Button
          onClick={() => setIsPlaying(!isPlaying)}
          size="sm"
          variant="outline"
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </Button>
        <Button size="sm" variant="outline">
          <SkipForwardIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button size="sm" variant="outline">
          <SkipBackIcon />
          Previous
        </Button>
        <Button
          onClick={() => setIsPlaying(!isPlaying)}
          size="sm"
          variant="outline"
        >
          {isPlaying ? (
            <>
              <PauseIcon />
              Pause
            </>
          ) : (
            <>
              <PlayIcon />
              Play
            </>
          )}
        </Button>
        <Button size="sm" variant="outline">
          Next
          <SkipForwardIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Example;
