"use client";

import { Star } from "lucide-react";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export const title = "Empty with Link in Description";

const Example = () => (
  <Empty>
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <Star />
      </EmptyMedia>
      <EmptyTitle>No favorites yet</EmptyTitle>
      <EmptyDescription>
        Items you mark as favorites will appear here.{" "}
        <a href="#">Learn more about favorites</a>
      </EmptyDescription>
    </EmptyHeader>
  </Empty>
);

export default Example;
