import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export const title = "Loading Small Button";

const Example = () => (
  <Button disabled size="sm">
    <Spinner className="size-3" />
    Please Wait
  </Button>
);

export default Example;
