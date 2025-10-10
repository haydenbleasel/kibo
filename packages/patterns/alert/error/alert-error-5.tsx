import { CircleX } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export const title = "Error with Everything";

const Example = () => (
  <Alert className="w-full max-w-lg flex flex-row items-start gap-3 border-destructive/80 bg-destructive/5 text-destructive">
    <CircleX className="size-4 shrink-0 translate-y-0.5 text-destructive/60" />
    <div className="flex flex-1 items-start justify-between gap-4">
      <div className="flex flex-col gap-0.5">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription className="text-destructive/80">
          There was a problem processing your request. Please try again later.
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
