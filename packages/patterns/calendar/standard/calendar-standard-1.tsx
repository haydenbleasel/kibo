"use client";

import { faker } from "@faker-js/faker";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";

export const title = "Calendar with Range";

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
    <Calendar
      className="rounded-md border"
      mode="range"
      numberOfMonths={2}
      onSelect={setDate}
      selected={date}
    />
  );
};

export default Example;
