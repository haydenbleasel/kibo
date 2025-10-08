"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export const title = "Top Left Position";

const Example = () => (
  <Button
    onClick={() =>
      toast("This is a toast", {
        position: "top-left",
      })
    }
    variant="outline"
  >
    Show Toast
  </Button>
);

export default Example;
