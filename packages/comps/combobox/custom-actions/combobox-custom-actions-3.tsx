"use client";

import { Check, ChevronsUpDown, Clock } from "lucide-react";
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

export const title = "Recent Selections Section";

const allFiles = [
  { value: "file-1", label: "README.md" },
  { value: "file-2", label: "package.json" },
  { value: "file-3", label: "tsconfig.json" },
  { value: "file-4", label: "index.tsx" },
  { value: "file-5", label: "App.tsx" },
];

const recentFiles = [
  { value: "file-2", label: "package.json" },
  { value: "file-4", label: "index.tsx" },
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
            ? allFiles.find((file) => file.value === value)?.label
            : "Select file..."}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Search files..." />
          <CommandList>
            <CommandEmpty>No file found.</CommandEmpty>
            <CommandGroup heading="Recent">
              {recentFiles.map((file) => (
                <CommandItem
                  key={file.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  value={file.value}
                >
                  <Check
                    className={cn(
                      "mr-2 size-4",
                      value === file.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <Clock className="mr-2 size-3 opacity-50" />
                  {file.label}
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="All Files">
              {allFiles
                .filter(
                  (file) =>
                    !recentFiles.find((recent) => recent.value === file.value)
                )
                .map((file) => (
                  <CommandItem
                    key={file.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                    value={file.value}
                  >
                    <Check
                      className={cn(
                        "mr-2 size-4",
                        value === file.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {file.label}
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
