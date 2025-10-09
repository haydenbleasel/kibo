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

export const title = "With Item Count in Trigger";

const skills = [
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "python", label: "Python" },
  { value: "rust", label: "Rust" },
  { value: "go", label: "Go" },
  { value: "java", label: "Java" },
];

const Example = () => {
  const [open, setOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([
    "javascript",
    "typescript",
  ]);

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <Button
          aria-expanded={open}
          className="w-[200px] justify-between"
          role="combobox"
          variant="outline"
        >
          {selectedValues.length > 0 ? (
            <span>
              {selectedValues.length} skill
              {selectedValues.length > 1 ? "s" : ""} selected
            </span>
          ) : (
            "Select skills..."
          )}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search skills..." />
          <CommandList>
            <CommandEmpty>No skill found.</CommandEmpty>
            <CommandGroup>
              {skills.map((skill) => (
                <CommandItem
                  key={skill.value}
                  onSelect={(currentValue) => {
                    setSelectedValues(
                      selectedValues.includes(currentValue)
                        ? selectedValues.filter((v) => v !== currentValue)
                        : [...selectedValues, currentValue]
                    );
                  }}
                  value={skill.value}
                >
                  <Check
                    className={cn(
                      "mr-2 size-4",
                      selectedValues.includes(skill.value)
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {skill.label}
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
