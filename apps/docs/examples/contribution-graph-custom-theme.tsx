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