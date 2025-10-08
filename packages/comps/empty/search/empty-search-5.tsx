"use client";

import { Filter, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export const title = "Clear Filters Suggestion";

const Example = () => (
  <Empty>
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <Filter />
      </EmptyMedia>
      <EmptyTitle>No results with current filters</EmptyTitle>
      <EmptyDescription>
        Your current filter combination returned no results. Try removing some
        filters or starting over.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <div className="flex gap-2">
        <Button>
          <RotateCcw />
          Clear All Filters
        </Button>
        <Button variant="outline">Browse All</Button>
      </div>
    </EmptyContent>
  </Empty>
);

export default Example;
