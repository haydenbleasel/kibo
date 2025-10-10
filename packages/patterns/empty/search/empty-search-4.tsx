"use client";

import { Search } from "lucide-react";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export const title = "Try Different Keywords";

const Example = () => (
  <Empty>
    <EmptyHeader>
      <EmptyMedia>
        <Search className="size-8 text-muted-foreground" />
      </EmptyMedia>
      <EmptyTitle>No results for your search</EmptyTitle>
      <EmptyDescription>
        Try using different keywords or check the spelling. You can also browse
        our categories to find what you're looking for.
      </EmptyDescription>
    </EmptyHeader>
  </Empty>
);

export default Example;
