"use client";

import { Link, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export const title = "Empty with Multiple Actions";

const Example = () => (
  <Empty>
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <Upload />
      </EmptyMedia>
      <EmptyTitle>No files uploaded</EmptyTitle>
      <EmptyDescription>
        Upload files from your computer or import from a URL.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <div className="flex gap-2">
        <Button>
          <Upload />
          Upload File
        </Button>
        <Button variant="outline">
          <Link />
          Import from URL
        </Button>
      </div>
    </EmptyContent>
  </Empty>
);

export default Example;
