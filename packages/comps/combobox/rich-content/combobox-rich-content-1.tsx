"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

export const title = "Items with Avatars";

const users = [
  {
    value: "haydenbleasel",
    label: "Hayden Bleasel",
    avatar: "https://github.com/haydenbleasel.png",
  },
  {
    value: "shadcn",
    label: "shadcn",
    avatar: "https://github.com/shadcn.png",
  },
  {
    value: "leerob",
    label: "Lee Robinson",
    avatar: "https://github.com/leerob.png",
  },
  {
    value: "rauchg",
    label: "Guillermo Rauch",
    avatar: "https://github.com/rauchg.png",
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
          className="w-[250px] justify-between"
          role="combobox"
          variant="outline"
        >
          {value ? (
            <div className="flex items-center gap-2">
              <Avatar className="size-5">
                <AvatarImage
                  src={users.find((user) => user.value === value)?.avatar}
                />
                <AvatarFallback>
                  {users.find((user) => user.value === value)?.label.charAt(0)}
                </AvatarFallback>
              </Avatar>
              {users.find((user) => user.value === value)?.label}
            </div>
          ) : (
            "Select user..."
          )}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Search users..." />
          <CommandList>
            <CommandEmpty>No user found.</CommandEmpty>
            <CommandGroup>
              {users.map((user) => (
                <CommandItem
                  key={user.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  value={user.value}
                >
                  <Check
                    className={cn(
                      "mr-2 size-4",
                      value === user.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <Avatar className="mr-2 size-5">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.label.charAt(0)}</AvatarFallback>
                  </Avatar>
                  {user.label}
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
