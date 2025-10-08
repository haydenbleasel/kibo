"use client";

import { faker } from "@faker-js/faker";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

export const title = "Calendar with Disabled Dates";

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
    <Calendar
      className="rounded-md border"
      disabled={disabledDays}
      mode="single"
      onSelect={setDate}
      selected={date}
    />
  );
};

export default Example;
