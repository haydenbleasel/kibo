"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export const title = "Basic Promise Toast";

const Example = () => {
  const handleClick = () => {
    const promise = new Promise((resolve) => {
      setTimeout(() => resolve({ name: "User data" }), 2000);
    });

    toast.promise(promise, {
      loading: "Loading...",
      success: "Data loaded successfully",
      error: "Failed to load data",
    });
  };

  return (
    <Button onClick={handleClick} variant="outline">
      Load Data
    </Button>
  );
};

export default Example;
