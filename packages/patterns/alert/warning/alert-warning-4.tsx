import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export const title = "Warning with Title, Description, and Action";

const Example = () => (
  <Alert className="w-full max-w-lg border-warning/80 bg-warning/5 text-warning">
    <div className="col-span-2 flex items-center justify-between gap-4">
      <div className="flex flex-col gap-0.5">
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription className="text-warning/80">
          This action may have unintended consequences. Please proceed with
          caution.
        </AlertDescription>
      </div>
      <div className="flex shrink-0 gap-2">
        <Button
          className="bg-warning text-white hover:bg-warning/90"
          size="sm"
          variant="default"
        >
          Proceed
        </Button>
        <Button size="sm" variant="outline">
          Cancel
        </Button>
      </div>
    </div>
  </Alert>
);

export default Example;
