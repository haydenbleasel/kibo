"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export const title = "Filter Chips";

const Example = () => {
  const [filters, setFilters] = useState<string[]>(["all"]);

  const toggleFilter = (filter: string) => {
    if (filter === "all") {
      setFilters(["all"]);
    } else {
      const newFilters = filters.includes(filter)
        ? filters.filter((f) => f !== filter)
        : [...filters.filter((f) => f !== "all"), filter];
      setFilters(newFilters.length === 0 ? ["all"] : newFilters);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button
          onClick={() => toggleFilter("all")}
          size="sm"
          variant={filters.includes("all") ? "default" : "outline"}
        >
          All
        </Button>
        <Button
          onClick={() => toggleFilter("active")}
          size="sm"
          variant={filters.includes("active") ? "default" : "outline"}
        >
          Active
        </Button>
        <Button
          onClick={() => toggleFilter("pending")}
          size="sm"
          variant={filters.includes("pending") ? "default" : "outline"}
        >
          Pending
        </Button>
        <Button
          onClick={() => toggleFilter("completed")}
          size="sm"
          variant={filters.includes("completed") ? "default" : "outline"}
        >
          Completed
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button
          onClick={() => toggleFilter("bug")}
          size="sm"
          variant={filters.includes("bug") ? "default" : "outline"}
        >
          Bug
        </Button>
        <Button
          onClick={() => toggleFilter("feature")}
          size="sm"
          variant={filters.includes("feature") ? "default" : "outline"}
        >
          Feature
        </Button>
        <Button
          onClick={() => toggleFilter("enhancement")}
          size="sm"
          variant={filters.includes("enhancement") ? "default" : "outline"}
        >
          Enhancement
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Example;
