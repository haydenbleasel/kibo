"use client";

import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  BarChart,
  DollarSign,
  TrendingUp,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const title = "Dashboard-style with Stats";

const stats = [
  {
    icon: Activity,
    value: "2,543",
    label: "Active Users",
    trend: { direction: "up", value: "12%" },
  },
  {
    icon: DollarSign,
    value: "$12.5k",
    label: "Revenue",
    trend: { direction: "up", value: "8%" },
  },
  {
    icon: TrendingUp,
    value: "142",
    label: "Conversions",
    trend: { direction: "up", value: "23%" },
  },
  {
    icon: Users,
    value: "1,234",
    label: "Bounce Rate",
    trend: { direction: "down", value: "3%" },
  },
];

const reports: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: BarChart,
    title: "Overview",
    description: "Key metrics and trends",
  },
  {
    icon: TrendingUp,
    title: "Performance",
    description: "Detailed performance analysis",
  },
  {
    icon: Users,
    title: "Audience",
    description: "User demographics and behavior",
  },
];

const customReports = [
  {
    title: "Sales Funnel",
    description: "Track conversion stages",
  },
  {
    title: "Cohort Analysis",
    description: "User retention over time",
  },
  {
    title: "A/B Test Results",
    description: "Experiment outcomes",
  },
];

const Example = () => (
  <div className="pr-[50vw] pb-[50vh]">
    <div className="w-full max-w-md rounded-md border bg-background p-px">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Analytics</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[700px] p-6">
                <div className="mb-6 grid grid-cols-4 gap-4">
                  {stats.map((stat) => {
                    const Icon = stat.icon;
                    const TrendIcon =
                      stat.trend.direction === "up"
                        ? ArrowUpRight
                        : ArrowDownRight;
                    return (
                      <div
                        className="rounded-lg border bg-card p-4"
                        key={stat.label}
                      >
                        <div className="flex items-center justify-between">
                          <Icon className="h-4 w-4 text-muted-foreground" />
                          <Badge
                            className="gap-1"
                            variant={
                              stat.trend.direction === "up"
                                ? "secondary"
                                : "destructive"
                            }
                          >
                            <TrendIcon className="h-3 w-3" />
                            {stat.trend.value}
                          </Badge>
                        </div>
                        <div className="mt-3">
                          <div className="font-bold text-2xl">{stat.value}</div>
                          <p className="text-muted-foreground text-xs">
                            {stat.label}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="mb-3 font-semibold text-sm">Reports</h4>
                    <div className="space-y-2">
                      {reports.map((report) => {
                        const Icon = report.icon;
                        return (
                          <NavigationMenuLink
                            className="flex flex-row items-start gap-2"
                            href="#"
                            key={report.title}
                          >
                            <Icon className="mt-1 size-4" />
                            <div className="flex-1">
                              <span className="block font-medium">
                                {report.title}
                              </span>
                              <span className="text-muted-foreground">
                                {report.description}
                              </span>
                            </div>
                          </NavigationMenuLink>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-3 font-semibold text-sm">
                      Custom Reports
                    </h4>
                    <div className="space-y-2">
                      {customReports.map((report) => (
                        <NavigationMenuLink href="#" key={report.title}>
                          <span className="block font-medium">
                            {report.title}
                          </span>
                          <span className="block text-muted-foreground">
                            {report.description}
                          </span>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </div>
);

export default Example;
