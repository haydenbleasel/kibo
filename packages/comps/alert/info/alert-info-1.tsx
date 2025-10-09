import { Alert, AlertTitle } from "@/components/ui/alert";

export const title = "Info with Title";

const Example = () => (
  <Alert className="w-full max-w-lg border-info/80 bg-info/5 text-info">
    <AlertTitle>Info</AlertTitle>
  </Alert>
);

export default Example;
