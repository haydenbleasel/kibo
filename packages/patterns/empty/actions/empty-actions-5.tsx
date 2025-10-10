"use client";

import { Upload, UserPlus, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export const title = "Empty with Stacked Actions";

const Example = () => (
  <Empty>
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <Users />
      </EmptyMedia>
      <EmptyTitle>No team members yet</EmptyTitle>
      <EmptyDescription>
        Invite team members to collaborate on your projects.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <Button className="w-full">
        <UserPlus />
        Invite Team Member
      </Button>
      <Button className="w-full" variant="outline">
        <Upload />
        Import from CSV
      </Button>
    </EmptyContent>
  </Empty>
);

export default Example;
