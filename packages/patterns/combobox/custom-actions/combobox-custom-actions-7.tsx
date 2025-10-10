"use client";

import { Check, ChevronsUpDown, X } from "lucide-react";
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

export const title = "Clear/Reset Button";

const themes = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
];

const Example = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("system");

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
            ? themes.find((theme) => theme.value === value)?.label
            : "Select theme..."}
          <div className="ml-2 flex items-center gap-1">
            {value && (
              <button
                className="rounded-sm hover:bg-accent"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setValue("");
                }}
              >
                <X className="size-4 opacity-50 hover:opacity-100" />
              </button>
            )}
            <ChevronsUpDown className="size-4 shrink-0 opacity-50" />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search themes..." />
          <CommandList>
            <CommandEmpty>No theme found.</CommandEmpty>
            <CommandGroup>
              {themes.map((theme) => (
                <CommandItem
                  key={theme.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  value={theme.value}
                >
                  <Check
                    className={cn(
                      "mr-2 size-4",
                      value === theme.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {theme.label}
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
