import { faker } from "@faker-js/faker";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const title = "Product Showcase Carousel";

const products = Array.from({ length: 5 }, () => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price({ min: 50, max: 500, dec: 0 }),
  rating: faker.number.float({ min: 3.5, max: 5, fractionDigits: 1 }),
  reviews: faker.number.int({ min: 10, max: 500 }),
  badge: faker.helpers.arrayElement(["New", "Sale", "Popular", null]),
}));

const Example = () => (
  <div className="mx-auto w-full max-w-sm">
    <Carousel>
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem key={product.id}>
            <div className="overflow-hidden rounded-md border bg-background">
              <div className="relative aspect-[3/2] bg-black">
                {/** biome-ignore lint/performance/noImgElement: "Kibo UI is framework agnostic" */}
                <img
                  alt={product.name}
                  className="absolute inset-0"
                  height={600}
                  src="https://placehold.co/600x400"
                  width={400}
                />
                {product.badge && (
                  <Badge className="absolute top-4 right-4">
                    {product.badge}
                  </Badge>
                )}
              </div>
              <div className="space-y-4 p-6">
                <div>
                  <h3 className="mb-2 font-semibold text-lg">{product.name}</h3>
                  <div className="mb-2 flex items-center gap-2">
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? "fill-primary text-primary"
                              : "fill-muted text-muted"
                          }`}
                          key={i}
                        />
                      ))}
                    </div>
                    <span className="text-muted-foreground text-sm">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  <p className="font-bold text-2xl">${product.price}</p>
                </div>
                <Button className="w-full">Add to Cart</Button>
              </div>
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
