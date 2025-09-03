"use client";

import {
  MiniCalendar,
  MiniCalendarDay,
  MiniCalendarDays,
  MiniCalendarNavigation,
} from "@repo/mini-calendar";

const Example = () => (
  <MiniCalendar days={7}>
    <MiniCalendarNavigation direction="prev" />
    <MiniCalendarDays>
      {(date) => <MiniCalendarDay date={date} key={date.toISOString()} />}
    </MiniCalendarDays>
    <MiniCalendarNavigation direction="next" />
  </MiniCalendar>
);

export default Example;
