'use client';

import {
  ContributionGraph,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  generateTestData,
} from '@repo/contribution-graph';

const data = generateTestData();

const Example = () => (
  <ContributionGraph
    data={data}
    blockSize={20}
    blockMargin={2}
    fontSize={16}
  >
    <ContributionGraphCalendar />
    <ContributionGraphFooter />
  </ContributionGraph>
);

export default Example;