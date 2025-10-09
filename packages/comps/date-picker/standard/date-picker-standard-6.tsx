"use client";

import { faker } from "@faker-js/faker";
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
import { cn } from "@/lib/utils";

export const title = "Date Picker with Disabled Dates";

const now = new Date();
const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

const disabledRangeStart = faker.date.between({
  from: startOfMonth,
  to: new Date(now.getFullYear(), now.getMonth(), 7),
});
const disabledRangeEnd = new Date(disabledRangeStart);
disabledRangeEnd.setDate(disabledRangeStart.getDate() + 4);

const specificDisabledDate = faker.date.between({
  from: new Date(now.getFullYear(), now.getMonth(), 15),
  to: endOfMonth,
});

const Example = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const disabledDays = [
    { from: disabledRangeStart, to: disabledRangeEnd },
    { dayOfWeek: [0, 6] }, // Disable weekends
    specificDisabledDate, // Disable specific date
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
        <Calendar
          disabled={disabledDays}
          mode="single"
          onSelect={setDate}
          selected={date}
        />
      </PopoverContent>
    </Popover>
  );
};

export default Example;
