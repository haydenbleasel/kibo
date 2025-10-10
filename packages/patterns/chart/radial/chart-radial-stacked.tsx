"use client";

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const title = "A radial chart with stacked sections";

const chartData = [{ month: "january", desktop: 1260, mobile: 570 }];

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

const ChartRadialStacked = () => (
  <div className="w-full max-w-xl rounded-md border bg-background p-4">
    <ChartContainer
      className="mx-auto aspect-square w-full max-w-[250px]"
      config={chartConfig}
    >
      <RadialBarChart
        data={chartData}
        endAngle={180}
        innerRadius={80}
        outerRadius={130}
      >
        <ChartTooltip
          content={<ChartTooltipContent hideLabel />}
          cursor={false}
        />
        <PolarRadiusAxis axisLine={false} tick={false} tickLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text textAnchor="middle" x={viewBox.cx} y={viewBox.cy}>
                    <tspan
                      className="fill-foreground font-bold text-2xl"
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) - 16}
                    >
                      {totalVisitors.toLocaleString()}
                    </tspan>
                    <tspan
                      className="fill-muted-foreground"
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 4}
                    >
                      Visitors
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
        <RadialBar
          className="stroke-2 stroke-transparent"
          cornerRadius={5}
          dataKey="desktop"
          fill="var(--color-desktop)"
          stackId="a"
        />
        <RadialBar
          className="stroke-2 stroke-transparent"
          cornerRadius={5}
          dataKey="mobile"
          fill="var(--color-mobile)"
          stackId="a"
        />
      </RadialBarChart>
    </ChartContainer>
  </div>
);

export default ChartRadialStacked;
