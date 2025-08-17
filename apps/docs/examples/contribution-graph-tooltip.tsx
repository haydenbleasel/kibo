'use client';

import {
  ContributionGraph,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  generateTestData,
  type Activity,
  type BlockElement,
} from '@repo/contribution-graph';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cloneElement } from 'react';

const data = generateTestData();

const Example = () => {
  const renderBlock = (block: BlockElement, activity: Activity) => (
    <Tooltip>
      <TooltipTrigger asChild>{cloneElement(block)}</TooltipTrigger>
      <TooltipContent>
        <p className="font-semibold">{activity.date}</p>
        <p>{activity.count} contributions</p>
      </TooltipContent>
    </Tooltip>
  );

  return (
    <TooltipProvider>
      <ContributionGraph data={data} renderBlock={renderBlock}>
        <ContributionGraphCalendar />
        <ContributionGraphFooter />
      </ContributionGraph>
    </TooltipProvider>
  );
};

export default Example;