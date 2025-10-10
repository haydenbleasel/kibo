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
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export const title = "Categories with Separators";

const categories = {
  primary: [
    { value: "home", label: "Home" },
    { value: "dashboard", label: "Dashboard" },
  ],
  secondary: [
    { value: "settings", label: "Settings" },
    { value: "profile", label: "Profile" },
  ],
  other: [
    { value: "help", label: "Help" },
    { value: "logout", label: "Logout" },
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
            ? Object.values(categories)
                .flat()
                .find((item) => item.value === value)?.label
            : "Select page..."}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>No page found.</CommandEmpty>
            <CommandGroup>
              {categories.primary.map((item) => (
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
            <CommandSeparator />
            <CommandGroup>
              {categories.secondary.map((item) => (
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
            <CommandSeparator />
            <CommandGroup>
              {categories.other.map((item) => (
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
