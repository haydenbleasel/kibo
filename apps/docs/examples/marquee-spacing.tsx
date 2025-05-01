'use client';

import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from '@repo/marquee';

const Example = () => (
  <div className="flex size-full items-center justify-center bg-background">
    <Marquee>
      <MarqueeFade side="left" />
      <MarqueeFade side="right" />
      <MarqueeContent>
        {new Array(10).fill(null).map((_, index) => (
          <MarqueeItem key={index} className="-mx-2 h-16 w-16">
            <img
              src={`https://placehold.co/64x64?random=${index}`}
              alt={`Placeholder ${index}`}
              className="overflow-hidden rounded-full ring-2 ring-background"
            />
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </Marquee>
  </div>
);

export default Example;
