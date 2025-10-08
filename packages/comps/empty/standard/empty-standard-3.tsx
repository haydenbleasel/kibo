"use client";

import { Package } from "lucide-react";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export const title = "Empty with Long Description";

const Example = () => (
  <Empty>
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <Package />
      </EmptyMedia>
      <EmptyTitle>No products available</EmptyTitle>
      <EmptyDescription>
        There are no products in this category yet. Check back later or browse
        other categories to discover what we have to offer.
      </EmptyDescription>
    </EmptyHeader>
  </Empty>
);

export default Example;
