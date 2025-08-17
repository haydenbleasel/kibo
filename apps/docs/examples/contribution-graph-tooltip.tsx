'use client';

import {
  ContributionGraph,
  ContributionGraphCalendar,
  ContributionGraphBlock,
  ContributionGraphFooter,
  generateTestData,
} from '@repo/contribution-graph';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const data = generateTestData();

const Example = () => (
  <TooltipProvider>
    <ContributionGraph data={data}>
      <ContributionGraphCalendar>
        {({ activity, dayIndex, weekIndex }) => (
          <Tooltip>
            <TooltipTrigger asChild>
              <g>
                <ContributionGraphBlock
                  activity={activity}
                  dayIndex={dayIndex}
                  weekIndex={weekIndex}
                  className="cursor-pointer"
                />
              </g>
            </TooltipTrigger>
            <TooltipContent>
              <p className="font-semibold">{activity.date}</p>
              <p>{activity.count} contributions</p>
            </TooltipContent>
          </Tooltip>
        )}
      </ContributionGraphCalendar>
      <ContributionGraphFooter />
    </ContributionGraph>
  </TooltipProvider>
);

export default Example;