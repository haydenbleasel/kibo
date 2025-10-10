"use client";

import { Bar, BarChart, XAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const title = "Tooltip - Formatter";

const chartData = [
  { date: "2024-07-15", running: 450, swimming: 300 },
  { date: "2024-07-16", running: 380, swimming: 420 },
  { date: "2024-07-17", running: 520, swimming: 120 },
  { date: "2024-07-18", running: 140, swimming: 550 },
  { date: "2024-07-19", running: 600, swimming: 350 },
  { date: "2024-07-20", running: 480, swimming: 400 },
];

const chartConfig = {
  running: {
    label: "Running",
    color: "var(--chart-1)",
  },
  swimming: {
    label: "Swimming",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

const ChartTooltipFormatter = () => (
  <div className="w-full max-w-xl rounded-md border bg-background p-4">
    <ChartContainer config={chartConfig}>
      <BarChart accessibilityLayer data={chartData}>
        <XAxis
          axisLine={false}
          dataKey="date"
          tickFormatter={(value) =>
            new Date(value).toLocaleDateString("en-US", {
              weekday: "short",
            })
          }
          tickLine={false}
          tickMargin={10}
        />
        <Bar
          dataKey="running"
          fill="var(--color-running)"
          radius={[0, 0, 4, 4]}
          stackId="a"
        />
        <Bar
          dataKey="swimming"
          fill="var(--color-swimming)"
          radius={[4, 4, 0, 0]}
          stackId="a"
        />
        <ChartTooltip
          content={
            <ChartTooltipContent
              formatter={(value, name) => (
                <div className="flex min-w-[130px] items-center text-muted-foreground text-xs">
                  {chartConfig[name as keyof typeof chartConfig]?.label || name}
                  <div className="ml-auto flex items-baseline gap-0.5 font-medium font-mono text-foreground tabular-nums">
                    {value}
                    <span className="font-normal text-muted-foreground">
                      kcal
                    </span>
                  </div>
                </div>
              )}
              hideLabel
            />
          }
          cursor={false}
          defaultIndex={1}
        />
      </BarChart>
    </ChartContainer>
  </div>
);

export default ChartTooltipFormatter;
