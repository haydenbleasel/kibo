"use client";

import { Calendar } from "lucide-react";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export const title = "Empty with Multiple Paragraphs";

const Example = () => (
  <Empty>
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <Calendar />
      </EmptyMedia>
      <EmptyTitle>No upcoming events</EmptyTitle>
      <EmptyDescription>
        You don't have any events scheduled for the next 7 days.
        <br />
        <br />
        Create a new event to get started with your calendar.
      </EmptyDescription>
    </EmptyHeader>
  </Empty>
);

export default Example;
