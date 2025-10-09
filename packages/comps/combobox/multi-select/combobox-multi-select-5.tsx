"use client";

import { Check, ChevronsUpDown, X } from "lucide-react";
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

export const title = "With Clear All Functionality";

const colors = [
  { value: "red", label: "Red" },
  { value: "blue", label: "Blue" },
  { value: "green", label: "Green" },
  { value: "yellow", label: "Yellow" },
  { value: "purple", label: "Purple" },
];

const Example = () => {
  const [open, setOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([
    "red",
    "blue",
  ]);

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
            ? `${selectedValues.length} color(s) selected`
            : "Select colors..."}
          <div className="ml-2 flex items-center gap-2">
            {selectedValues.length > 0 && (
              <button
                className="rounded-full hover:bg-accent"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedValues([]);
                }}
              >
                <X className="size-4 opacity-50 hover:opacity-100" />
              </button>
            )}
            <ChevronsUpDown className="size-4 shrink-0 opacity-50" />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Search colors..." />
          <CommandList>
            <CommandEmpty>No color found.</CommandEmpty>
            <CommandGroup>
              {colors.map((color) => (
                <CommandItem
                  key={color.value}
                  onSelect={(currentValue) => {
                    setSelectedValues(
                      selectedValues.includes(currentValue)
                        ? selectedValues.filter((v) => v !== currentValue)
                        : [...selectedValues, currentValue]
                    );
                  }}
                  value={color.value}
                >
                  <Check
                    className={cn(
                      "mr-2 size-4",
                      selectedValues.includes(color.value)
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {color.label}
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
