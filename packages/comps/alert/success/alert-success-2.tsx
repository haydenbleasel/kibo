import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const title = "Success with Title and Description";

const Example = () => (
  <Alert className="w-full max-w-lg border-success/80 bg-success/5 text-success">
    <AlertTitle>Success</AlertTitle>
    <AlertDescription className="text-success/80">
      Your changes have been saved successfully.
    </AlertDescription>
  </Alert>
);

export default Example;
