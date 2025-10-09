import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export const title = "Standard with Title, Description, and Action";

const Example = () => (
  <Alert className="w-full max-w-lg">
    <div className="col-span-2 flex items-center justify-between gap-4">
      <div className="flex flex-col gap-0.5">
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>
          Your changes have been saved successfully.
        </AlertDescription>
      </div>
      <div className="flex shrink-0 gap-2">
        <Button size="sm" variant="default">
          View Details
        </Button>
        <Button size="sm" variant="outline">
          Dismiss
        </Button>
      </div>
    </div>
  </Alert>
);

export default Example;
