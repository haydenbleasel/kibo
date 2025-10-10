"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export const title = "Info Toast";

const Example = () => (
  <Button
    onClick={() => toast.info("New updates are available")}
    variant="outline"
  >
    Show Info
  </Button>
);

export default Example;
