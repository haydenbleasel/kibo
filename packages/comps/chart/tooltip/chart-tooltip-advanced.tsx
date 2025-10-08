"use client";

import { Bar, BarChart, XAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const title = "Tooltip - Advanced";

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

const ChartTooltipAdvanced = () => (
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
              className="w-[180px]"
              formatter={(value, name, item, index) => (
                <>
                  <div
                    className="h-2.5 w-2.5 shrink-0 rounded-[2px] bg-(--color-bg)"
                    style={
                      {
                        "--color-bg": `var(--color-${name})`,
                      } as React.CSSProperties
                    }
                  />
                  {chartConfig[name as keyof typeof chartConfig]?.label || name}
                  <div className="ml-auto flex items-baseline gap-0.5 font-medium font-mono text-foreground tabular-nums">
                    {value}
                    <span className="font-normal text-muted-foreground">
                      kcal
                    </span>
                  </div>
                  {/* Add this after the last item */}
                  {index === 1 && (
                    <div className="mt-1.5 flex basis-full items-center border-t pt-1.5 font-medium text-foreground text-xs">
                      Total
                      <div className="ml-auto flex items-baseline gap-0.5 font-medium font-mono text-foreground tabular-nums">
                        {item.payload.running + item.payload.swimming}
                        <span className="font-normal text-muted-foreground">
                          kcal
                        </span>
                      </div>
                    </div>
                  )}
                </>
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

export default ChartTooltipAdvanced;
