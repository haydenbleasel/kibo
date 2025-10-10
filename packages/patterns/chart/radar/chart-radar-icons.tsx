"use client";

import { ArrowDownFromLine, ArrowUpFromLine } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const title = "A radar chart with icons";

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
    icon: ArrowDownFromLine,
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
    icon: ArrowUpFromLine,
  },
} satisfies ChartConfig;

const ChartRadarIcons = () => (
  <div className="w-full max-w-xl rounded-md border bg-background p-4">
    <ChartContainer
      className="mx-auto aspect-square max-h-[250px]"
      config={chartConfig}
    >
      <RadarChart
        data={chartData}
        margin={{
          top: -40,
          bottom: -10,
        }}
      >
        <ChartTooltip
          content={<ChartTooltipContent indicator="line" />}
          cursor={false}
        />
        <PolarAngleAxis dataKey="month" />
        <PolarGrid />
        <Radar
          dataKey="desktop"
          fill="var(--color-desktop)"
          fillOpacity={0.6}
        />
        <Radar dataKey="mobile" fill="var(--color-mobile)" />
        <ChartLegend className="mt-8" content={<ChartLegendContent />} />
      </RadarChart>
    </ChartContainer>
  </div>
);

export default ChartRadarIcons;
