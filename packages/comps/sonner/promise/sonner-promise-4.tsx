"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export const title = "Loading Toast";

const Example = () => {
  const handleClick = () => {
    toast.loading("Processing your request...");
  };

  return (
    <Button onClick={handleClick} variant="outline">
      Show Loading
    </Button>
  );
};

export default Example;
