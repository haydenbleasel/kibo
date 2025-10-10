"use client";

import { faker } from "@faker-js/faker";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const title = "Carousel with Thumbnails";

const slides = Array.from({ length: 5 }, (_, index) => ({
  id: index + 1,
  image: faker.image.urlPicsumPhotos({ width: 800, height: 400 }),
}));

const Example = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const handleApiChange = (newApi: CarouselApi) => {
    setApi(newApi);

    if (newApi) {
      setCurrent(newApi.selectedScrollSnap());

      newApi.on("select", () => {
        setCurrent(newApi.selectedScrollSnap());
      });
    }
  };

  return (
    <div className="mx-auto w-full max-w-md space-y-4">
      <Carousel setApi={handleApiChange}>
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="flex aspect-[2/1] items-center justify-center rounded-md border bg-background">
                <span className="font-semibold text-4xl">{slide.id}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex justify-center gap-2">
        {slides.map((slide, index) => (
          <Button
            key={slide.id}
            onClick={() => api?.scrollTo(index)}
            variant={current === index ? "default" : "outline"}
          >
            {slide.id}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Example;
