import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export const title = "Loading Secondary Button";

const Example = () => (
  <Button disabled variant="secondary">
    <Spinner />
    Saving Changes
  </Button>
);

export default Example;
