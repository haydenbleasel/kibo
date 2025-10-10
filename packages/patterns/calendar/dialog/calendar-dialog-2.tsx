"use client";

import type { ChangeEvent, ChangeEventHandler } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const title = "Calendar with Month and Year Selector in Dialog";

const Example = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [month, setMonth] = useState<Date>(new Date());

  const handleCalendarChange = (
    value: string | number,
    event: ChangeEventHandler<HTMLSelectElement>
  ) => {
    const newEvent = {
      target: {
        value: String(value),
      },
    } as ChangeEvent<HTMLSelectElement>;
    event(newEvent);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Select Date</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[298px]">
        <DialogHeader>
          <DialogTitle>Select Date</DialogTitle>
        </DialogHeader>
        <Calendar
          captionLayout="dropdown"
          className="rounded-md border"
          components={{
            MonthCaption: (props) => props.children,
            DropdownNav: (props) => (
              <div className="flex w-full items-center gap-2">
                {props.children}
              </div>
            ),
            Dropdown: (props) => (
              <Select
                onValueChange={(value) => {
                  if (props.onChange) {
                    handleCalendarChange(value, props.onChange);
                  }
                }}
                value={String(props.value)}
              >
                <SelectTrigger className="first:flex-1 last:shrink-0">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {props.options?.map((option) => (
                    <SelectItem
                      disabled={option.disabled}
                      key={option.value}
                      value={String(option.value)}
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ),
          }}
          hideNavigation
          mode="single"
          month={month}
          onMonthChange={setMonth}
          onSelect={setDate}
          selected={date}
        />
      </DialogContent>
    </Dialog>
  );
};

export default Example;
