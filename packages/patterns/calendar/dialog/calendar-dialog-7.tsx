"use client";

import { faker } from "@faker-js/faker";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const title = "Calendar with Multiple Day Selection in Dialog";

const now = new Date();
const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

const selectedDates = [
  faker.date.between({
    from: startOfMonth,
    to: new Date(now.getFullYear(), now.getMonth(), 10),
  }),
  faker.date.between({
    from: new Date(now.getFullYear(), now.getMonth(), 11),
    to: new Date(now.getFullYear(), now.getMonth(), 20),
  }),
  faker.date.between({
    from: new Date(now.getFullYear(), now.getMonth(), 21),
    to: endOfMonth,
  }),
];

const Example = () => {
  const [dates, setDates] = useState<Date[] | undefined>(selectedDates);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Select Dates</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[298px]">
        <DialogHeader>
          <DialogTitle>Select Multiple Dates</DialogTitle>
        </DialogHeader>
        <Calendar
          className="rounded-md border"
          mode="multiple"
          onSelect={setDates}
          selected={dates}
        />
      </DialogContent>
    </Dialog>
  );
};

export default Example;
