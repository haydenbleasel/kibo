import { faker } from "@faker-js/faker";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const title = "Hero Carousel";

const slides = Array.from({ length: 3 }, () => ({
  id: faker.string.uuid(),
  title: faker.company.catchPhrase(),
  description: faker.lorem.sentence(),
  cta: faker.helpers.arrayElement([
    "Learn More",
    "Get Started",
    "Shop Now",
    "Discover",
  ]),
}));

const Example = () => (
  <div className="mx-auto w-full max-w-2xl">
    <Carousel>
      <CarouselContent>
        {slides.map((slide) => (
          <CarouselItem key={slide.id}>
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-muted">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
                <h2 className="mb-2 font-bold text-3xl">{slide.title}</h2>
                <p className="mb-6 max-w-md text-sm opacity-90">
                  {slide.description}
                </p>
                <Button variant="secondary">{slide.cta}</Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  </div>
);

export default Example;
