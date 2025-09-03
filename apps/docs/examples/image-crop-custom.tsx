"use client";

import {
  ImageCrop,
  ImageCropApply,
  ImageCropContent,
  ImageCropReset,
} from "@repo/image-crop";
import { Button } from "@repo/shadcn-ui/components/ui/button";
import { Input } from "@repo/shadcn-ui/components/ui/input";
import Image from "next/image";
import { type ChangeEvent, useState } from "react";

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
        accept="image/*"
        className="w-fit max-w-full"
        onChange={handleFileChange}
        type="file"
      />
    );
  }

  if (croppedImage) {
    return (
      <div className="space-y-4">
        <Image
          alt="Cropped"
          height={100}
          src={croppedImage}
          unoptimized
          width={100}
        />
        <Button onClick={handleReset} size="sm" type="button" variant="outline">
          Start Over
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <ImageCrop
        aspect={1}
        file={selectedFile}
        maxImageSize={1024 * 1024} // 1MB
        onChange={console.log}
        onComplete={console.log}
        onCrop={setCroppedImage}
      >
        <ImageCropContent className="max-w-md" />
        <div className="flex items-center gap-2">
          <ImageCropApply asChild>
            <Button size="sm" variant="outline">
              Apply Crop
            </Button>
          </ImageCropApply>
          <ImageCropReset asChild>
            <Button size="sm" variant="outline">
              Reset
            </Button>
          </ImageCropReset>
          <Button
            onClick={handleReset}
            size="sm"
            type="button"
            variant="outline"
          >
            Start Over
          </Button>
        </div>
      </ImageCrop>
    </div>
  );
};

export default Example;
