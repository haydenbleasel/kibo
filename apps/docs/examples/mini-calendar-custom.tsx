'use client';

import {
  MiniCalendar,
  MiniCalendarDay,
  MiniCalendarDays,
  MiniCalendarNavigation,
} from '@repo/mini-calendar';

const Example = () => {
  // Get 5 days starting from today
  const today = new Date();
  const days = Array.from({ length: 5 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    return date;
  });

  return (
    <MiniCalendar className="bg-card p-4 shadow-lg">
      <div className="flex items-center gap-4">
        <MiniCalendarNavigation
          direction="prev"
          className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
        />

        <MiniCalendarDays className="gap-2">
          {days.map((date) => (
            <MiniCalendarDay
              key={date.toISOString()}
              date={date}
              className="rounded-xl border-2 border-transparent hover:border-primary/20"
            />
          ))}
        </MiniCalendarDays>

        <MiniCalendarNavigation
          direction="next"
          className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
        />
      </div>
    </MiniCalendar>
  );
};

export default Example;
