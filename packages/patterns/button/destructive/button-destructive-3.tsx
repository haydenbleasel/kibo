import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const title = "Button with Right Icon";

const Example = () => (
  <Button className="gap-2" variant="destructive">
    Button
    <ArrowRight className="size-4" />
  </Button>
);

export default Example;
