"use client";

import { Check, ChevronsUpDown, X } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
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

export const title = "Multiple Items with Badges";

const tags = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "solid", label: "Solid" },
];

const Example = () => {
  const [open, setOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <Button
          aria-expanded={open}
          className="w-full justify-between"
          role="combobox"
          variant="outline"
        >
          <div className="flex flex-wrap gap-1">
            {selectedValues.length > 0 ? (
              selectedValues.map((value) => (
                <Badge className="mr-1" key={value} variant="secondary">
                  {tags.find((tag) => tag.value === value)?.label}
                  <button
                    className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    onClick={() =>
                      setSelectedValues(
                        selectedValues.filter((v) => v !== value)
                      )
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        setSelectedValues(
                          selectedValues.filter((v) => v !== value)
                        );
                      }
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                  >
                    <X className="size-3 text-muted-foreground hover:text-foreground" />
                  </button>
                </Badge>
              ))
            ) : (
              <span className="text-muted-foreground">Select tags...</span>
            )}
          </div>
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search tags..." />
          <CommandList>
            <CommandEmpty>No tag found.</CommandEmpty>
            <CommandGroup>
              {tags.map((tag) => (
                <CommandItem
                  key={tag.value}
                  onSelect={(currentValue) => {
                    setSelectedValues(
                      selectedValues.includes(currentValue)
                        ? selectedValues.filter((v) => v !== currentValue)
                        : [...selectedValues, currentValue]
                    );
                  }}
                  value={tag.value}
                >
                  <Check
                    className={cn(
                      "mr-2 size-4",
                      selectedValues.includes(tag.value)
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {tag.label}
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
