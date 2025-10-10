"use client";

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";

export const title = "Empty without Icon";

const Example = () => (
  <Empty>
    <EmptyHeader>
      <EmptyTitle>No content available</EmptyTitle>
      <EmptyDescription>
        There's nothing to display at the moment. Please check back later.
      </EmptyDescription>
    </EmptyHeader>
  </Empty>
);

export default Example;
