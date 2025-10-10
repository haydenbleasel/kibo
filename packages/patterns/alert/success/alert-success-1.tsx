import { Alert, AlertTitle } from "@/components/ui/alert";

export const title = "Success with Title";

const Example = () => (
  <Alert className="w-full max-w-lg border-success/80 bg-success/5 text-success">
    <AlertTitle>Success</AlertTitle>
  </Alert>
);

export default Example;
