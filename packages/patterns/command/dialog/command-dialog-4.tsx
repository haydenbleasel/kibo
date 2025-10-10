"use client";

import { Code, Database, FileText, Package } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export const title = "Command Dialog with Badges";

const Example = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Browse Components</Button>
      <CommandDialog onOpenChange={setOpen} open={open}>
        <CommandInput placeholder="Search components..." />
        <CommandList>
          <CommandEmpty>No components found.</CommandEmpty>
          <CommandGroup heading="Components">
            <CommandItem>
              <FileText />
              <span>Button</span>
              <Badge className="ml-auto" variant="secondary">
                Stable
              </Badge>
            </CommandItem>
            <CommandItem>
              <Code />
              <span>Input</span>
              <Badge className="ml-auto" variant="secondary">
                Stable
              </Badge>
            </CommandItem>
            <CommandItem>
              <Database />
              <span>Table</span>
              <Badge className="ml-auto" variant="outline">
                Beta
              </Badge>
            </CommandItem>
            <CommandItem>
              <Package />
              <span>DataGrid</span>
              <Badge className="ml-auto" variant="outline">
                Beta
              </Badge>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default Example;
