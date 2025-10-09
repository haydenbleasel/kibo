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

export const title = "Items with Descriptions";

const integrations = [
  {
    value: "github",
    label: "GitHub",
    description: "Connect your GitHub repositories",
  },
  {
    value: "slack",
    label: "Slack",
    description: "Send notifications to Slack channels",
  },
  {
    value: "notion",
    label: "Notion",
    description: "Sync data with Notion databases",
  },
];

const Example = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <Button
          aria-expanded={open}
          className="w-[280px] justify-between"
          role="combobox"
          variant="outline"
        >
          {value
            ? integrations.find((item) => item.value === value)?.label
            : "Select integration..."}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[280px] p-0">
        <Command>
          <CommandInput placeholder="Search integrations..." />
          <CommandList>
            <CommandEmpty>No integration found.</CommandEmpty>
            <CommandGroup>
              {integrations.map((item) => (
                <CommandItem
                  className="flex items-start gap-2 py-3"
                  key={item.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  value={item.value}
                >
                  <Check
                    className={cn(
                      "mt-0.5 size-4 shrink-0",
                      value === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <div className="flex flex-col gap-0.5">
                    <div className="font-medium">{item.label}</div>
                    <div className="text-muted-foreground text-xs">
                      {item.description}
                    </div>
                  </div>
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
