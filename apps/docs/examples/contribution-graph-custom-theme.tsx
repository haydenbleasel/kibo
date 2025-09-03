"use client";

import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
} from "@repo/contribution-graph";
import { eachDayOfInterval, endOfYear, formatISO, startOfYear } from "date-fns";
import { cn } from "@/lib/utils";

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
    date: formatISO(date, { representation: "date" }),
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
          className={cn(
            'data-[level="0"]:fill-[#ebedf0] dark:data-[level="0"]:fill-[#161b22]',
            'data-[level="1"]:fill-[#9be9a8] dark:data-[level="1"]:fill-[#0e4429]',
            'data-[level="2"]:fill-[#40c463] dark:data-[level="2"]:fill-[#006d32]',
            'data-[level="3"]:fill-[#30a14e] dark:data-[level="3"]:fill-[#26a641]',
            'data-[level="4"]:fill-[#216e39] dark:data-[level="4"]:fill-[#39d353]'
          )}
          dayIndex={dayIndex}
          weekIndex={weekIndex}
        />
      )}
    </ContributionGraphCalendar>
    <ContributionGraphFooter />
  </ContributionGraph>
);

export default Example;
