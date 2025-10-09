"use client";

import { AlertCircle, Check, ChevronsUpDown, RefreshCw } from "lucide-react";
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

export const title = "Error State with Retry";

const Example = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [hasError, setHasError] = useState(true);

  const handleRetry = () => {
    setHasError(false);
  };

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <Button
          aria-expanded={open}
          className="w-[200px] justify-between"
          role="combobox"
          variant="outline"
        >
          {value || "Select option..."}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandList>
            {hasError ? (
              <div className="flex flex-col items-center gap-3 p-4 text-center">
                <AlertCircle className="size-8 text-destructive" />
                <div>
                  <p className="font-medium text-sm">Failed to load</p>
                  <p className="text-muted-foreground text-xs">
                    Could not fetch data
                  </p>
                </div>
                <Button
                  className="w-full"
                  onClick={handleRetry}
                  size="sm"
                  variant="outline"
                >
                  <RefreshCw className="mr-2 size-3" />
                  Retry
                </Button>
              </div>
            ) : (
              <>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                  {["Option 1", "Option 2", "Option 3"].map((option) => (
                    <CommandItem
                      key={option}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                      value={option}
                    >
                      <Check
                        className={cn(
                          "mr-2 size-4",
                          value === option ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {option}
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
