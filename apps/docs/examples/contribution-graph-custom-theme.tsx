'use client';

import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
} from '@repo/contribution-graph';
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
  <ContributionGraph
    data={data}
    theme={{
      light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
      dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    }}
  >
    <ContributionGraphCalendar>
      {({ activity, dayIndex, weekIndex }) => (
        <ContributionGraphBlock
          activity={activity}
          dayIndex={dayIndex}
          weekIndex={weekIndex}
        />
      )}
    </ContributionGraphCalendar>
    <ContributionGraphFooter />
  </ContributionGraph>
);

export default Example;
