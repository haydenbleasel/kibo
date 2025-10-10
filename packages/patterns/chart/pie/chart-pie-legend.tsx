"use client";

import { Pie, PieChart } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

export const title = "A pie chart with a legend";

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

const ChartPieLegend = () => (
  <div className="w-full max-w-xl rounded-md border bg-background p-4">
    <ChartContainer
      className="mx-auto aspect-square max-h-[300px]"
      config={chartConfig}
    >
      <PieChart>
        <Pie data={chartData} dataKey="visitors" />
        <ChartLegend
          className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
          content={<ChartLegendContent nameKey="browser" />}
        />
      </PieChart>
    </ChartContainer>
  </div>
);

export default ChartPieLegend;
