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

export const title = "Items with Metadata";

const members = [
  {
    value: "haydenbleasel",
    name: "Hayden Bleasel",
    email: "hayden@vercel.com",
    role: "Design Engineer",
    avatar: "https://github.com/haydenbleasel.png",
  },
  {
    value: "shadcn",
    name: "shadcn",
    email: "shadcn@vercel.com",
    role: "Engineer",
    avatar: "https://github.com/shadcn.png",
  },
  {
    value: "leerob",
    name: "Lee Robinson",
    email: "lee@vercel.com",
    role: "VP of Product",
    avatar: "https://github.com/leerob.png",
  },
  {
    value: "rauchg",
    name: "Guillermo Rauch",
    email: "rauchg@vercel.com",
    role: "CEO",
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
          className="w-[300px] justify-between"
          role="combobox"
          variant="outline"
        >
          {value
            ? members.find((member) => member.value === value)?.name
            : "Select member..."}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search members..." />
          <CommandList>
            <CommandEmpty>No member found.</CommandEmpty>
            <CommandGroup>
              {members.map((member) => (
                <CommandItem
                  className="flex items-start gap-2 py-3"
                  key={member.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  value={member.value}
                >
                  <Check
                    className={cn(
                      "mt-1 size-4 shrink-0",
                      value === member.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <Avatar className="size-8">
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-0.5">
                    <div className="font-medium">{member.name}</div>
                    <div className="text-muted-foreground text-xs">
                      {member.email}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {member.role}
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
