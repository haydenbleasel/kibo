"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export const title = "Status Selector";

const Example = () => {
  const [status, setStatus] = useState("todo");

  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button
          onClick={() => setStatus("todo")}
          size="sm"
          variant={status === "todo" ? "default" : "outline"}
        >
          To Do
        </Button>
        <Button
          onClick={() => setStatus("inProgress")}
          size="sm"
          variant={status === "inProgress" ? "default" : "outline"}
        >
          In Progress
        </Button>
        <Button
          onClick={() => setStatus("review")}
          size="sm"
          variant={status === "review" ? "default" : "outline"}
        >
          Review
        </Button>
        <Button
          onClick={() => setStatus("done")}
          size="sm"
          variant={status === "done" ? "default" : "outline"}
        >
          Done
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button
          onClick={() => setStatus("backlog")}
          size="sm"
          variant={status === "backlog" ? "default" : "outline"}
        >
          Backlog
        </Button>
        <Button
          onClick={() => setStatus("active")}
          size="sm"
          variant={status === "active" ? "default" : "outline"}
        >
          Active
        </Button>
        <Button
          onClick={() => setStatus("completed")}
          size="sm"
          variant={status === "completed" ? "default" : "outline"}
        >
          Completed
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Example;
