"use client";

import { Check, ChevronsUpDown, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
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

export const title = "Async/Dynamic Search";

const Example = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<string[]>([]);

  useEffect(() => {
    if (!search) {
      setResults([]);
      return;
    }

    setIsSearching(true);
    const timer = setTimeout(() => {
      // Simulate API call
      setResults([
        `${search} - Result 1`,
        `${search} - Result 2`,
        `${search} - Result 3`,
      ]);
      setIsSearching(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <Button
          aria-expanded={open}
          className="w-[250px] justify-between"
          role="combobox"
          variant="outline"
        >
          {value || "Search dynamically..."}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command shouldFilter={false}>
          <CommandInput
            onValueChange={setSearch}
            placeholder="Type to search..."
            value={search}
          />
          <CommandList>
            {isSearching ? (
              <div className="flex items-center justify-center p-4">
                <Loader2 className="size-4 animate-spin" />
                <span className="ml-2 text-muted-foreground text-sm">
                  Searching...
                </span>
              </div>
            ) : (
              <>
                {!search && (
                  <div className="p-4 text-center text-muted-foreground text-sm">
                    Start typing to search
                  </div>
                )}
                {search && results.length === 0 && !isSearching && (
                  <CommandEmpty>No results found.</CommandEmpty>
                )}
                {results.length > 0 && (
                  <CommandGroup>
                    {results.map((result) => (
                      <CommandItem
                        key={result}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue);
                          setOpen(false);
                        }}
                        value={result}
                      >
                        <Check
                          className={cn(
                            "mr-2 size-4",
                            value === result ? "opacity-100" : "opacity-0"
                          )}
                        />
                        {result}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                )}
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Example;
