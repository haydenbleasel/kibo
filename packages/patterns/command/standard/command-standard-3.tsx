import { File, Folder, Image, Music, Video } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

export const title = "Command with Separators";

const Example = () => (
  <Command className="h-auto w-full max-w-lg rounded-lg border shadow-md">
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
  </Command>
);

export default Example;
