"use client";

import { BookOpen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export const title = "Empty with Link Action";

const Example = () => (
  <Empty>
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <BookOpen />
      </EmptyMedia>
      <EmptyTitle>Get started with our guide</EmptyTitle>
      <EmptyDescription>
        Learn how to set up your first project and start building.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <Button className="gap-2" variant="link">
        Read the documentation
        <ExternalLink className="h-4 w-4" />
      </Button>
    </EmptyContent>
  </Empty>
);

export default Example;
