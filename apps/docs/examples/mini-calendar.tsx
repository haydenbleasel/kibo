'use client';

import {
  MiniCalendar,
  MiniCalendarDays,
  MiniCalendarNavigation,
} from '@repo/mini-calendar';

const Example = () => (
  <MiniCalendar>
    <MiniCalendarNavigation direction="prev" />
    <MiniCalendarDays />
    <MiniCalendarNavigation direction="next" />
  </MiniCalendar>
);

export default Example;
