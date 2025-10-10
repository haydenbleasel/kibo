"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export const title = "Top Right Position";

const Example = () => (
  <Button
    onClick={() =>
      toast("This is a toast", {
        position: "top-right",
      })
    }
    variant="outline"
  >
    Show Toast
  </Button>
);

export default Example;
