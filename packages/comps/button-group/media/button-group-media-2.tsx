"use client";

import { Volume2Icon, VolumeIcon, VolumeXIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export const title = "Volume Controls";

const Example = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(50);

  const decreaseVolume = () => {
    const newVolume = Math.max(0, volume - 10);
    setVolume(newVolume);
    if (newVolume === 0) {
      setIsMuted(true);
    }
  };

  const increaseVolume = () => {
    const newVolume = Math.min(100, volume + 10);
    setVolume(newVolume);
    if (isMuted) {
      setIsMuted(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button
          onClick={() => setIsMuted(!isMuted)}
          size="sm"
          variant="outline"
        >
          {isMuted ? <VolumeXIcon /> : <Volume2Icon />}
        </Button>
        <Button onClick={decreaseVolume} size="sm" variant="outline">
          <VolumeIcon />
        </Button>
        <Button onClick={increaseVolume} size="sm" variant="outline">
          <Volume2Icon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button onClick={decreaseVolume} size="sm" variant="outline">
          -
        </Button>
        <Button size="sm" variant="outline">
          {isMuted ? "Muted" : `${volume}%`}
        </Button>
        <Button onClick={increaseVolume} size="sm" variant="outline">
          +
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Example;
