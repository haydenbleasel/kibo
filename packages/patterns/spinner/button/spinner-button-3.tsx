import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export const title = "Loading Icon Button";

const Example = () => (
  <Button disabled size="icon">
    <Spinner />
  </Button>
);

export default Example;
