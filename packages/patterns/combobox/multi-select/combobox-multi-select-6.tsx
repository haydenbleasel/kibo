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

export const title = "With Max Selections Limit";

const interests = [
  { value: "technology", label: "Technology" },
  { value: "science", label: "Science" },
  { value: "art", label: "Art" },
  { value: "music", label: "Music" },
  { value: "sports", label: "Sports" },
  { value: "travel", label: "Travel" },
];

const MAX_SELECTIONS = 3;

const Example = () => {
  const [open, setOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const isMaxReached = selectedValues.length >= MAX_SELECTIONS;

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <Button
          aria-expanded={open}
          className="w-[250px] justify-between"
          role="combobox"
          variant="outline"
        >
          {selectedValues.length > 0 ? (
            <span>
              {selectedValues.length}/{MAX_SELECTIONS} selected
            </span>
          ) : (
            "Select interests..."
          )}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Search interests..." />
          <CommandList>
            <CommandEmpty>No interest found.</CommandEmpty>
            {isMaxReached && (
              <div className="p-2 text-center text-muted-foreground text-xs">
                Maximum {MAX_SELECTIONS} selections reached
              </div>
            )}
            <CommandGroup>
              {interests.map((interest) => {
                const isSelected = selectedValues.includes(interest.value);
                const isDisabled = !isSelected && isMaxReached;

                return (
                  <CommandItem
                    className={cn(isDisabled && "opacity-50")}
                    disabled={isDisabled}
                    key={interest.value}
                    onSelect={(currentValue) => {
                      if (isDisabled) {
                        return;
                      }
                      setSelectedValues(
                        selectedValues.includes(currentValue)
                          ? selectedValues.filter((v) => v !== currentValue)
                          : [...selectedValues, currentValue]
                      );
                    }}
                    value={interest.value}
                  >
                    <Check
                      className={cn(
                        "mr-2 size-4",
                        isSelected ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {interest.label}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Example;
