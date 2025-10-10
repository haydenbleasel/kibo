"use client";

import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export const title = "Sort Controls";

const Example = () => {
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button
          onClick={() => setSortField("name")}
          size="sm"
          variant={sortField === "name" ? "default" : "outline"}
        >
          Name
        </Button>
        <Button
          onClick={() => setSortField("date")}
          size="sm"
          variant={sortField === "date" ? "default" : "outline"}
        >
          Date
        </Button>
        <Button
          onClick={() => setSortField("size")}
          size="sm"
          variant={sortField === "size" ? "default" : "outline"}
        >
          Size
        </Button>
        <Button
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          size="sm"
          variant="outline"
        >
          {sortOrder === "asc" ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button
          onClick={() => setSortField("price")}
          size="sm"
          variant={sortField === "price" ? "default" : "outline"}
        >
          Price
          {sortField === "price" &&
            (sortOrder === "asc" ? <ArrowUpIcon /> : <ArrowDownIcon />)}
        </Button>
        <Button
          onClick={() => setSortField("rating")}
          size="sm"
          variant={sortField === "rating" ? "default" : "outline"}
        >
          Rating
          {sortField === "rating" &&
            (sortOrder === "asc" ? <ArrowUpIcon /> : <ArrowDownIcon />)}
        </Button>
        <Button
          onClick={() => setSortField("popular")}
          size="sm"
          variant={sortField === "popular" ? "default" : "outline"}
        >
          Popular
          {sortField === "popular" &&
            (sortOrder === "asc" ? <ArrowUpIcon /> : <ArrowDownIcon />)}
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Example;
