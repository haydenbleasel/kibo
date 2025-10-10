import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const title = "Button with Left Icon";

const Example = () => (
  <Button className="gap-2">
    <Mail className="size-4" />
    Button
  </Button>
);

export default Example;
