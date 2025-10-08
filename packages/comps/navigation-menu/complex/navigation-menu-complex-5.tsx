"use client";

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

const Example = () => (
  <div className="pb-[50vh]">
    <div className="w-full max-w-md rounded-md border bg-background p-px">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Analytics</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[700px] p-6">
                <div className="mb-6 grid grid-cols-4 gap-4">
                  <div className="rounded-lg border bg-card p-4">
                    <div className="flex items-center justify-between">
                      <Activity className="h-4 w-4 text-muted-foreground" />
                      <Badge className="gap-1" variant="secondary">
                        <ArrowUpRight className="h-3 w-3" />
                        12%
                      </Badge>
                    </div>
                    <div className="mt-3">
                      <div className="font-bold text-2xl">2,543</div>
                      <p className="text-muted-foreground text-xs">
                        Active Users
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-card p-4">
                    <div className="flex items-center justify-between">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <Badge className="gap-1" variant="secondary">
                        <ArrowUpRight className="h-3 w-3" />
                        8%
                      </Badge>
                    </div>
                    <div className="mt-3">
                      <div className="font-bold text-2xl">$12.5k</div>
                      <p className="text-muted-foreground text-xs">Revenue</p>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-card p-4">
                    <div className="flex items-center justify-between">
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                      <Badge className="gap-1" variant="secondary">
                        <ArrowUpRight className="h-3 w-3" />
                        23%
                      </Badge>
                    </div>
                    <div className="mt-3">
                      <div className="font-bold text-2xl">142</div>
                      <p className="text-muted-foreground text-xs">
                        Conversions
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-card p-4">
                    <div className="flex items-center justify-between">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <Badge className="gap-1" variant="destructive">
                        <ArrowDownRight className="h-3 w-3" />
                        3%
                      </Badge>
                    </div>
                    <div className="mt-3">
                      <div className="font-bold text-2xl">1,234</div>
                      <p className="text-muted-foreground text-xs">
                        Bounce Rate
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="mb-3 font-semibold text-sm">Reports</h4>
                    <div className="space-y-2">
                      <NavigationMenuLink href="#">
                        <BarChart className="h-4 w-4" />
                        <div className="flex-1">
                          <span className="font-medium">Overview</span>
                          <span className="text-muted-foreground">
                            Key metrics and trends
                          </span>
                        </div>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#">
                        <TrendingUp className="h-4 w-4" />
                        <div className="flex-1">
                          <span className="font-medium">Performance</span>
                          <span className="text-muted-foreground">
                            Detailed performance analysis
                          </span>
                        </div>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#">
                        <Users className="h-4 w-4" />
                        <div className="flex-1">
                          <span className="font-medium">Audience</span>
                          <span className="text-muted-foreground">
                            User demographics and behavior
                          </span>
                        </div>
                      </NavigationMenuLink>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-3 font-semibold text-sm">
                      Custom Reports
                    </h4>
                    <div className="space-y-2">
                      <NavigationMenuLink href="#">
                        <span className="font-medium">Sales Funnel</span>
                        <span className="text-muted-foreground">
                          Track conversion stages
                        </span>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#">
                        <span className="font-medium">Cohort Analysis</span>
                        <span className="text-muted-foreground">
                          User retention over time
                        </span>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#">
                        <span className="font-medium">A/B Test Results</span>
                        <span className="text-muted-foreground">
                          Experiment outcomes
                        </span>
                      </NavigationMenuLink>
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
