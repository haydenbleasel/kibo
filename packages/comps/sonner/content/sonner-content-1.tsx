"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export const title = "Toast with Description";

const Example = () => (
  <Button
    onClick={() =>
      toast("Event has been created", {
        description: "Monday, January 3rd at 6:00pm",
      })
    }
    variant="outline"
  >
    Show Toast
  </Button>
);

export default Example;
