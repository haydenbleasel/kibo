'use client';

import {
  ImageCrop,
  ImageCropApply,
  ImageCropContent,
  ImageCropReset,
} from '@repo/image-crop';
import { Button } from '@repo/shadcn-ui/components/ui/button';
import { Input } from '@repo/shadcn-ui/components/ui/input';
import { XIcon } from 'lucide-react';
import Image from 'next/image';
import { type ChangeEvent, useState } from 'react';

const Example = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
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
      <div className="space-y-4">
        <Image
          src={croppedImage}
          alt="Cropped"
          width={100}
          height={100}
          unoptimized
          className="overflow-hidden rounded-full"
        />
        <Button type="button" onClick={handleReset} variant="ghost" size="icon">
          <XIcon className="size-4" />
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <ImageCrop
        file={selectedFile}
        aspect={1}
        circularCrop
        maxImageSize={1024 * 1024} // 1MB
        onChange={console.log}
        onComplete={console.log}
        onCrop={setCroppedImage}
      >
        <ImageCropContent className="max-w-md" />
        <div className="flex items-center gap-2">
          <ImageCropApply />
          <ImageCropReset />
          <Button
            type="button"
            onClick={handleReset}
            variant="ghost"
            size="icon"
          >
            <XIcon className="size-4" />
          </Button>
        </div>
      </ImageCrop>
    </div>
  );
};

export default Example;
