"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export const title = "Promise Toast with Data";

const Example = () => {
  const handleClick = () => {
    const promise = new Promise<{ name: string }>((resolve) => {
      setTimeout(() => resolve({ name: "John Doe" }), 2000);
    });

    toast.promise(promise, {
      loading: "Creating user...",
      success: (data) => `${data.name} has been added`,
      error: "Failed to create user",
    });
  };

  return (
    <Button onClick={handleClick} variant="outline">
      Create User
    </Button>
  );
};

export default Example;
