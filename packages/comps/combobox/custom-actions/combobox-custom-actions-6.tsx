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

export const title = "Keyboard Shortcuts Displayed";

const commands = [
  { value: "copy", label: "Copy", shortcut: "⌘C" },
  { value: "paste", label: "Paste", shortcut: "⌘V" },
  { value: "cut", label: "Cut", shortcut: "⌘X" },
  { value: "undo", label: "Undo", shortcut: "⌘Z" },
  { value: "redo", label: "Redo", shortcut: "⌘⇧Z" },
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
            ? commands.find((cmd) => cmd.value === value)?.label
            : "Select command..."}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Search commands..." />
          <CommandList>
            <CommandEmpty>No command found.</CommandEmpty>
            <CommandGroup>
              {commands.map((cmd) => (
                <CommandItem
                  className="flex items-center justify-between"
                  key={cmd.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  value={cmd.value}
                >
                  <div className="flex items-center">
                    <Check
                      className={cn(
                        "mr-2 size-4",
                        value === cmd.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {cmd.label}
                  </div>
                  <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-medium font-mono text-muted-foreground text-xs opacity-100">
                    {cmd.shortcut}
                  </kbd>
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
