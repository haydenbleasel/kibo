"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export const title = "Date Selector";

const Example = () => {
  const [period, setPeriod] = useState("today");

  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button
          onClick={() => setPeriod("today")}
          size="sm"
          variant={period === "today" ? "default" : "outline"}
        >
          Today
        </Button>
        <Button
          onClick={() => setPeriod("yesterday")}
          size="sm"
          variant={period === "yesterday" ? "default" : "outline"}
        >
          Yesterday
        </Button>
        <Button
          onClick={() => setPeriod("last7days")}
          size="sm"
          variant={period === "last7days" ? "default" : "outline"}
        >
          Last 7 Days
        </Button>
        <Button
          onClick={() => setPeriod("last30days")}
          size="sm"
          variant={period === "last30days" ? "default" : "outline"}
        >
          Last 30 Days
        </Button>
        <Button
          onClick={() => setPeriod("custom")}
          size="sm"
          variant={period === "custom" ? "default" : "outline"}
        >
          Custom
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button
          onClick={() => setPeriod("thisWeek")}
          size="sm"
          variant={period === "thisWeek" ? "default" : "outline"}
        >
          This Week
        </Button>
        <Button
          onClick={() => setPeriod("thisMonth")}
          size="sm"
          variant={period === "thisMonth" ? "default" : "outline"}
        >
          This Month
        </Button>
        <Button
          onClick={() => setPeriod("thisYear")}
          size="sm"
          variant={period === "thisYear" ? "default" : "outline"}
        >
          This Year
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Example;
