"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export const title = "Segmented Control";

const Example = () => {
  const [tab, setTab] = useState("overview");
  const [period, setPeriod] = useState("week");

  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup className="w-fit">
        <Button
          onClick={() => setTab("overview")}
          size="sm"
          variant={tab === "overview" ? "default" : "ghost"}
        >
          Overview
        </Button>
        <Button
          onClick={() => setTab("analytics")}
          size="sm"
          variant={tab === "analytics" ? "default" : "ghost"}
        >
          Analytics
        </Button>
        <Button
          onClick={() => setTab("reports")}
          size="sm"
          variant={tab === "reports" ? "default" : "ghost"}
        >
          Reports
        </Button>
        <Button
          onClick={() => setTab("settings")}
          size="sm"
          variant={tab === "settings" ? "default" : "ghost"}
        >
          Settings
        </Button>
      </ButtonGroup>
      <ButtonGroup className="w-fit">
        <Button
          onClick={() => setPeriod("day")}
          size="sm"
          variant={period === "day" ? "default" : "ghost"}
        >
          Day
        </Button>
        <Button
          onClick={() => setPeriod("week")}
          size="sm"
          variant={period === "week" ? "default" : "ghost"}
        >
          Week
        </Button>
        <Button
          onClick={() => setPeriod("month")}
          size="sm"
          variant={period === "month" ? "default" : "ghost"}
        >
          Month
        </Button>
        <Button
          onClick={() => setPeriod("year")}
          size="sm"
          variant={period === "year" ? "default" : "ghost"}
        >
          Year
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Example;
