"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export const title = "Toast with Cancel Button";

const Example = () => (
  <Button
    onClick={() =>
      toast("Are you sure you want to continue?", {
        cancel: {
          label: "Cancel",
          onClick: () => toast.info("Action cancelled"),
        },
      })
    }
    variant="outline"
  >
    Show Toast
  </Button>
);

export default Example;
