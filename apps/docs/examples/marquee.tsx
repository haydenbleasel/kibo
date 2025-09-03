"use client";

import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@repo/marquee";

const Example = () => (
  <div className="flex size-full items-center justify-center bg-background">
    <Marquee>
      <MarqueeFade side="left" />
      <MarqueeFade side="right" />
      <MarqueeContent>
        {new Array(10).fill(null).map((_, index) => (
          <MarqueeItem className="h-32 w-32" key={index}>
            <img
              alt={`Placeholder ${index}`}
              className="overflow-hidden rounded-full"
              src={`https://placehold.co/128x128?random=${index}`}
            />
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </Marquee>
  </div>
);

export default Example;
