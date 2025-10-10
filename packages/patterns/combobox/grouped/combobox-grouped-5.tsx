"use client";

import { Check, ChevronDown, ChevronRight, ChevronsUpDown } from "lucide-react";
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

export const title = "Collapsible Groups";

const departments = {
  Engineering: [
    { value: "software", label: "Software" },
    { value: "hardware", label: "Hardware" },
    { value: "qa", label: "QA" },
  ],
  Marketing: [
    { value: "content", label: "Content" },
    { value: "social", label: "Social Media" },
    { value: "seo", label: "SEO" },
  ],
};

const Example = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({
    Marketing: true,
  });

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
            ? Object.values(departments)
                .flat()
                .find((item) => item.value === value)?.label
            : "Select department..."}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>No department found.</CommandEmpty>
            {Object.entries(departments).map(([category, items]) => {
              const isCollapsed = collapsed[category];
              return (
                <CommandGroup
                  heading={
                    <button
                      className="flex w-full items-center gap-1"
                      onClick={() =>
                        setCollapsed((prev) => ({
                          ...prev,
                          [category]: !prev[category],
                        }))
                      }
                    >
                      {isCollapsed ? (
                        <ChevronRight className="size-3" />
                      ) : (
                        <ChevronDown className="size-3" />
                      )}
                      {category}
                    </button>
                  }
                  key={category}
                >
                  {!isCollapsed &&
                    items.map((item) => (
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
              );
            })}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Example;
