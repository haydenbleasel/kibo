"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export const title = "Error Toast";

const Example = () => (
  <Button onClick={() => toast.error("Something went wrong")} variant="outline">
    Show Error
  </Button>
);

export default Example;
