"use client";

import { Check, ChevronsUpDown, Plus } from "lucide-react";
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

export const title = "Create New Option Inline";

const Example = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [items, setItems] = useState(["Tag 1", "Tag 2", "Tag 3"]);
  const [search, setSearch] = useState("");

  const handleCreate = () => {
    if (search && !items.includes(search)) {
      setItems([...items, search]);
      setValue(search);
      setOpen(false);
      setSearch("");
    }
  };

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <Button
          aria-expanded={open}
          className="w-[250px] justify-between"
          role="combobox"
          variant="outline"
        >
          {value || "Select or create tag..."}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput
            onValueChange={setSearch}
            placeholder="Search or create..."
            value={search}
          />
          <CommandList>
            <CommandEmpty>
              <Button
                className="w-full justify-start"
                onClick={handleCreate}
                variant="ghost"
              >
                <Plus className="mr-2 size-4" />
                Create "{search}"
              </Button>
            </CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  value={item}
                >
                  <Check
                    className={cn(
                      "mr-2 size-4",
                      value === item ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {item}
                </CommandItem>
              ))}
            </CommandGroup>
            {search && !items.includes(search) && items.length > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem onSelect={handleCreate}>
                    <Plus className="mr-2 size-4" />
                    Create "{search}"
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Example;
