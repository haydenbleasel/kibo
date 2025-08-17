'use client';

import {
  ContributionGraph,
  ContributionGraphCalendar,
  generateTestData,
} from '@repo/contribution-graph';

const data = generateTestData();

const Example = () => (
  <ContributionGraph data={data}>
    <ContributionGraphCalendar hideMonthLabels />
  </ContributionGraph>
);

export default Example;