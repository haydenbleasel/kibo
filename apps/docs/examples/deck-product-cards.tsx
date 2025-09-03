"use client";

import { Deck, DeckCards, DeckEmpty, DeckItem } from "@repo/deck";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$199",
    rating: 4.5,
    image: "https://placehold.co/400x300/ff6b6b/fff?text=Headphones",
    category: "Electronics",
    description: "Premium wireless headphones with noise cancellation",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$299",
    rating: 4.8,
    image: "https://placehold.co/400x300/4ecdc4/fff?text=Watch",
    category: "Wearables",
    description: "Feature-rich smartwatch with health tracking",
  },
  {
    id: 3,
    name: "Coffee Maker",
    price: "$149",
    rating: 4.3,
    image: "https://placehold.co/400x300/45b7d1/fff?text=Coffee",
    category: "Kitchen",
    description: "Programmable coffee maker with built-in grinder",
  },
  {
    id: 4,
    name: "Laptop Stand",
    price: "$79",
    rating: 4.6,
    image: "https://placehold.co/400x300/96ceb4/fff?text=Stand",
    category: "Accessories",
    description: "Adjustable aluminum laptop stand for better ergonomics",
  },
];

const Example = () => (
  <div className="mx-auto w-80">
    <Deck>
      <DeckCards className="aspect-[4/5]" onSwipe={console.log}>
        {products.map((product) => (
          <DeckItem className="flex flex-col p-0" key={product.id}>
            <div className="relative">
              <Image
                alt={product.name}
                className="h-64 w-full rounded-t-lg object-cover"
                draggable={false}
                height={300}
                src={product.image}
                unoptimized
                width={400}
              />
              <Badge className="absolute top-3 right-3">
                {product.category}
              </Badge>
            </div>

            <div className="flex flex-1 flex-col p-4">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <span className="font-bold text-lg text-primary">
                  {product.price}
                </span>
              </div>

              <div className="mt-1 flex items-center gap-1">
                <div className="flex">
                  {[...new Array(5)].map((_, i) => (
                    <StarIcon
                      className={cn(
                        "h-4 w-4",
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-muted-foreground"
                      )}
                      key={`star-${product.id}-${i}`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground text-sm">
                  ({product.rating})
                </span>
              </div>

              <p className="mt-2 flex-1 text-muted-foreground text-sm">
                {product.description}
              </p>
            </div>
          </DeckItem>
        ))}
      </DeckCards>
      <DeckEmpty />
    </Deck>
  </div>
);

export default Example;
