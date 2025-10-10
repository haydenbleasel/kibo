import { Progress } from "@/components/ui/progress";

export const title = "Warning";

const Example = () => (
  <Progress
    className="w-full max-w-md bg-yellow-200 [&>[data-slot=progress-indicator]]:bg-yellow-500"
    value={50}
  />
);

export default Example;
