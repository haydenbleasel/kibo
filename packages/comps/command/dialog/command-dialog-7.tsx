"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export const title = "Command Dialog with Status Indicators";

const Example = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>View Services</Button>
      <CommandDialog onOpenChange={setOpen} open={open}>
        <CommandInput placeholder="Search services..." />
        <CommandList>
          <CommandEmpty>No services found.</CommandEmpty>
          <CommandGroup heading="Services">
            <CommandItem>
              <div className="size-3 rounded-full bg-green-500 text-green-500" />
              <span>API Server</span>
              <span className="ml-auto text-muted-foreground text-xs">
                Running
              </span>
            </CommandItem>
            <CommandItem>
              <div className="size-3 rounded-full bg-green-500 text-green-500" />
              <span>Database</span>
              <span className="ml-auto text-muted-foreground text-xs">
                Running
              </span>
            </CommandItem>
            <CommandItem>
              <div className="size-3 rounded-full bg-yellow-500 text-yellow-500" />
              <span>Cache Server</span>
              <span className="ml-auto text-muted-foreground text-xs">
                Warning
              </span>
            </CommandItem>
            <CommandItem>
              <div className="size-3 rounded-full bg-red-500 text-red-500" />
              <span>Queue Worker</span>
              <span className="ml-auto text-muted-foreground text-xs">
                Stopped
              </span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default Example;
