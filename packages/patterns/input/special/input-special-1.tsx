"use client";

import { FileText, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const title = "File Upload with List";

const Example = () => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="file-upload">Upload Files</Label>
      <Input
        className="bg-background"
        id="file-upload"
        multiple
        onChange={handleFileChange}
        type="file"
      />
      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((file, index) => (
            <div
              className="flex items-center justify-between rounded-md border p-2"
              key={index}
            >
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{file.name}</span>
                <span className="text-muted-foreground text-xs">
                  ({(file.size / 1024).toFixed(1)} KB)
                </span>
              </div>
              <Button
                className="h-6 w-6"
                onClick={() => removeFile(index)}
                size="icon"
                type="button"
                variant="ghost"
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Example;
