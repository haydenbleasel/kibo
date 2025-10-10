"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export const title = "Toast with Action and Cancel";

const Example = () => (
  <Button
    onClick={() =>
      toast("File will be deleted permanently", {
        action: {
          label: "Delete",
          onClick: () => toast.success("File deleted"),
        },
        cancel: {
          label: "Cancel",
          onClick: () => toast.info("Deletion cancelled"),
        },
      })
    }
    variant="outline"
  >
    Show Toast
  </Button>
);

export default Example;
