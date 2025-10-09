import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export const title = "Error with Title and Action";

const Example = () => (
  <Alert className="w-full max-w-lg border-destructive/80 bg-destructive/5 text-destructive">
    <div className="col-span-2 flex items-center justify-between gap-4">
      <AlertTitle>Error</AlertTitle>
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
