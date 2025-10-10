"use client";

import { Check, ChevronsUpDown, Star } from "lucide-react";
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

export const title = "Favorites + All Items";

const favoriteTools = [
  { value: "vscode", label: "VS Code" },
  { value: "figma", label: "Figma" },
];

const allTools = [
  { value: "vscode", label: "VS Code" },
  { value: "figma", label: "Figma" },
  { value: "slack", label: "Slack" },
  { value: "notion", label: "Notion" },
  { value: "github", label: "GitHub" },
  { value: "linear", label: "Linear" },
];

const Example = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

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
            ? allTools.find((item) => item.value === value)?.label
            : "Select tool..."}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Search tools..." />
          <CommandList>
            <CommandEmpty>No tool found.</CommandEmpty>
            <CommandGroup heading="Favorites">
              {favoriteTools.map((item) => (
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
                  <Star className="mr-2 size-3 fill-yellow-400 text-yellow-400" />
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="All Tools">
              {allTools
                .filter(
                  (item) =>
                    !favoriteTools.find((fav) => fav.value === item.value)
                )
                .map((item) => (
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
