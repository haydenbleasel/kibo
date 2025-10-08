import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const title = "Standard with Title and Description";

const Example = () => (
  <Alert>
    <AlertTitle>Success</AlertTitle>
    <AlertDescription>
      Your changes have been saved successfully.
    </AlertDescription>
  </Alert>
);

export default Example;
