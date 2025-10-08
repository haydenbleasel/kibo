"use client";

import { Mail, MapPin, Phone, User } from "lucide-react";
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

export const title = "Command Dialog with Descriptions";

const Example = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Search Contacts</Button>
      <CommandDialog onOpenChange={setOpen} open={open}>
        <CommandInput placeholder="Search contacts..." />
        <CommandList>
          <CommandEmpty>No contacts found.</CommandEmpty>
          <CommandGroup heading="Contacts">
            <CommandItem>
              <User />
              <div className="flex flex-col">
                <span>John Doe</span>
                <span className="text-muted-foreground text-xs">
                  Software Engineer
                </span>
              </div>
            </CommandItem>
            <CommandItem>
              <Mail />
              <div className="flex flex-col">
                <span>jane@example.com</span>
                <span className="text-muted-foreground text-xs">Email</span>
              </div>
            </CommandItem>
            <CommandItem>
              <Phone />
              <div className="flex flex-col">
                <span>+1 (555) 123-4567</span>
                <span className="text-muted-foreground text-xs">Mobile</span>
              </div>
            </CommandItem>
            <CommandItem>
              <MapPin />
              <div className="flex flex-col">
                <span>San Francisco, CA</span>
                <span className="text-muted-foreground text-xs">Location</span>
              </div>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default Example;
