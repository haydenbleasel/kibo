"use client";

import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export const title = "No Filter Results";

const Example = () => (
  <Empty>
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <Filter />
      </EmptyMedia>
      <EmptyTitle>No items match your filters</EmptyTitle>
      <EmptyDescription>
        Try adjusting your filters to see more results.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <Button variant="outline">Clear Filters</Button>
    </EmptyContent>
  </Empty>
);

export default Example;
