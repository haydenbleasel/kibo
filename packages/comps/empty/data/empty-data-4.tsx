"use client";

import { MessageSquare, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export const title = "No Messages";

const Example = () => (
  <Empty>
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <MessageSquare />
      </EmptyMedia>
      <EmptyTitle>No messages yet</EmptyTitle>
      <EmptyDescription>
        Start a conversation by sending your first message.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <Button>
        <Plus />
        New Message
      </Button>
    </EmptyContent>
  </Empty>
);

export default Example;
