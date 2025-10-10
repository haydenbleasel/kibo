"use client";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export const title = "Date Picker with Natural Language";

const Example = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const shortcuts = [
    { label: "Today", date: new Date() },
    {
      label: "Tomorrow",
      date: new Date(new Date().setDate(new Date().getDate() + 1)),
    },
    {
      label: "In 3 days",
      date: new Date(new Date().setDate(new Date().getDate() + 3)),
    },
    {
      label: "In a week",
      date: new Date(new Date().setDate(new Date().getDate() + 7)),
    },
    {
      label: "In 2 weeks",
      date: new Date(new Date().setDate(new Date().getDate() + 14)),
    },
    {
      label: "In a month",
      date: new Date(new Date().setMonth(new Date().getMonth() + 1)),
    },
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
          variant="outline"
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto p-0">
        <div className="flex divide-x overflow-hidden bg-background">
          <Calendar mode="single" onSelect={setDate} selected={date} />
          <div className="relative w-[249px] overflow-hidden">
            <div className="absolute inset-0 grid gap-4">
              <div className="space-y-2 px-4 pt-4">
                <p className="text-center font-medium text-sm">Quick Select</p>
              </div>
              <ScrollArea className="h-full overflow-y-auto">
                <div className="grid grid-cols-1 gap-2 px-4 pb-4">
                  {shortcuts.map((shortcut) => (
                    <Button
                      key={shortcut.label}
                      onClick={() => setDate(new Date(shortcut.date))}
                      size="sm"
                      variant="outline"
                    >
                      {shortcut.label}
                    </Button>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Example;
