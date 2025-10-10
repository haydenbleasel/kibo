"use client";

import { Check, ChevronsUpDown, Package, Shield, Zap } from "lucide-react";
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

export const title = "Items with Icons and Descriptions";

const features = [
  {
    value: "basic",
    label: "Basic Plan",
    description: "Essential features for small teams",
    icon: Package,
  },
  {
    value: "pro",
    label: "Pro Plan",
    description: "Advanced features and analytics",
    icon: Zap,
  },
  {
    value: "enterprise",
    label: "Enterprise Plan",
    description: "Custom solutions with priority support",
    icon: Shield,
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
          className="w-[300px] justify-between"
          role="combobox"
          variant="outline"
        >
          {value
            ? features.find((feature) => feature.value === value)?.label
            : "Select plan..."}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search plans..." />
          <CommandList>
            <CommandEmpty>No plan found.</CommandEmpty>
            <CommandGroup>
              {features.map((feature) => (
                <CommandItem
                  className="flex items-start gap-3 py-3"
                  key={feature.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  value={feature.value}
                >
                  <Check
                    className={cn(
                      "mt-0.5 size-4 shrink-0",
                      value === feature.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <feature.icon className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
                  <div className="flex flex-col gap-0.5">
                    <div className="font-medium">{feature.label}</div>
                    <div className="text-muted-foreground text-xs">
                      {feature.description}
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
