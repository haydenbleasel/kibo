"use client";

import { Comparison, ComparisonHandle, ComparisonItem } from "@repo/comparison";
import Image from "next/image";

const Example = () => (
  <Comparison
    className="aspect-video"
    onDragEnd={() => console.log("drag end")}
    onDragStart={() => console.log("drag start")}
  >
    <ComparisonItem className="bg-red-500" position="left">
      <Image
        alt="Placeholder 1"
        className="opacity-50"
        height={1080}
        src="https://placehold.co/1920x1080?random=1"
        unoptimized
        width={1920}
      />
    </ComparisonItem>
    <ComparisonItem className="bg-blue-500" position="right">
      <Image
        alt="Placeholder 2"
        className="opacity-50"
        height={1440}
        src="https://placehold.co/2560x1440?random=2"
        unoptimized
        width={2560}
      />
    </ComparisonItem>
    <ComparisonHandle />
  </Comparison>
);

export default Example;
