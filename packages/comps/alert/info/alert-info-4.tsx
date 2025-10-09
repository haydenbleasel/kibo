import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export const title = "Info with Title, Description, and Action";

const Example = () => (
  <Alert className="w-full max-w-lg border-info/80 bg-info/5 text-info">
    <div className="col-span-2 flex items-center justify-between gap-4">
      <div className="flex flex-col gap-0.5">
        <AlertTitle>Info</AlertTitle>
        <AlertDescription className="text-info/80">
          This feature is currently in beta. Some functionality may be limited.
        </AlertDescription>
      </div>
      <div className="flex shrink-0 gap-2">
        <Button
          className="bg-info text-white hover:bg-info/90"
          size="sm"
          variant="default"
        >
          Learn More
        </Button>
        <Button size="sm" variant="outline">
          Dismiss
        </Button>
      </div>
    </div>
  </Alert>
);

export default Example;
