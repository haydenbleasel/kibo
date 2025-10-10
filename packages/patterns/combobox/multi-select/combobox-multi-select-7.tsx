"use client";

import { Check, ChevronsUpDown } from "lucide-react";
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

export const title = "Selected Items List Below";

const topics = [
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "devops", label: "DevOps" },
  { value: "design", label: "Design" },
  { value: "mobile", label: "Mobile" },
];

const Example = () => {
  const [open, setOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([
    "frontend",
    "backend",
  ]);

  return (
    <div className="space-y-2">
      <Popover onOpenChange={setOpen} open={open}>
        <PopoverTrigger asChild>
          <Button
            aria-expanded={open}
            className="w-[250px] justify-between"
            role="combobox"
            variant="outline"
          >
            {selectedValues.length > 0
              ? `${selectedValues.length} topic(s) selected`
              : "Select topics..."}
            <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[250px] p-0">
          <Command>
            <CommandInput placeholder="Search topics..." />
            <CommandList>
              <CommandEmpty>No topic found.</CommandEmpty>
              <CommandGroup>
                {topics.map((topic) => (
                  <CommandItem
                    key={topic.value}
                    onSelect={(currentValue) => {
                      setSelectedValues(
                        selectedValues.includes(currentValue)
                          ? selectedValues.filter((v) => v !== currentValue)
                          : [...selectedValues, currentValue]
                      );
                    }}
                    value={topic.value}
                  >
                    <Check
                      className={cn(
                        "mr-2 size-4",
                        selectedValues.includes(topic.value)
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {topic.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {selectedValues.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {selectedValues.map((value) => (
            <Badge key={value} variant="secondary">
              {topics.find((topic) => topic.value === value)?.label}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};

export default Example;
