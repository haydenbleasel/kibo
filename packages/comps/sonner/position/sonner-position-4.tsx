"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export const title = "Bottom Left Position";

const Example = () => (
  <Button
    onClick={() =>
      toast("This is a toast", {
        position: "bottom-left",
      })
    }
    variant="outline"
  >
    Show Toast
  </Button>
);

export default Example;
