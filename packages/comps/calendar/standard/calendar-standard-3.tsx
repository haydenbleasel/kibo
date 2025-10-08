"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { ScrollArea } from "@/components/ui/scroll-area";

export const title = "Calendar as Appointment Picker";

const Example = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const availableTimes = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
  ];

  return (
    <div className="flex divide-x overflow-hidden rounded-md border bg-background">
      <Calendar mode="single" onSelect={setDate} selected={date} />
      <div className="relative w-[249px] overflow-hidden">
        <div className="absolute inset-0 grid gap-4">
          <div className="space-y-2 px-4 pt-4">
            <p className="text-center font-medium text-sm">Available Times</p>
          </div>
          <ScrollArea className="h-full overflow-y-auto">
            <div className="grid grid-cols-1 gap-2 px-4 pb-4">
              {availableTimes.map((time) => (
                <Button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  size="sm"
                  variant={selectedTime === time ? "default" : "outline"}
                >
                  {time}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default Example;
