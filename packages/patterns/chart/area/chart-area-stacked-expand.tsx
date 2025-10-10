"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const title = "A stacked area chart with expand stacking";

const chartData = [
  { month: "January", desktop: 186, mobile: 80, other: 45 },
  { month: "February", desktop: 305, mobile: 200, other: 100 },
  { month: "March", desktop: 237, mobile: 120, other: 150 },
  { month: "April", desktop: 73, mobile: 190, other: 50 },
  { month: "May", desktop: 209, mobile: 130, other: 100 },
  { month: "June", desktop: 214, mobile: 140, other: 160 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
  other: {
    label: "Other",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

const ChartAreaStackedExpand = () => (
  <div className="w-full max-w-xl rounded-md border bg-background p-4">
    <ChartContainer config={chartConfig}>
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
          top: 12,
        }}
        stackOffset="expand"
      >
        <CartesianGrid vertical={false} />
        <XAxis
          axisLine={false}
          dataKey="month"
          tickFormatter={(value) => value.slice(0, 3)}
          tickLine={false}
          tickMargin={8}
        />
        <ChartTooltip
          content={<ChartTooltipContent indicator="line" />}
          cursor={false}
        />
        <Area
          dataKey="other"
          fill="var(--color-other)"
          fillOpacity={0.1}
          stackId="a"
          stroke="var(--color-other)"
          type="natural"
        />
        <Area
          dataKey="mobile"
          fill="var(--color-mobile)"
          fillOpacity={0.4}
          stackId="a"
          stroke="var(--color-mobile)"
          type="natural"
        />
        <Area
          dataKey="desktop"
          fill="var(--color-desktop)"
          fillOpacity={0.4}
          stackId="a"
          stroke="var(--color-desktop)"
          type="natural"
        />
      </AreaChart>
    </ChartContainer>
  </div>
);

export default ChartAreaStackedExpand;
