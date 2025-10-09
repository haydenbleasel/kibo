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

export const title = "Large Size Variant";

const priorities = [
  { value: "low", label: "Low Priority" },
  { value: "medium", label: "Medium Priority" },
  { value: "high", label: "High Priority" },
  { value: "urgent", label: "Urgent Priority" },
];

const Example = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <Button
          aria-expanded={open}
          className="h-12 w-[280px] justify-between text-base"
          role="combobox"
          variant="outline"
        >
          {value
            ? priorities.find((priority) => priority.value === value)?.label
            : "Select priority level..."}
          <ChevronsUpDown className="ml-2 size-5 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[280px] p-0">
        <Command>
          <CommandInput
            className="h-12 text-base"
            placeholder="Search priority..."
          />
          <CommandList>
            <CommandEmpty>No priority found.</CommandEmpty>
            <CommandGroup>
              {priorities.map((priority) => (
                <CommandItem
                  className="text-base"
                  key={priority.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  value={priority.value}
                >
                  <Check
                    className={cn(
                      "mr-2 size-5",
                      value === priority.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {priority.label}
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
