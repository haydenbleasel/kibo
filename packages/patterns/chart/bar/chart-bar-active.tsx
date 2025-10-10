"use client";

import { Bar, BarChart, CartesianGrid, Rectangle, XAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const title = "A bar chart with an active bar";

const chartData = [
  { browser: "chrome", visitors: 187, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 275, fill: "var(--color-firefox)" },
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

const ChartBarActive = () => (
  <div className="w-full max-w-xl rounded-md border bg-background p-4">
    <ChartContainer config={chartConfig}>
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          axisLine={false}
          dataKey="browser"
          tickFormatter={(value) =>
            chartConfig[value as keyof typeof chartConfig]?.label
          }
          tickLine={false}
          tickMargin={10}
        />
        <ChartTooltip
          content={<ChartTooltipContent hideLabel />}
          cursor={false}
        />
        <Bar
          activeBar={({ ...props }) => (
            <Rectangle
              {...props}
              fillOpacity={0.8}
              stroke={props.payload.fill}
              strokeDasharray={4}
              strokeDashoffset={4}
            />
          )}
          activeIndex={2}
          dataKey="visitors"
          radius={8}
          strokeWidth={2}
        />
      </BarChart>
    </ChartContainer>
  </div>
);

export default ChartBarActive;
