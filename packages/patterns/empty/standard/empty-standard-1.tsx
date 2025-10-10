"use client";

import { FileQuestion } from "lucide-react";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export const title = "Simple Empty State";

const Example = () => (
  <Empty>
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <FileQuestion />
      </EmptyMedia>
      <EmptyTitle>No items found</EmptyTitle>
    </EmptyHeader>
  </Empty>
);

export default Example;
