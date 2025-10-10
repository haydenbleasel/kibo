"use client";

import { Activity } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const title = "A step area chart";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
    icon: Activity,
  },
} satisfies ChartConfig;

const ChartAreaStep = () => (
  <div className="w-full max-w-xl rounded-md border bg-background p-4">
    <ChartContainer config={chartConfig}>
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
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
          content={<ChartTooltipContent hideLabel />}
          cursor={false}
        />
        <Area
          dataKey="desktop"
          fill="var(--color-desktop)"
          fillOpacity={0.4}
          stroke="var(--color-desktop)"
          type="step"
        />
      </AreaChart>
    </ChartContainer>
  </div>
);

export default ChartAreaStep;
