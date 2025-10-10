"use client";

import {
  MaximizeIcon,
  RotateCcwIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export const title = "Zoom Controls";

const Example = () => {
  const [zoom, setZoom] = useState(100);

  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button
          onClick={() => setZoom(Math.max(25, zoom - 25))}
          size="sm"
          variant="outline"
        >
          <ZoomOutIcon />
        </Button>
        <Button onClick={() => setZoom(100)} size="sm" variant="outline">
          <RotateCcwIcon />
          Reset
        </Button>
        <Button
          onClick={() => setZoom(Math.min(400, zoom + 25))}
          size="sm"
          variant="outline"
        >
          <ZoomInIcon />
        </Button>
        <Button onClick={() => setZoom(100)} size="sm" variant="outline">
          <MaximizeIcon />
          Fit
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button
          onClick={() => setZoom(Math.max(25, zoom - 25))}
          size="sm"
          variant="outline"
        >
          <ZoomOutIcon />
        </Button>
        <Button size="sm" variant="outline">
          {zoom}%
        </Button>
        <Button
          onClick={() => setZoom(Math.min(400, zoom + 25))}
          size="sm"
          variant="outline"
        >
          <ZoomInIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Example;
