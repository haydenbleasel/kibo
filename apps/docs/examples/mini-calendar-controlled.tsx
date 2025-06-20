'use client';

import {
  MiniCalendar,
  MiniCalendarDay,
  MiniCalendarDays,
  MiniCalendarNavigation,
} from '@repo/mini-calendar';
import { useState } from 'react';

const Example = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  return (
    <div className="space-y-4">
      <MiniCalendar value={selectedDate} onValueChange={setSelectedDate}>
        <MiniCalendarNavigation direction="prev" />
        <MiniCalendarDays>
          {(date) => <MiniCalendarDay key={date.toISOString()} date={date} />}
        </MiniCalendarDays>
        <MiniCalendarNavigation direction="next" />
      </MiniCalendar>

      {selectedDate && (
        <p className="text-muted-foreground text-sm">
          Selected:{' '}
          {selectedDate.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      )}
    </div>
  );
};

export default Example;
