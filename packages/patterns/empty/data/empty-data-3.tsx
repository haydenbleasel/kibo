"use client";

import { Bell } from "lucide-react";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export const title = "No Notifications";

const Example = () => (
  <Empty>
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <Bell />
      </EmptyMedia>
      <EmptyTitle>No notifications</EmptyTitle>
      <EmptyDescription>
        You're all caught up! We'll notify you when something new happens.
      </EmptyDescription>
    </EmptyHeader>
  </Empty>
);

export default Example;
