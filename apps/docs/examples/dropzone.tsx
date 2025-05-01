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
      maxSize={1024 * 1024 * 10}
      minSize={1024}
      maxFiles={10}
      accept={{ 'image/*': [] }}
      onDrop={handleDrop}
      src={files}
      onError={console.error}
    >
      <DropzoneEmptyState />
      <DropzoneContent />
    </Dropzone>
  );
};

export default Example;
