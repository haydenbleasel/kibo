import { Progress } from "@/components/ui/progress";

export const title = "Success";

const Example = () => (
  <Progress
    className="w-full max-w-md bg-green-200 [&>[data-slot=progress-indicator]]:bg-green-500"
    value={70}
  />
);

export default Example;
