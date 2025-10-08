import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export const title = "Loading Button";

const Example = () => (
  <Button disabled>
    <Spinner />
    Loading...
  </Button>
);

export default Example;
