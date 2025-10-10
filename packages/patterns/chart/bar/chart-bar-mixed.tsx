"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const title = "A mixed bar chart";

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

const ChartBarMixed = () => (
  <div className="w-full max-w-xl rounded-md border bg-background p-4">
    <ChartContainer config={chartConfig}>
      <BarChart
        accessibilityLayer
        data={chartData}
        layout="vertical"
        margin={{
          left: 0,
        }}
      >
        <YAxis
          axisLine={false}
          dataKey="browser"
          tickFormatter={(value) =>
            chartConfig[value as keyof typeof chartConfig]?.label
          }
          tickLine={false}
          tickMargin={10}
          type="category"
        />
        <XAxis dataKey="visitors" hide type="number" />
        <ChartTooltip
          content={<ChartTooltipContent hideLabel />}
          cursor={false}
        />
        <Bar dataKey="visitors" layout="vertical" radius={5} />
      </BarChart>
    </ChartContainer>
  </div>
);

export default ChartBarMixed;
