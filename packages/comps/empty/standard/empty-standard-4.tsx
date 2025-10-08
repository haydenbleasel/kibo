"use client";

import { FolderOpen } from "lucide-react";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export const title = "Empty with Large Icon";

const Example = () => (
  <Empty>
    <EmptyHeader>
      <EmptyMedia>
        <FolderOpen className="h-16 w-16 text-muted-foreground" />
      </EmptyMedia>
      <EmptyTitle>This folder is empty</EmptyTitle>
      <EmptyDescription>
        Start by adding files or creating new folders.
      </EmptyDescription>
    </EmptyHeader>
  </Empty>
);

export default Example;
