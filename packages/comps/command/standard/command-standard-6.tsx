import { ArrowRight, Copy, Download, Share, Star, Trash } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command";

export const title = "Command Actions Menu";

const Example = () => (
  <Command className="h-auto w-full max-w-lg rounded-lg border shadow-md">
    <CommandInput placeholder="Search actions..." />
    <CommandList>
      <CommandEmpty>No actions found.</CommandEmpty>
      <CommandGroup heading="Quick Actions">
        <CommandItem>
          <ArrowRight />
          <span>Open</span>
          <CommandShortcut>↵</CommandShortcut>
        </CommandItem>
        <CommandItem>
          <Copy />
          <span>Copy</span>
          <CommandShortcut>⌘C</CommandShortcut>
        </CommandItem>
        <CommandItem>
          <Star />
          <span>Add to Favorites</span>
          <CommandShortcut>⌘D</CommandShortcut>
        </CommandItem>
      </CommandGroup>
      <CommandGroup heading="File Actions">
        <CommandItem>
          <Download />
          <span>Download</span>
          <CommandShortcut>⌘⇧D</CommandShortcut>
        </CommandItem>
        <CommandItem>
          <Share />
          <span>Share</span>
          <CommandShortcut>⌘⇧S</CommandShortcut>
        </CommandItem>
        <CommandItem>
          <Trash />
          <span>Delete</span>
          <CommandShortcut>⌘⌫</CommandShortcut>
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
);

export default Example;
