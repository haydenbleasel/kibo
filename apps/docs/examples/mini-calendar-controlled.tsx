'use client';

import {
  MiniCalendar,
  MiniCalendarDays,
  MiniCalendarNavigation,
} from '@repo/mini-calendar';
import { useState } from 'react';

const Example = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="space-y-4">
      <MiniCalendar
        value={selectedDate || undefined}
        onValueChange={setSelectedDate}
      >
        <MiniCalendarNavigation direction="prev" />
        <MiniCalendarDays />
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
