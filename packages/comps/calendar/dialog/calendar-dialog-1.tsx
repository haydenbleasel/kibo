"use client";

import { faker } from "@faker-js/faker";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const title = "Calendar with Range in Dialog";

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
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Select Date Range</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Select Date Range</DialogTitle>
        </DialogHeader>
        <Calendar
          className="rounded-md border"
          mode="range"
          numberOfMonths={2}
          onSelect={setDate}
          selected={date}
        />
      </DialogContent>
    </Dialog>
  );
};

export default Example;
