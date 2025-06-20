'use client';

import { Comparison, ComparisonHandle, ComparisonItem } from '@repo/comparison';
import Image from 'next/image';

const Example = () => (
  <Comparison className="aspect-video" mode="hover">
    <ComparisonItem position="left" className="bg-red-500">
      <Image
        src="https://placehold.co/1920x1080?random=1"
        alt="Placeholder 1"
        className="opacity-50"
        width={1920}
        height={1080}
        unoptimized
      />
    </ComparisonItem>
    <ComparisonItem position="right" className="bg-blue-500">
      <Image
        src="https://placehold.co/2560x1440?random=2"
        alt="Placeholder 2"
        className="opacity-50"
        width={2560}
        height={1440}
        unoptimized
      />
    </ComparisonItem>
    <ComparisonHandle />
  </Comparison>
);

export default Example;
