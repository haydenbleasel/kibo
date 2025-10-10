"use client";

import { BarChart3Icon, LineChartIcon, PieChartIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export const title = "Chart Controls";

const Example = () => {
  const [chartType, setChartType] = useState("line");

  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button
          onClick={() => setChartType("line")}
          size="sm"
          variant={chartType === "line" ? "default" : "outline"}
        >
          <LineChartIcon />
          Line
        </Button>
        <Button
          onClick={() => setChartType("bar")}
          size="sm"
          variant={chartType === "bar" ? "default" : "outline"}
        >
          <BarChart3Icon />
          Bar
        </Button>
        <Button
          onClick={() => setChartType("pie")}
          size="sm"
          variant={chartType === "pie" ? "default" : "outline"}
        >
          <PieChartIcon />
          Pie
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button
          onClick={() => setChartType("line")}
          size="sm"
          variant={chartType === "line" ? "default" : "outline"}
        >
          <LineChartIcon />
        </Button>
        <Button
          onClick={() => setChartType("bar")}
          size="sm"
          variant={chartType === "bar" ? "default" : "outline"}
        >
          <BarChart3Icon />
        </Button>
        <Button
          onClick={() => setChartType("pie")}
          size="sm"
          variant={chartType === "pie" ? "default" : "outline"}
        >
          <PieChartIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Example;
