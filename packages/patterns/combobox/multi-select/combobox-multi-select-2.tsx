"use client";

import { Check, ChevronsUpDown } from "lucide-react";
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

export const title = "With Select All Option";

const permissions = [
  { value: "read", label: "Read" },
  { value: "write", label: "Write" },
  { value: "delete", label: "Delete" },
  { value: "admin", label: "Admin" },
];

const Example = () => {
  const [open, setOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const allSelected = selectedValues.length === permissions.length;

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <Button
          aria-expanded={open}
          className="w-[250px] justify-between"
          role="combobox"
          variant="outline"
        >
          {selectedValues.length > 0
            ? `${selectedValues.length} permission(s) selected`
            : "Select permissions..."}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Search permissions..." />
          <CommandList>
            <CommandEmpty>No permission found.</CommandEmpty>
            <CommandGroup>
              <CommandItem
                onSelect={() => {
                  if (allSelected) {
                    setSelectedValues([]);
                  } else {
                    setSelectedValues(permissions.map((p) => p.value));
                  }
                }}
              >
                <Check
                  className={cn(
                    "mr-2 size-4",
                    allSelected ? "opacity-100" : "opacity-0"
                  )}
                />
                <span className="font-medium">Select All</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup>
              {permissions.map((permission) => (
                <CommandItem
                  key={permission.value}
                  onSelect={(currentValue) => {
                    setSelectedValues(
                      selectedValues.includes(currentValue)
                        ? selectedValues.filter((v) => v !== currentValue)
                        : [...selectedValues, currentValue]
                    );
                  }}
                  value={permission.value}
                >
                  <Check
                    className={cn(
                      "mr-2 size-4",
                      selectedValues.includes(permission.value)
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {permission.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Example;
