'use client';

import { Dropzone, DropzoneContent, DropzoneEmptyState } from '@repo/dropzone';
import { useState } from 'react';

const Example = () => {
  const [files, setFiles] = useState<File[] | undefined>();

  const handleDrop = (files: File[]) => {
    console.log(files);
    setFiles(files);
  };

  return (
    <Dropzone
      onDrop={handleDrop}
      src={files}
      minSize={1024}
      maxSize={1024 * 1024 * 10}
      onError={console.error}
    >
      <DropzoneEmptyState />
      <DropzoneContent />
    </Dropzone>
  );
};

export default Example;
