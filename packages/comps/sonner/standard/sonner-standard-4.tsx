"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export const title = "Warning Toast";

const Example = () => (
  <Button
    onClick={() => toast.warning("Your session will expire soon")}
    variant="outline"
  >
    Show Warning
  </Button>
);

export default Example;
