import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export const title = "Info with Title and Action";

const Example = () => (
  <Alert className="w-full max-w-lg border-info/80 bg-info/5 text-info">
    <div className="col-span-2 flex items-center justify-between gap-4">
      <AlertTitle>Info</AlertTitle>
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
