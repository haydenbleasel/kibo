"use client";

import { Dropzone, DropzoneContent, DropzoneEmptyState } from "@repo/dropzone";
import { useState } from "react";

const Example = () => {
  const [files, setFiles] = useState<File[] | undefined>();

  const handleDrop = (files: File[]) => {
    console.log(files);
    setFiles(files);
  };

  return (
    <Dropzone
      accept={{ "image/*": [] }}
      onDrop={handleDrop}
      onError={console.error}
      src={files}
    >
      <DropzoneEmptyState />
      <DropzoneContent />
    </Dropzone>
  );
};

export default Example;
