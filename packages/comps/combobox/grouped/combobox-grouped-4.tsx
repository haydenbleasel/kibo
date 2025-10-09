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

export const title = "Groups with Item Counts";

const roles = {
  development: [
    { value: "frontend-dev", label: "Frontend Developer" },
    { value: "backend-dev", label: "Backend Developer" },
    { value: "fullstack-dev", label: "Fullstack Developer" },
  ],
  design: [
    { value: "ui-designer", label: "UI Designer" },
    { value: "ux-designer", label: "UX Designer" },
  ],
  management: [
    { value: "product-manager", label: "Product Manager" },
    { value: "project-manager", label: "Project Manager" },
    { value: "engineering-manager", label: "Engineering Manager" },
  ],
};

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
            ? Object.values(roles)
                .flat()
                .find((item) => item.value === value)?.label
            : "Select role..."}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Search role..." />
          <CommandList>
            <CommandEmpty>No role found.</CommandEmpty>
            {Object.entries(roles).map(([category, items]) => (
              <CommandGroup
                heading={
                  <div className="flex items-center justify-between">
                    <span className="capitalize">{category}</span>
                    <span className="text-muted-foreground text-xs">
                      {items.length}
                    </span>
                  </div>
                }
                key={category}
              >
                {items.map((item) => (
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
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Example;
