"use client";

import { CheckCircleIcon } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export const title = "Toast with Custom Icon";

const Example = () => (
  <Button
    onClick={() =>
      toast("Payment successful", {
        icon: <CheckCircleIcon className="size-4" />,
        description: "Your payment has been processed",
      })
    }
    variant="outline"
  >
    Show Toast
  </Button>
);

export default Example;
