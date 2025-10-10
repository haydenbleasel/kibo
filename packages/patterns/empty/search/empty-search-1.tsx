"use client";

import { Search } from "lucide-react";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export const title = "No Search Results";

const Example = () => (
  <Empty>
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <Search />
      </EmptyMedia>
      <EmptyTitle>No results found</EmptyTitle>
      <EmptyDescription>
        We couldn't find anything matching your search. Try different keywords.
      </EmptyDescription>
    </EmptyHeader>
  </Empty>
);

export default Example;
