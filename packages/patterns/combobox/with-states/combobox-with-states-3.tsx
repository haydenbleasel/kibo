"use client";

import { Check, ChevronsUpDown, Inbox, Plus } from "lucide-react";
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

export const title = "Empty State with Action";

const Example = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [items, setItems] = useState<string[]>([]);

  const handleCreate = () => {
    setItems(["New Item 1", "New Item 2", "New Item 3"]);
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
          {value || "Select item..."}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Search items..." />
          <CommandList>
            {items.length === 0 ? (
              <div className="flex flex-col items-center gap-3 p-6 text-center">
                <Inbox className="size-12 text-muted-foreground" />
                <div>
                  <p className="font-medium text-sm">No items yet</p>
                  <p className="text-muted-foreground text-xs">
                    Get started by creating your first item
                  </p>
                </div>
                <Button className="w-full" onClick={handleCreate} size="sm">
                  <Plus className="mr-2 size-4" />
                  Create Item
                </Button>
              </div>
            ) : (
              <>
                <CommandEmpty>No results found.</CommandEmpty>
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
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Example;
