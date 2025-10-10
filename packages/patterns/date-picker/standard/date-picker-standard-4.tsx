"use client";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export const title = "Date Picker with Date and Time";

const Example = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState<string>("12:00");

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
    if (date) {
      const [hours, minutes] = e.target.value.split(":");
      const newDate = new Date(date);
      newDate.setHours(
        Number.parseInt(hours, 10),
        Number.parseInt(minutes, 10)
      );
      setDate(newDate);
    }
  };

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
          {date ? (
            `${format(date, "PPP")} at ${time}`
          ) : (
            <span>Pick a date and time</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto p-0">
        <div className="divide-y overflow-hidden bg-background">
          <Calendar mode="single" onSelect={setDate} selected={date} />
          <div className="space-y-2 p-4">
            <Label htmlFor="time">Time</Label>
            <Input
              className="w-full"
              id="time"
              onChange={handleTimeChange}
              type="time"
              value={time}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Example;
