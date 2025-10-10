"use client";

import { Check, ChevronsUpDown, ExternalLink } from "lucide-react";
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

export const title = "Items with Action Buttons";

const repositories = [
  {
    value: "repo-1",
    name: "awesome-project",
    description: "A really cool project",
    url: "https://github.com/user/awesome-project",
  },
  {
    value: "repo-2",
    name: "super-library",
    description: "Essential utilities for developers",
    url: "https://github.com/user/super-library",
  },
  {
    value: "repo-3",
    name: "demo-app",
    description: "Sample application for testing",
    url: "https://github.com/user/demo-app",
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
            ? repositories.find((repo) => repo.value === value)?.name
            : "Select repository..."}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search repositories..." />
          <CommandList>
            <CommandEmpty>No repository found.</CommandEmpty>
            <CommandGroup>
              {repositories.map((repo) => (
                <CommandItem
                  className="flex items-start justify-between gap-2 py-3"
                  key={repo.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  value={repo.value}
                >
                  <div className="flex items-start gap-2">
                    <Check
                      className={cn(
                        "mt-0.5 size-4 shrink-0",
                        value === repo.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    <div className="flex flex-col gap-0.5">
                      <div className="font-medium">{repo.name}</div>
                      <div className="text-muted-foreground text-xs">
                        {repo.description}
                      </div>
                    </div>
                  </div>
                  <Button
                    className="size-6 shrink-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(repo.url, "_blank");
                    }}
                    size="icon"
                    variant="ghost"
                  >
                    <ExternalLink className="size-4" />
                  </Button>
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
