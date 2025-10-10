import { Progress } from "@/components/ui/progress";

export const title = "Gradient";

const Example = () => (
  <Progress
    className="w-full max-w-md [&>[data-slot=progress-indicator]]:bg-gradient-to-r [&>[data-slot=progress-indicator]]:from-blue-500 [&>[data-slot=progress-indicator]]:to-purple-500 [&>div]:bg-purple-500/20"
    value={65}
  />
);

export default Example;
