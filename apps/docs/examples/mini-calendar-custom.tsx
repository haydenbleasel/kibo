'use client';

import {
  MiniCalendar,
  MiniCalendarDay,
  MiniCalendarDays,
  MiniCalendarNavigation,
} from '@repo/mini-calendar';
import { Button } from '@repo/shadcn-ui/components/ui/button';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';

const Example = () => (
  <MiniCalendar className="bg-card p-4 shadow-lg">
    <div className="flex items-center gap-4">
      <MiniCalendarNavigation direction="prev" asChild>
        <Button variant="outline" size="icon">
          <ArrowLeftIcon className="size-4" />
        </Button>
      </MiniCalendarNavigation>

      <MiniCalendarDays className="gap-2">
        {(date) => <MiniCalendarDay key={date.toISOString()} date={date} />}
      </MiniCalendarDays>

      <MiniCalendarNavigation direction="next" asChild>
        <Button variant="outline" size="icon">
          <ArrowRightIcon className="size-4" />
        </Button>
      </MiniCalendarNavigation>
    </div>
  </MiniCalendar>
);

export default Example;
