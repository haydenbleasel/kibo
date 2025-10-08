"use client";

import { LabelList, RadialBar, RadialBarChart } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const title = "A radial chart with a label";

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

const ChartRadialLabel = () => (
  <div className="w-full max-w-xl rounded-md border bg-background p-4">
    <ChartContainer
      className="mx-auto aspect-square max-h-[250px]"
      config={chartConfig}
    >
      <RadialBarChart
        data={chartData}
        endAngle={380}
        innerRadius={30}
        outerRadius={110}
        startAngle={-90}
      >
        <ChartTooltip
          content={<ChartTooltipContent hideLabel nameKey="browser" />}
          cursor={false}
        />
        <RadialBar background dataKey="visitors">
          <LabelList
            className="fill-white capitalize mix-blend-luminosity"
            dataKey="browser"
            fontSize={11}
            position="insideStart"
          />
        </RadialBar>
      </RadialBarChart>
    </ChartContainer>
  </div>
);

export default ChartRadialLabel;
