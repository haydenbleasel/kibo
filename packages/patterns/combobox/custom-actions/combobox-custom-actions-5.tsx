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

export const title = "With Quick Filters";

const items = [
  { value: "item-1", label: "Bug Report", category: "bug" },
  { value: "item-2", label: "Feature Request", category: "feature" },
  { value: "item-3", label: "Documentation", category: "docs" },
  { value: "item-4", label: "Critical Bug", category: "bug" },
  { value: "item-5", label: "New Feature", category: "feature" },
];

const Example = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [filter, setFilter] = useState<string | null>(null);

  const filteredItems = filter
    ? items.filter((item) => item.category === filter)
    : items;

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
            ? items.find((item) => item.value === value)?.label
            : "Select item..."}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Search items..." />
          <div className="flex gap-1 border-b p-2">
            <Badge
              className="cursor-pointer text-xs"
              onClick={() => setFilter(null)}
              variant={filter === null ? "default" : "outline"}
            >
              All
            </Badge>
            <Badge
              className="cursor-pointer text-xs"
              onClick={() => setFilter("bug")}
              variant={filter === "bug" ? "default" : "outline"}
            >
              Bugs
            </Badge>
            <Badge
              className="cursor-pointer text-xs"
              onClick={() => setFilter("feature")}
              variant={filter === "feature" ? "default" : "outline"}
            >
              Features
            </Badge>
            <Badge
              className="cursor-pointer text-xs"
              onClick={() => setFilter("docs")}
              variant={filter === "docs" ? "default" : "outline"}
            >
              Docs
            </Badge>
          </div>
          <CommandList>
            <CommandEmpty>No item found.</CommandEmpty>
            <CommandGroup>
              {filteredItems.map((item) => (
                <CommandItem
                  key={item.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  value={item.value}
                >
                  <Check
                    className={cn(
                      "mr-2 size-4",
                      value === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {item.label}
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
