'use client';

import { Dropzone, DropzoneContent, DropzoneEmptyState } from '@repo/dropzone';
import { useState } from 'react';

const Example = () => {
  const [files, setFiles] = useState<File[] | undefined>();
  const [filePreview, setFilePreview] = useState<string | undefined>();

  const handleDrop = (files: File[]) => {
    console.log(files);
    setFiles(files);

    if (files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (typeof e.target?.result === 'string') {
          setFilePreview(e.target?.result);
        }
      };
      reader.readAsDataURL(files[0]);
    }
  };

  return (
    <Dropzone
      onDrop={handleDrop}
      src={files}
      onError={console.error}
      accept={{ 'image/*': ['.png', '.jpg', '.jpeg'] }}
    >
      <DropzoneEmptyState />
      <DropzoneContent>
        {filePreview && (
          <div className="h-[102px] w-full">
            <img
              src={filePreview}
              alt="Preview"
              className="absolute top-0 left-0 h-full w-full object-cover"
            />
          </div>
        )}
      </DropzoneContent>
    </Dropzone>
  );
};

export default Example;
