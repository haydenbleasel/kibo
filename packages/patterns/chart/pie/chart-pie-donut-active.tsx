"use client";

import { Pie, PieChart, Sector } from "recharts";
import type { PieSectorDataItem } from "recharts/types/polar/Pie";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const title = "A donut chart with an active sector";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

const ChartPieDonutActive = () => (
  <div className="w-full max-w-xl rounded-md border bg-background p-4">
    <ChartContainer
      className="mx-auto aspect-square max-h-[250px]"
      config={chartConfig}
    >
      <PieChart>
        <ChartTooltip
          content={<ChartTooltipContent hideLabel />}
          cursor={false}
        />
        <Pie
          activeIndex={0}
          activeShape={({ outerRadius = 0, ...props }: PieSectorDataItem) => (
            <Sector {...props} outerRadius={outerRadius + 10} />
          )}
          data={chartData}
          dataKey="visitors"
          innerRadius={60}
          nameKey="browser"
          strokeWidth={5}
        />
      </PieChart>
    </ChartContainer>
  </div>
);

export default ChartPieDonutActive;
