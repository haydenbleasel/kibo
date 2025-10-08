"use client";

import { PolarAngleAxis, Radar, RadarChart } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const title = "A radar chart with no grid";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 273 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

const ChartRadarGridNone = () => (
  <div className="w-full max-w-xl rounded-md border bg-background p-4">
    <ChartContainer
      className="mx-auto aspect-square max-h-[250px]"
      config={chartConfig}
    >
      <RadarChart data={chartData}>
        <ChartTooltip
          content={<ChartTooltipContent hideLabel />}
          cursor={false}
        />
        <PolarAngleAxis dataKey="month" />
        <Radar
          dataKey="desktop"
          dot={{
            r: 4,
            fillOpacity: 1,
          }}
          fill="var(--color-desktop)"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ChartContainer>
  </div>
);

export default ChartRadarGridNone;
