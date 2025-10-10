import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const title = "Info with Title and Description";

const Example = () => (
  <Alert className="w-full max-w-lg border-info/80 bg-info/5 text-info">
    <AlertTitle>Info</AlertTitle>
    <AlertDescription className="text-info/80">
      This feature is currently in beta. Some functionality may be limited.
    </AlertDescription>
  </Alert>
);

export default Example;
