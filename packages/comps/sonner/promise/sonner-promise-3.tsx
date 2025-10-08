"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export const title = "Promise Toast with Error";

const Example = () => {
  const handleClick = () => {
    const promise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Network error")), 2000);
    });

    toast.promise(promise, {
      loading: "Saving changes...",
      success: "Changes saved successfully",
      error: (err) => `Error: ${err.message}`,
    });
  };

  return (
    <Button onClick={handleClick} variant="outline">
      Save Changes
    </Button>
  );
};

export default Example;
