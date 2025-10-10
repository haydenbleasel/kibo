import { File, Folder, Image, Music, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const title = "Command Popover with Separators";

const Example = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Search Files</Button>
    </PopoverTrigger>
    <PopoverContent align="start" className="w-[400px] p-0">
      <Command>
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
    </PopoverContent>
  </Popover>
);

export default Example;
