'use client';

import {
  ContributionGraph,
  ContributionGraphCalendar,
  ContributionGraphBlock,
  ContributionGraphFooter,
  generateTestData,
} from '@repo/contribution-graph';

const data = generateTestData();

const Example = () => (
  <ContributionGraph data={data}>
    <ContributionGraphCalendar>
      {({ activity, dayIndex, weekIndex }) => (
        <ContributionGraphBlock
          activity={activity}
          dayIndex={dayIndex}
          weekIndex={weekIndex}
          className={
            activity.level > 3
              ? 'animate-pulse stroke-2 stroke-emerald-500 dark:stroke-emerald-400'
              : activity.level === 0
              ? 'opacity-50'
              : ''
          }
          style={{
            filter: activity.level > 2 ? 'brightness(1.2)' : undefined,
          }}
        />
      )}
    </ContributionGraphCalendar>
    <ContributionGraphFooter />
  </ContributionGraph>
);

export default Example;