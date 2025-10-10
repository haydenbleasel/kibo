"use client";

import { Check, ChevronsUpDown, Settings } from "lucide-react";
import { useState } from "react";
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
import { cn } from "@/lib/utils";

export const title = "With Footer Actions";

const workspaces = [
  { value: "personal", label: "Personal Workspace" },
  { value: "team", label: "Team Workspace" },
  { value: "company", label: "Company Workspace" },
];

const Example = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("personal");

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <Button
          aria-expanded={open}
          className="w-[250px] justify-between"
          role="combobox"
          variant="outline"
        >
          {value
            ? workspaces.find((workspace) => workspace.value === value)?.label
            : "Select workspace..."}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Search workspaces..." />
          <CommandList>
            <CommandEmpty>No workspace found.</CommandEmpty>
            <CommandGroup>
              {workspaces.map((workspace) => (
                <CommandItem
                  key={workspace.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  value={workspace.value}
                >
                  <Check
                    className={cn(
                      "mr-2 size-4",
                      value === workspace.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {workspace.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          <CommandSeparator />
          <div className="p-1">
            <Button
              className="w-full justify-start text-xs"
              onClick={() => {
                alert("Opening workspace settings");
                setOpen(false);
              }}
              variant="ghost"
            >
              <Settings className="mr-2 size-3" />
              Manage Workspaces
            </Button>
          </div>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Example;
