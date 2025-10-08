"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export const title = "Top Center Position";

const Example = () => (
  <Button
    onClick={() =>
      toast("This is a toast", {
        position: "top-center",
      })
    }
    variant="outline"
  >
    Show Toast
  </Button>
);

export default Example;
