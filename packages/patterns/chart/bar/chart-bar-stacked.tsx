"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const title = "A stacked bar chart with a legend";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
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
} satisfies ChartConfig;

const ChartBarStacked = () => (
  <div className="w-full max-w-xl rounded-md border bg-background p-4">
    <ChartContainer config={chartConfig}>
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          axisLine={false}
          dataKey="month"
          tickFormatter={(value) => value.slice(0, 3)}
          tickLine={false}
          tickMargin={10}
        />
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar
          dataKey="desktop"
          fill="var(--color-desktop)"
          radius={[0, 0, 4, 4]}
          stackId="a"
        />
        <Bar
          dataKey="mobile"
          fill="var(--color-mobile)"
          radius={[4, 4, 0, 0]}
          stackId="a"
        />
      </BarChart>
    </ChartContainer>
  </div>
);

export default ChartBarStacked;
