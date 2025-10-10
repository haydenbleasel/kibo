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
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export const title = "Small Size Variant";

const statuses = [
  { value: "todo", label: "To Do" },
  { value: "in-progress", label: "In Progress" },
  { value: "done", label: "Done" },
  { value: "canceled", label: "Canceled" },
];

const Example = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <Button
          aria-expanded={open}
          className="h-8 w-[150px] justify-between text-xs"
          role="combobox"
          variant="outline"
        >
          {value
            ? statuses.find((status) => status.value === value)?.label
            : "Select status..."}
          <ChevronsUpDown className="ml-2 size-3 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[150px] p-0">
        <Command>
          <CommandInput
            className="h-8 text-xs"
            placeholder="Search status..."
          />
          <CommandList>
            <CommandEmpty>No status found.</CommandEmpty>
            <CommandGroup>
              {statuses.map((status) => (
                <CommandItem
                  className="text-xs"
                  key={status.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  value={status.value}
                >
                  <Check
                    className={cn(
                      "mr-2 size-3",
                      value === status.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {status.label}
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
