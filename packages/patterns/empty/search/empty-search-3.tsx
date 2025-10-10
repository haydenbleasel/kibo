"use client";

import { SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export const title = "No Matches Found";

const Example = () => (
  <Empty>
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <SearchX />
      </EmptyMedia>
      <EmptyTitle>No matches found for "query"</EmptyTitle>
      <EmptyDescription>
        Check your spelling or try searching for something else.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <Button variant="ghost">View All Items</Button>
    </EmptyContent>
  </Empty>
);

export default Example;
