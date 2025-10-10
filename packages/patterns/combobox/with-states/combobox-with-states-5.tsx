"use client";

import { Check, ChevronsUpDown } from "lucide-react";
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

export const title = "With Validation Feedback";

const currencies = ["USD", "EUR", "GBP", "JPY", "CAD"];

const Example = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState("Please select a currency");

  useEffect(() => {
    if (value) {
      setError("");
    } else {
      setError("Please select a currency");
    }
  }, [value]);

  return (
    <div className="space-y-2">
      <Popover onOpenChange={setOpen} open={open}>
        <PopoverTrigger asChild>
          <Button
            aria-expanded={open}
            className={cn(
              "w-[200px] justify-between",
              error && "border-destructive"
            )}
            role="combobox"
            variant="outline"
          >
            {value || "Select currency..."}
            <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search currency..." />
            <CommandList>
              <CommandEmpty>No currency found.</CommandEmpty>
              <CommandGroup>
                {currencies.map((currency) => (
                  <CommandItem
                    key={currency}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                    value={currency}
                  >
                    <Check
                      className={cn(
                        "mr-2 size-4",
                        value === currency ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {currency}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {error && <p className="text-destructive text-xs">{error}</p>}
    </div>
  );
};

export default Example;
