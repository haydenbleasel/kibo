"use client";

import { Rating, RatingButton } from "@repo/rating";
import { HeartIcon } from "lucide-react";

const Example = () => (
  <Rating defaultValue={3}>
    {Array.from({ length: 5 }).map((_, index) => (
      <RatingButton icon={<HeartIcon />} key={index} />
    ))}
  </Rating>
);

export default Example;
