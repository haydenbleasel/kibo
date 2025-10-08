"use client";

import { faker } from "@faker-js/faker";
import { type ComponentProps, useState } from "react";
import { Calendar } from "@/components/ui/calendar";

export const title = "Calendar with Custom Select Day Style";

const now = new Date();
const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

const bookedDays = [
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
  const [date, setDate] = useState<Date | undefined>(new Date());

  const modifiers = {
    booked: bookedDays,
  };

  const modifiersStyles: ComponentProps<typeof Calendar>["modifiersStyles"] = {
    booked: {
      backgroundColor: "#fbbf24",
      color: "#78350f",
      fontWeight: "bold",
    },
  };

  return (
    <Calendar
      className="rounded-md border"
      classNames={{
        day_button: "rounded-full",
        day: "rounded-full",
        today: "rounded-full",
      }}
      mode="single"
      modifiers={modifiers}
      modifiersStyles={modifiersStyles}
      onSelect={setDate}
      selected={date}
    />
  );
};

export default Example;
