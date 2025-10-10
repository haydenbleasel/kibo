"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
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

export const title = "Items with Status Indicators";

const tasks = [
  { value: "task-1", label: "Update documentation", status: "completed" },
  { value: "task-2", label: "Fix login bug", status: "in-progress" },
  { value: "task-3", label: "Add dark mode", status: "todo" },
  { value: "task-4", label: "Optimize performance", status: "in-progress" },
];

const statusConfig = {
  completed: { label: "Done", variant: "default" as const },
  "in-progress": { label: "In Progress", variant: "secondary" as const },
  todo: { label: "To Do", variant: "outline" as const },
};

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
            ? tasks.find((task) => task.value === value)?.label
            : "Select task..."}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[280px] p-0">
        <Command>
          <CommandInput placeholder="Search tasks..." />
          <CommandList>
            <CommandEmpty>No task found.</CommandEmpty>
            <CommandGroup>
              {tasks.map((task) => (
                <CommandItem
                  className="flex items-center justify-between gap-2"
                  key={task.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  value={task.value}
                >
                  <div className="flex items-center gap-2">
                    <Check
                      className={cn(
                        "size-4",
                        value === task.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {task.label}
                  </div>
                  <Badge variant={statusConfig[task.status].variant}>
                    {statusConfig[task.status].label}
                  </Badge>
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
