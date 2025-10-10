import { Alert, AlertTitle } from "@/components/ui/alert";

export const title = "Warning with Title";

const Example = () => (
  <Alert className="w-full max-w-lg border-warning/80 bg-warning/5 text-warning">
    <AlertTitle>Warning</AlertTitle>
  </Alert>
);

export default Example;
