"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const title = "Tooltip with Image";

const Example = () => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Preview</Button>
    </TooltipTrigger>
    <TooltipContent className="max-w-xs p-0">
      <div className="flex flex-col gap-1 p-3">
        {/** biome-ignore lint/performance/noImgElement: "Kibo UI is framework agnostic" */}
        <img
          alt="Preview"
          className="mb-1 h-[150px] w-[257px] rounded-md"
          height={300}
          src="https://placehold.co/514x300"
          width={514}
        />
        <p className="font-semibold">Product Preview</p>
        <p className="text-xs">
          View the full product details and specifications
        </p>
      </div>
    </TooltipContent>
  </Tooltip>
);

export default Example;
