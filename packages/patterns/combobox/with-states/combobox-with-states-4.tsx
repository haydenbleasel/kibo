"use client";

import { Check, ChevronsUpDown, Search } from "lucide-react";
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

export const title = "No Results Variation";

const options = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

const Example = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <Button
          aria-expanded={open}
          className="w-[200px] justify-between"
          role="combobox"
          variant="outline"
        >
          {value || "Select fruit..."}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search fruits..." />
          <CommandList>
            <CommandEmpty>
              <div className="flex flex-col items-center gap-2 p-4 text-center">
                <Search className="size-8 text-muted-foreground" />
                <div>
                  <p className="font-medium text-sm">No results</p>
                  <p className="text-muted-foreground text-xs">
                    Try a different search term
                  </p>
                </div>
              </div>
            </CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  value={option}
                >
                  <Check
                    className={cn(
                      "mr-2 size-4",
                      value === option ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option}
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
