"use client";

import { faker } from "@faker-js/faker";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export const title = "Date Picker with Range";

const now = new Date();
const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

const from = faker.date.between({
  from: startOfMonth,
  to: new Date(now.getFullYear(), now.getMonth(), 15),
});
const to = faker.date.between({
  from: new Date(now.getFullYear(), now.getMonth(), 16),
  to: endOfMonth,
});

const Example = () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from,
    to,
  });

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
          {date?.from ? (
            date.to ? (
              <>
                {format(date.from, "LLL dd, y")} -{" "}
                {format(date.to, "LLL dd, y")}
              </>
            ) : (
              format(date.from, "LLL dd, y")
            )
          ) : (
            <span>Pick a date range</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto p-0">
        <Calendar
          mode="range"
          numberOfMonths={2}
          onSelect={setDate}
          selected={date}
        />
      </PopoverContent>
    </Popover>
  );
};

export default Example;
