'use client';

import { Cropper } from '@repo/image-crop';
import { Button } from '@repo/shadcn-ui/components/ui/button';
import { Input } from '@repo/shadcn-ui/components/ui/input';
import Image from 'next/image';
import { useState } from 'react';

const Example = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setCroppedImage(null);
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setCroppedImage(null);
  };

  if (!selectedFile) {
    return (
      <Input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="w-fit"
      />
    );
  }

  if (croppedImage) {
    return (
      <Image
        src={croppedImage}
        alt="Cropped"
        width={100}
        height={100}
        unoptimized
      />
    );
  }

  return (
    <div className="space-y-4">
      <div className="max-w-md">
        <Cropper
          file={selectedFile}
          aspect={1}
          circularCrop={false}
          maxImageSize={1024 * 1024} // 1MB
          onChange={console.log}
          onComplete={console.log}
          onCrop={setCroppedImage}
        />
      </div>

      <div className="flex gap-2">
        <Button type="button">Crop Image</Button>
        <Button type="button" onClick={handleReset} variant="outline">
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Example;
