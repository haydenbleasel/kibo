'use client';

import {
  ContributionGraph,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  generateTestData,
} from '@repo/contribution-graph';

const data = generateTestData();

const Example = () => (
  <ContributionGraph data={data}>
    <ContributionGraphCalendar />
    <ContributionGraphFooter />
  </ContributionGraph>
);

export default Example;