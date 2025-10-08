"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const title = "A radar chart with a custom label";

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

const ChartRadarLabelCustom = () => (
  <div className="w-full max-w-xl rounded-md border bg-background p-4">
    <ChartContainer
      className="mx-auto aspect-square max-h-[250px]"
      config={chartConfig}
    >
      <RadarChart
        data={chartData}
        margin={{
          top: 10,
          right: 10,
          bottom: 10,
          left: 10,
        }}
      >
        <ChartTooltip
          content={<ChartTooltipContent indicator="line" />}
          cursor={false}
        />
        <PolarAngleAxis
          dataKey="month"
          tick={({ x, y, textAnchor, value, index, ...props }) => {
            const data = chartData[index];

            return (
              <text
                fontSize={13}
                fontWeight={500}
                textAnchor={textAnchor}
                x={x}
                y={index === 0 ? y - 10 : y}
                {...props}
              >
                <tspan>{data.desktop}</tspan>
                <tspan className="fill-muted-foreground">/</tspan>
                <tspan>{data.mobile}</tspan>
                <tspan
                  className="fill-muted-foreground"
                  dy={"1rem"}
                  fontSize={12}
                  x={x}
                >
                  {data.month}
                </tspan>
              </text>
            );
          }}
        />

        <PolarGrid />
        <Radar
          dataKey="desktop"
          fill="var(--color-desktop)"
          fillOpacity={0.6}
        />
        <Radar dataKey="mobile" fill="var(--color-mobile)" />
      </RadarChart>
    </ChartContainer>
  </div>
);

export default ChartRadarLabelCustom;
