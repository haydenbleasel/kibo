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

export const title = "Full Width Variant";

const countries = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "ca", label: "Canada" },
  { value: "au", label: "Australia" },
  { value: "de", label: "Germany" },
];

const Example = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="w-full">
      <Popover onOpenChange={setOpen} open={open}>
        <PopoverTrigger asChild>
          <Button
            aria-expanded={open}
            className="w-full justify-between"
            role="combobox"
            variant="outline"
          >
            {value
              ? countries.find((country) => country.value === value)?.label
              : "Select country..."}
            <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search country..." />
            <CommandList>
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup>
                {countries.map((country) => (
                  <CommandItem
                    key={country.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                    value={country.value}
                  >
                    <Check
                      className={cn(
                        "mr-2 size-4",
                        value === country.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {country.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Example;
