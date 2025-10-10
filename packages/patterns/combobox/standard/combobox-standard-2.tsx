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

export const title = "With Default Selected Value";

const languages = [
  { value: "en", label: "English" },
  { value: "es", label: "Spanish" },
  { value: "fr", label: "French" },
  { value: "de", label: "German" },
  { value: "it", label: "Italian" },
];

const Example = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("en");

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <Button
          aria-expanded={open}
          className="w-[200px] justify-between"
          role="combobox"
          variant="outline"
        >
          {value
            ? languages.find((language) => language.value === value)?.label
            : "Select language..."}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search language..." />
          <CommandList>
            <CommandEmpty>No language found.</CommandEmpty>
            <CommandGroup>
              {languages.map((language) => (
                <CommandItem
                  key={language.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  value={language.value}
                >
                  <Check
                    className={cn(
                      "mr-2 size-4",
                      value === language.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {language.label}
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
