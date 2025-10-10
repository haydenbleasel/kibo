import { faker } from "@faker-js/faker";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const title = "Standard Carousel";

const slides = Array.from({ length: 5 }, (_, index) => ({
  id: index + 1,
  image: faker.image.urlPicsumPhotos({ width: 800, height: 400 }),
}));

const Example = () => (
  <div className="mx-auto w-full max-w-xl">
    <Carousel>
      <CarouselContent>
        {slides.map((slide) => (
          <CarouselItem key={slide.id}>
            <div className="flex aspect-video w-full items-center justify-center rounded-md border bg-background">
              <span className="font-semibold text-4xl">{slide.id}</span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
);

export default Example;
