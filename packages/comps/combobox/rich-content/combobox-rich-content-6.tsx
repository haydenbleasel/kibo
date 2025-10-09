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

export const title = "Color-Coded Items";

const labels = [
  { value: "bug", label: "Bug", color: "bg-red-500" },
  { value: "feature", label: "Feature", color: "bg-blue-500" },
  { value: "improvement", label: "Improvement", color: "bg-green-500" },
  { value: "documentation", label: "Documentation", color: "bg-purple-500" },
  { value: "question", label: "Question", color: "bg-yellow-500" },
];

const Example = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <Button
          aria-expanded={open}
          className="w-[250px] justify-between"
          role="combobox"
          variant="outline"
        >
          {value ? (
            <div className="flex items-center gap-2">
              <div
                className={cn(
                  "size-3 rounded-full",
                  labels.find((label) => label.value === value)?.color
                )}
              />
              {labels.find((label) => label.value === value)?.label}
            </div>
          ) : (
            "Select label..."
          )}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Search labels..." />
          <CommandList>
            <CommandEmpty>No label found.</CommandEmpty>
            <CommandGroup>
              {labels.map((label) => (
                <CommandItem
                  key={label.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  value={label.value}
                >
                  <Check
                    className={cn(
                      "mr-2 size-4",
                      value === label.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <div
                    className={cn("mr-2 size-3 rounded-full", label.color)}
                  />
                  {label.label}
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
