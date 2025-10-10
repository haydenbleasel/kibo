"use client";

import { File, Folder, Image, Music, Video } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

export const title = "Command Dialog with Separators";

const Example = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Search Files</Button>
      <CommandDialog onOpenChange={setOpen} open={open}>
        <CommandInput placeholder="Search files..." />
        <CommandList>
          <CommandEmpty>No files found.</CommandEmpty>
          <CommandGroup heading="Recent">
            <CommandItem>
              <File />
              <span>Document.pdf</span>
            </CommandItem>
            <CommandItem>
              <Image />
              <span>Photo.jpg</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Folders">
            <CommandItem>
              <Folder />
              <span>Projects</span>
            </CommandItem>
            <CommandItem>
              <Folder />
              <span>Documents</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Media">
            <CommandItem>
              <Video />
              <span>Video.mp4</span>
            </CommandItem>
            <CommandItem>
              <Music />
              <span>Song.mp3</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default Example;
