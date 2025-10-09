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

export const title = "With Disabled Items";

const services = [
  { value: "basic", label: "Basic", disabled: false },
  { value: "standard", label: "Standard", disabled: false },
  { value: "premium", label: "Premium (Coming Soon)", disabled: true },
  { value: "enterprise", label: "Enterprise (Contact Sales)", disabled: true },
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
            ? services.find((service) => service.value === value)?.label
            : "Select service..."}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Search services..." />
          <CommandList>
            <CommandEmpty>No service found.</CommandEmpty>
            <CommandGroup>
              {services.map((service) => (
                <CommandItem
                  className={cn(service.disabled && "opacity-50")}
                  disabled={service.disabled}
                  key={service.value}
                  onSelect={(currentValue) => {
                    if (service.disabled) {
                      return;
                    }
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  value={service.value}
                >
                  <Check
                    className={cn(
                      "mr-2 size-4",
                      value === service.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {service.label}
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
