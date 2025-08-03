'use client';

import { Deck, DeckItem } from '@repo/deck';
import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';

const cards = [
  { id: 1, color: 'bg-red-500', text: 'Card 1' },
  { id: 2, color: 'bg-blue-500', text: 'Card 2' },
  { id: 3, color: 'bg-green-500', text: 'Card 3' },
  { id: 4, color: 'bg-purple-500', text: 'Card 4' },
  { id: 5, color: 'bg-orange-500', text: 'Card 5' },
];

const Example = () => {
  const [threshold, setThreshold] = useState([100]);
  const [stackSize, setStackSize] = useState([3]);
  const [scale, setScale] = useState([5]);

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label>Swipe Threshold: {threshold[0]}px</Label>
          <Slider
            className="mt-2"
            max={200}
            min={50}
            onValueChange={setThreshold}
            step={10}
            value={threshold}
          />
        </div>

        <div>
          <Label>Stack Size: {stackSize[0]} cards</Label>
          <Slider
            className="mt-2"
            max={5}
            min={1}
            onValueChange={setStackSize}
            step={1}
            value={stackSize}
          />
        </div>

        <div>
          <Label>Scale Factor: {scale[0] / 100}</Label>
          <Slider
            className="mt-2"
            max={20}
            min={1}
            onValueChange={setScale}
            step={1}
            value={scale}
          />
        </div>
      </div>

      <div className="mx-auto w-80">
        <Deck
          className="aspect-[4/5]"
          onSwipeLeft={() => { }}
          onSwipeRight={() => { }}
          scale={scale[0] / 100}
          stackSize={stackSize[0]}
          threshold={threshold[0]}
        >
          {cards.map((card) => (
            <DeckItem className={cn(card.color, 'text-white')} key={card.id}>
              <div className="text-center">
                <h3 className='font-bold text-2xl'>{card.text}</h3>
                <p className="mt-2 text-sm opacity-80">
                  Threshold: {threshold[0]}px
                </p>
              </div>
            </DeckItem>
          ))}
        </Deck>
      </div>
    </div>
  );
};

export default Example;
