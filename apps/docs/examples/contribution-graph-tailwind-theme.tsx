'use client';

import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
} from '@repo/contribution-graph';
import { cn } from '@/lib/utils';
import { eachDayOfInterval, endOfYear, formatISO, startOfYear } from 'date-fns';

const maxCount = 20;
const maxLevel = 4;
const now = new Date();
const days = eachDayOfInterval({
  start: startOfYear(now),
  end: endOfYear(now),
});

const data = days.map((date) => {
  const c = Math.round(
    Math.random() * maxCount - Math.random() * (0.8 * maxCount)
  );
  const count = Math.max(0, c);
  const level = Math.ceil((count / maxCount) * maxLevel);

  return {
    date: formatISO(date, { representation: 'date' }),
    count,
    level,
  };
});

const Example = () => (
  <ContributionGraph data={data}>
    <ContributionGraphCalendar>
      {({ activity, dayIndex, weekIndex }) => (
        <ContributionGraphBlock
          activity={activity}
          dayIndex={dayIndex}
          weekIndex={weekIndex}
          className={cn(
            'data-[level="0"]:fill-slate-100 dark:data-[level="0"]:fill-slate-900',
            'data-[level="1"]:fill-blue-200 dark:data-[level="1"]:fill-blue-900',
            'data-[level="2"]:fill-blue-400 dark:data-[level="2"]:fill-blue-700',
            'data-[level="3"]:fill-blue-600 dark:data-[level="3"]:fill-blue-500',
            'data-[level="4"]:fill-blue-800 dark:data-[level="4"]:fill-blue-300'
          )}
        />
      )}
    </ContributionGraphCalendar>
    <ContributionGraphFooter />
  </ContributionGraph>
);

export default Example;