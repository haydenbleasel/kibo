"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const title = "A radar chart with lines only";

const chartData = [
  { month: "January", desktop: 186, mobile: 160 },
  { month: "February", desktop: 185, mobile: 170 },
  { month: "March", desktop: 207, mobile: 180 },
  { month: "April", desktop: 173, mobile: 160 },
  { month: "May", desktop: 160, mobile: 190 },
  { month: "June", desktop: 174, mobile: 204 },
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

const ChartRadarLinesOnly = () => (
  <div className="w-full max-w-xl rounded-md border bg-background p-4">
    <ChartContainer
      className="mx-auto aspect-square max-h-[250px]"
      config={chartConfig}
    >
      <RadarChart data={chartData}>
        <ChartTooltip
          content={<ChartTooltipContent indicator="line" />}
          cursor={false}
        />
        <PolarAngleAxis dataKey="month" />
        <PolarGrid radialLines={false} />
        <Radar
          dataKey="desktop"
          fill="var(--color-desktop)"
          fillOpacity={0}
          stroke="var(--color-desktop)"
          strokeWidth={2}
        />
        <Radar
          dataKey="mobile"
          fill="var(--color-mobile)"
          fillOpacity={0}
          stroke="var(--color-mobile)"
          strokeWidth={2}
        />
      </RadarChart>
    </ChartContainer>
  </div>
);

export default ChartRadarLinesOnly;
