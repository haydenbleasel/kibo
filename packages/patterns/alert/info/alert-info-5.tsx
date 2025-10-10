import { Info } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export const title = "Info with Everything";

const Example = () => (
  <Alert className="w-full max-w-lg flex flex-row items-start gap-3 border-info/80 bg-info/5 text-info">
    <Info className="size-4 shrink-0 translate-y-0.5 text-info/60" />
    <div className="flex flex-1 items-start justify-between gap-4">
      <div className="flex flex-col gap-0.5">
        <AlertTitle>Info</AlertTitle>
        <AlertDescription className="text-info/80">
          This feature is currently in beta and new updates are being released
          regularly.
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
