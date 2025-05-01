'use client';

import { Marquee, MarqueeContent, MarqueeItem } from '@repo/marquee';

const Example = () => (
  <Marquee>
    <MarqueeContent>
      {new Array(10).fill(null).map((_, index) => (
        <MarqueeItem key={index} className="h-16 w-16">
          <img
            src={`https://placehold.co/64x64?random=${index}`}
            alt={`Placeholder ${index}`}
            className="overflow-hidden rounded-full"
          />
        </MarqueeItem>
      ))}
    </MarqueeContent>
  </Marquee>
);

export default Example;
