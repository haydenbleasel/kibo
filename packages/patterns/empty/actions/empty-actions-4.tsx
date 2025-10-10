"use client";

import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Input } from "@/components/ui/input";

export const title = "Empty with Input Action";

const Example = () => (
  <Empty>
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <Mail />
      </EmptyMedia>
      <EmptyTitle>Subscribe to our newsletter</EmptyTitle>
      <EmptyDescription>
        Get the latest updates and news delivered to your inbox.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <div className="flex w-full gap-2">
        <Input placeholder="Enter your email" type="email" />
        <Button>Subscribe</Button>
      </div>
    </EmptyContent>
  </Empty>
);

export default Example;
