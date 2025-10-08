"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const title = "Calendar with Date and Time";

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
    <div className="divide-y overflow-hidden rounded-md border bg-background">
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
  );
};

export default Example;
