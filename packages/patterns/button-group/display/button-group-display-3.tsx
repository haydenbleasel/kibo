"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export const title = "Timeline Controls";

const Example = () => {
  const [timeline, setTimeline] = useState("week");

  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button
          onClick={() => setTimeline("day")}
          size="sm"
          variant={timeline === "day" ? "default" : "outline"}
        >
          Day
        </Button>
        <Button
          onClick={() => setTimeline("week")}
          size="sm"
          variant={timeline === "week" ? "default" : "outline"}
        >
          Week
        </Button>
        <Button
          onClick={() => setTimeline("month")}
          size="sm"
          variant={timeline === "month" ? "default" : "outline"}
        >
          Month
        </Button>
        <Button
          onClick={() => setTimeline("year")}
          size="sm"
          variant={timeline === "year" ? "default" : "outline"}
        >
          Year
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button
          onClick={() => setTimeline("1h")}
          size="sm"
          variant={timeline === "1h" ? "default" : "outline"}
        >
          1H
        </Button>
        <Button
          onClick={() => setTimeline("24h")}
          size="sm"
          variant={timeline === "24h" ? "default" : "outline"}
        >
          24H
        </Button>
        <Button
          onClick={() => setTimeline("7d")}
          size="sm"
          variant={timeline === "7d" ? "default" : "outline"}
        >
          7D
        </Button>
        <Button
          onClick={() => setTimeline("30d")}
          size="sm"
          variant={timeline === "30d" ? "default" : "outline"}
        >
          30D
        </Button>
        <Button
          onClick={() => setTimeline("all")}
          size="sm"
          variant={timeline === "all" ? "default" : "outline"}
        >
          All
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Example;
