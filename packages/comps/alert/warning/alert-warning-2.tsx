import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const title = "Warning with Title and Description";

const Example = () => (
  <Alert className="w-full max-w-lg border-warning/80 bg-warning/5 text-warning">
    <AlertTitle>Warning</AlertTitle>
    <AlertDescription className="text-warning/80">
      This action may have unintended consequences. Please proceed with caution.
    </AlertDescription>
  </Alert>
);

export default Example;
