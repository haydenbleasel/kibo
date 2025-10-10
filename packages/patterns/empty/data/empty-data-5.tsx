"use client";

import { FileText, Plus, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export const title = "No Files";

const Example = () => (
  <Empty>
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <FileText />
      </EmptyMedia>
      <EmptyTitle>No files uploaded</EmptyTitle>
      <EmptyDescription>
        This folder is empty. Upload files or create new documents to get
        started.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <div className="flex gap-2">
        <Button>
          <Upload />
          Upload Files
        </Button>
        <Button variant="outline">
          <Plus />
          Create Document
        </Button>
      </div>
    </EmptyContent>
  </Empty>
);

export default Example;
