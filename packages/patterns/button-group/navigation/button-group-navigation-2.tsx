"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export const title = "Carousel Controls";

const Example = () => {
  const [slide, setSlide] = useState(1);
  const totalSlides = 5;

  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button
          disabled={slide === 1}
          onClick={() => setSlide(Math.max(1, slide - 1))}
          size="sm"
          variant="outline"
        >
          <ChevronLeftIcon />
        </Button>
        {Array.from({ length: totalSlides }, (_, i) => i + 1).map((num) => (
          <Button
            className="aspect-square rounded-full p-0"
            key={num}
            onClick={() => setSlide(num)}
            size="sm"
            variant={slide === num ? "default" : "outline"}
          />
        ))}
        <Button
          disabled={slide === totalSlides}
          onClick={() => setSlide(Math.min(totalSlides, slide + 1))}
          size="sm"
          variant="outline"
        >
          <ChevronRightIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button
          disabled={slide === 1}
          onClick={() => setSlide(Math.max(1, slide - 1))}
          size="sm"
          variant="outline"
        >
          <ChevronLeftIcon />
          Prev
        </Button>
        <Button size="sm" variant="outline">
          {slide} / {totalSlides}
        </Button>
        <Button
          disabled={slide === totalSlides}
          onClick={() => setSlide(Math.min(totalSlides, slide + 1))}
          size="sm"
          variant="outline"
        >
          Next
          <ChevronRightIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Example;
