import { TriangleAlert } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export const title = "Warning with Everything";

const Example = () => (
  <Alert className="w-full max-w-lg flex flex-row items-start gap-3 border-warning/80 bg-warning/5 text-warning">
    <TriangleAlert className="size-4 shrink-0 translate-y-0.5 text-warning/60" />
    <div className="flex flex-1 items-start justify-between gap-4">
      <div className="flex flex-col gap-0.5">
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription className="text-warning/80">
          This action may have unintended consequences and cannot be undone.
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
