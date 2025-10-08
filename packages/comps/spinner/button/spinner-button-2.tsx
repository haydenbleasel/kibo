import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export const title = "Loading Outline Button";

const Example = () => (
  <Button disabled variant="outline">
    <Spinner />
    Processing
  </Button>
);

export default Example;
