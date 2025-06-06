'use client';

import { Rating, RatingButton } from '@repo/rating';

const Example = () => (
  <Rating defaultValue={3}>
    {Array.from({ length: 5 }).map((_, index) => (
      <RatingButton key={index} className="text-yellow-500" />
    ))}
  </Rating>
);

export default Example;
