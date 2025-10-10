"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export const title = "Toast with Custom Duration";

const Example = () => (
  <Button
    onClick={() =>
      toast("This toast will stay for 10 seconds", {
        duration: 10_000,
      })
    }
    variant="outline"
  >
    Show Toast
  </Button>
);

export default Example;
