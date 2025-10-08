"use client";

import { ArrowRight, Copy, Download, Share, Star, Trash } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command";

export const title = "Command Dialog Actions Menu";

const Example = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Quick Actions</Button>
      <CommandDialog onOpenChange={setOpen} open={open}>
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
      </CommandDialog>
    </>
  );
};

export default Example;
