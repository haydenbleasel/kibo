"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const title = "A bar chart with a custom label";

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
    color: "var(--chart-2)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
  label: {
    color: "var(--background)",
  },
} satisfies ChartConfig;

const ChartBarLabelCustom = () => (
  <div className="w-full max-w-xl rounded-md border bg-background p-4">
    <ChartContainer config={chartConfig}>
      <BarChart
        accessibilityLayer
        data={chartData}
        layout="vertical"
        margin={{
          right: 16,
        }}
      >
        <CartesianGrid horizontal={false} />
        <YAxis
          axisLine={false}
          dataKey="month"
          hide
          tickFormatter={(value) => value.slice(0, 3)}
          tickLine={false}
          tickMargin={10}
          type="category"
        />
        <XAxis dataKey="desktop" hide type="number" />
        <ChartTooltip
          content={<ChartTooltipContent indicator="line" />}
          cursor={false}
        />
        <Bar
          dataKey="desktop"
          fill="var(--color-desktop)"
          layout="vertical"
          radius={4}
        >
          <LabelList
            className="fill-(--color-label)"
            dataKey="month"
            fontSize={12}
            offset={8}
            position="insideLeft"
          />
          <LabelList
            className="fill-foreground"
            dataKey="desktop"
            fontSize={12}
            offset={8}
            position="right"
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  </div>
);

export default ChartBarLabelCustom;
