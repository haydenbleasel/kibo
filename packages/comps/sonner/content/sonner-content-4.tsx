"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export const title = "Toast with Multi-line Content";

const Example = () => (
  <Button
    onClick={() =>
      toast.success("Profile updated successfully", {
        description:
          "Your profile has been updated with the latest information. All changes are now live and visible to other users.",
      })
    }
    variant="outline"
  >
    Show Toast
  </Button>
);

export default Example;
