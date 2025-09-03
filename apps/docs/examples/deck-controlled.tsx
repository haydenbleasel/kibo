"use client";

import { Deck, DeckCards, DeckEmpty, DeckItem } from "@repo/deck";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const cards = [
  { id: 1, title: "Card 1", color: "bg-red-500" },
  { id: 2, title: "Card 2", color: "bg-blue-500" },
  { id: 3, title: "Card 3", color: "bg-green-500" },
  { id: 4, title: "Card 4", color: "bg-yellow-500" },
  { id: 5, title: "Card 5", color: "bg-purple-500" },
];

const Example = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState<
    "left" | "right"
  >("left");

  const nextCardLeft = () => {
    if (currentIndex < cards.length) {
      setAnimationDirection("left");
      // Small delay to ensure direction is set before index changes
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 0);
    }
  };

  const nextCardRight = () => {
    if (currentIndex < cards.length) {
      setAnimationDirection("right");
      // Small delay to ensure direction is set before index changes
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 0);
    }
  };

  return (
    <div className="space-y-4">
      <div className="text-center">
        <p className="mb-2 text-muted-foreground text-sm">
          Current Index: {currentIndex} | Next Direction: {animationDirection}
        </p>
        <div className="flex justify-center gap-2">
          <Button
            disabled={currentIndex >= cards.length}
            onClick={nextCardLeft}
            size="sm"
            variant="outline"
          >
            Next (Left Animation)
          </Button>
          <Button
            disabled={currentIndex >= cards.length}
            onClick={nextCardRight}
            size="sm"
            variant="outline"
          >
            Next (Right Animation)
          </Button>
        </div>
      </div>

      <Deck className="mx-auto aspect-square w-40">
        <DeckCards
          animateOnIndexChange={true}
          className="aspect-[2/3]"
          currentIndex={currentIndex}
          indexChangeDirection={animationDirection}
          onCurrentIndexChange={setCurrentIndex}
          onSwipe={(_index, _direction) => {
            // Handle swipe action
          }}
        >
          {cards.map((card) => (
            <DeckItem
              className={`${card.color} flex-col text-center text-white`}
              key={card.id}
            >
              <h3 className="font-bold text-2xl">{card.title}</h3>
              <p className="text-sm opacity-90">Swipe or use buttons</p>
            </DeckItem>
          ))}
        </DeckCards>
        <DeckEmpty />
      </Deck>
    </div>
  );
};

export default Example;
