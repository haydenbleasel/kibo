"use client";

import { CartesianGrid, Dot, Line, LineChart } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const title = "A line chart with dots and colors";

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
    color: "var(--chart-2)",
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

const ChartLineDotsColors = () => (
  <div className="w-full max-w-xl rounded-md border bg-background p-4">
    <ChartContainer config={chartConfig}>
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          top: 24,
          left: 24,
          right: 24,
        }}
      >
        <CartesianGrid vertical={false} />
        <ChartTooltip
          content={
            <ChartTooltipContent
              hideLabel
              indicator="line"
              nameKey="visitors"
            />
          }
          cursor={false}
        />
        <Line
          dataKey="visitors"
          dot={({ payload, ...props }) => (
            <Dot
              cx={props.cx}
              cy={props.cy}
              fill={payload.fill}
              key={payload.browser}
              r={5}
              stroke={payload.fill}
            />
          )}
          stroke="var(--color-visitors)"
          strokeWidth={2}
          type="natural"
        />
      </LineChart>
    </ChartContainer>
  </div>
);

export default ChartLineDotsColors;
