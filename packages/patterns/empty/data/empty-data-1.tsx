"use client";

import { Plus, Table } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export const title = "Empty Table";

const Example = () => (
  <Empty>
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <Table />
      </EmptyMedia>
      <EmptyTitle>No data to display</EmptyTitle>
      <EmptyDescription>
        There are no records in this table yet. Add your first entry to get
        started.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <Button>
        <Plus />
        Add Entry
      </Button>
    </EmptyContent>
  </Empty>
);

export default Example;
