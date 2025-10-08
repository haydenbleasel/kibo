"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export const title = "Priority Selector";

const Example = () => {
  const [priority, setPriority] = useState("medium");

  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button
          onClick={() => setPriority("low")}
          size="sm"
          variant={priority === "low" ? "default" : "outline"}
        >
          Low
        </Button>
        <Button
          onClick={() => setPriority("medium")}
          size="sm"
          variant={priority === "medium" ? "default" : "outline"}
        >
          Medium
        </Button>
        <Button
          onClick={() => setPriority("high")}
          size="sm"
          variant={priority === "high" ? "default" : "outline"}
        >
          High
        </Button>
        <Button
          onClick={() => setPriority("urgent")}
          size="sm"
          variant={priority === "urgent" ? "default" : "outline"}
        >
          Urgent
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button
          onClick={() => setPriority("p1")}
          size="sm"
          variant={priority === "p1" ? "default" : "outline"}
        >
          P1
        </Button>
        <Button
          onClick={() => setPriority("p2")}
          size="sm"
          variant={priority === "p2" ? "default" : "outline"}
        >
          P2
        </Button>
        <Button
          onClick={() => setPriority("p3")}
          size="sm"
          variant={priority === "p3" ? "default" : "outline"}
        >
          P3
        </Button>
        <Button
          onClick={() => setPriority("p4")}
          size="sm"
          variant={priority === "p4" ? "default" : "outline"}
        >
          P4
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Example;
