"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export const title = "Non-Dismissible Toast";

const Example = () => (
  <Button
    onClick={() =>
      toast("This toast cannot be dismissed", {
        dismissible: false,
        duration: 5000,
      })
    }
    variant="outline"
  >
    Show Toast
  </Button>
);

export default Example;
