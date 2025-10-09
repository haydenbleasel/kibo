"use client";

import {
  Check,
  ChevronsUpDown,
  Chrome,
  Github,
  Smartphone,
} from "lucide-react";
import { createElement, useState } from "react";
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

export const title = "With Item Icons";

const platforms = [
  { value: "web", label: "Web", icon: Chrome },
  { value: "mobile", label: "Mobile", icon: Smartphone },
  { value: "github", label: "GitHub", icon: Github },
];

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
          {value ? (
            <span className="flex items-center gap-2">
              {createElement(
                platforms.find((platform) => platform.value === value)?.icon ||
                  Chrome,
                { className: "size-4" }
              )}
              {platforms.find((platform) => platform.value === value)?.label}
            </span>
          ) : (
            "Select platform..."
          )}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search platform..." />
          <CommandList>
            <CommandEmpty>No platform found.</CommandEmpty>
            <CommandGroup>
              {platforms.map((platform) => (
                <CommandItem
                  key={platform.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  value={platform.value}
                >
                  <Check
                    className={cn(
                      "mr-2 size-4",
                      value === platform.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <platform.icon className="mr-2 size-4" />
                  {platform.label}
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
