import { Progress } from "@/components/ui/progress";

export const title = "Gradient";

const Example = () => (
  <Progress
    value={65}
    className="w-full max-w-md [&>div]:bg-purple-500/20 [&>[data-slot=progress-indicator]]:bg-gradient-to-r [&>[data-slot=progress-indicator]]:from-blue-500 [&>[data-slot=progress-indicator]]:to-purple-500"
  />
);

export default Example;
