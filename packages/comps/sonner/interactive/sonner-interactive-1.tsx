"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export const title = "Toast with Action Button";

const Example = () => (
  <Button
    onClick={() =>
      toast("Event has been created", {
        action: {
          label: "Undo",
          onClick: () => toast.success("Action clicked"),
        },
      })
    }
    variant="outline"
  >
    Show Toast
  </Button>
);

export default Example;
