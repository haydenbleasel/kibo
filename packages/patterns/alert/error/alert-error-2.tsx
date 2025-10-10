import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const title = "Error with Title and Description";

const Example = () => (
  <Alert className="w-full max-w-lg border-destructive/80 bg-destructive/5 text-destructive">
    <AlertTitle>Error</AlertTitle>
    <AlertDescription className="text-destructive/80">
      There was a problem processing your request. Please try again.
    </AlertDescription>
  </Alert>
);

export default Example;
