"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export const title = "Default Toast";

const Example = () => (
  <Button onClick={() => toast("Event has been created")} variant="outline">
    Show Toast
  </Button>
);

export default Example;
