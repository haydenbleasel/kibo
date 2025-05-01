'use client';

import { Rating, RatingButton } from '@repo/rating';
import { Input } from '@repo/shadcn-ui/components/ui/input';
import { useState } from 'react';

const Example = () => {
  const [value, setValue] = useState(3);

  return (
    <>
      <Rating value={value} onValueChange={setValue}>
        {Array.from({ length: 5 }).map((_, index) => (
          <RatingButton key={index} />
        ))}
      </Rating>
      <Input
        min={0}
        max={5}
        type="number"
        className="w-32 bg-background"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
    </>
  );
};

export default Example;
