"use client";

import { Bar, BarChart, CartesianGrid, Cell, LabelList } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const title = "A bar chart with negative values";

const chartData = [
  { month: "January", visitors: 186 },
  { month: "February", visitors: 205 },
  { month: "March", visitors: -207 },
  { month: "April", visitors: 173 },
  { month: "May", visitors: -209 },
  { month: "June", visitors: 214 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
} satisfies ChartConfig;

const ChartBarNegative = () => (
  <div className="w-full max-w-xl rounded-md border bg-background p-4">
    <ChartContainer config={chartConfig}>
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <ChartTooltip
          content={<ChartTooltipContent hideIndicator hideLabel />}
          cursor={false}
        />
        <Bar dataKey="visitors">
          <LabelList dataKey="month" fillOpacity={1} position="top" />
          {chartData.map((item) => (
            <Cell
              fill={item.visitors > 0 ? "var(--chart-1)" : "var(--chart-2)"}
              key={item.month}
            />
          ))}
        </Bar>
      </BarChart>
    </ChartContainer>
  </div>
);

export default ChartBarNegative;
