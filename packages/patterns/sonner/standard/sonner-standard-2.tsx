"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export const title = "Success Toast";

const Example = () => (
  <Button
    onClick={() => toast.success("Your changes have been saved")}
    variant="outline"
  >
    Show Success
  </Button>
);

export default Example;
