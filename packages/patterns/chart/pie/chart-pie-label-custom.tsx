"use client";

import { Pie, PieChart } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const title = "A pie chart with a custom label";

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

const ChartPieLabelCustom = () => (
  <div className="w-full max-w-xl rounded-md border bg-background p-4">
    <ChartContainer
      className="mx-auto aspect-square max-h-[250px] px-0"
      config={chartConfig}
    >
      <PieChart>
        <ChartTooltip
          content={<ChartTooltipContent hideLabel nameKey="visitors" />}
        />
        <Pie
          data={chartData}
          dataKey="visitors"
          label={({ payload, ...props }) => (
            <text
              cx={props.cx}
              cy={props.cy}
              dominantBaseline={props.dominantBaseline}
              fill="hsla(var(--foreground))"
              textAnchor={props.textAnchor}
              x={props.x}
              y={props.y}
            >
              {payload.visitors}
            </text>
          )}
          labelLine={false}
          nameKey="browser"
        />
      </PieChart>
    </ChartContainer>
  </div>
);

export default ChartPieLabelCustom;
