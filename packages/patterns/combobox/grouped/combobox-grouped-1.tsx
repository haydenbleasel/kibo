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

export const title = "Multiple Groups with Labels";

const items = {
  frontend: [
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "angular", label: "Angular" },
  ],
  backend: [
    { value: "node", label: "Node.js" },
    { value: "python", label: "Python" },
    { value: "ruby", label: "Ruby" },
  ],
};

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
          {value
            ? Object.values(items)
                .flat()
                .find((item) => item.value === value)?.label
            : "Select technology..."}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>No technology found.</CommandEmpty>
            <CommandGroup heading="Frontend">
              {items.frontend.map((item) => (
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
            <CommandGroup heading="Backend">
              {items.backend.map((item) => (
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
