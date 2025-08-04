'use client';

import { Deck, DeckCards, DeckEmpty, DeckItem } from '@repo/deck';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const cards = [
  { id: 1, title: 'Card 1', color: 'bg-red-500' },
  { id: 2, title: 'Card 2', color: 'bg-blue-500' },
  { id: 3, title: 'Card 3', color: 'bg-green-500' },
  { id: 4, title: 'Card 4', color: 'bg-yellow-500' },
  { id: 5, title: 'Card 5', color: 'bg-purple-500' },
];

const Example = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    if (currentIndex < cards.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="mx-auto space-y-4">
      <div className="text-center">
        <p className='mb-2 text-muted-foreground text-sm'>
          Current Index: {currentIndex}
        </p>
        <div className="flex justify-center gap-2">
          <Button
            disabled={currentIndex === 0}
            onClick={prevCard}
            size="sm"
            variant="outline"
          >
            Previous (Right Animation)
          </Button>
          <Button
            disabled={currentIndex >= cards.length}
            onClick={nextCard}
            size="sm"
            variant="outline"
          >
            Next (Left Animation)
          </Button>
        </div>
      </div>

      <Deck className='mx-auto w-40'>
        <DeckCards
          animateOnIndexChange={true}
          className="aspect-[2/3]"
          currentIndex={currentIndex}
          indexChangeDirection="left"
          onCurrentIndexChange={setCurrentIndex}
          onSwipe={(index, direction) => {
            console.log(`Swiped card ${index} ${direction}`);
          }}
        >
          {cards.map((card) => (
            <DeckItem
              className={`${card.color} flex-col text-center text-white`}
              key={card.id}
            >
              <h3 className='font-bold text-2xl'>{card.title}</h3>
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
