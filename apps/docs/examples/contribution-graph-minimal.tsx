'use client';

import {
  ContributionGraph,
  ContributionGraphCalendar,
  ContributionGraphBlock,
  generateTestData,
} from '@repo/contribution-graph';

const data = generateTestData();

const Example = () => (
  <ContributionGraph data={data}>
    <ContributionGraphCalendar hideMonthLabels>
      {({ activity, dayIndex, weekIndex }) => (
        <ContributionGraphBlock
          activity={activity}
          dayIndex={dayIndex}
          weekIndex={weekIndex}
        />
      )}
    </ContributionGraphCalendar>
  </ContributionGraph>
);

export default Example;