import { ArrowRight, Copy, Download, Share, Star, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const title = "Command Popover Actions Menu";

const Example = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Quick Actions</Button>
    </PopoverTrigger>
    <PopoverContent align="start" className="w-[400px] p-0">
      <Command>
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
    </PopoverContent>
  </Popover>
);

export default Example;
