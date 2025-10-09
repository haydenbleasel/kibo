import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export const title = "Error with Title, Description, and Action";

const Example = () => (
  <Alert className="w-full max-w-lg border-destructive/80 bg-destructive/5 text-destructive">
    <div className="col-span-2 flex items-center justify-between gap-4">
      <div className="flex flex-col gap-0.5">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription className="text-destructive/80">
          There was a problem processing your request. Please try again.
        </AlertDescription>
      </div>
      <div className="flex shrink-0 gap-2">
        <Button size="sm" variant="destructive">
          Retry
        </Button>
        <Button size="sm" variant="outline">
          Dismiss
        </Button>
      </div>
    </div>
  </Alert>
);

export default Example;
