import { Progress } from "@/components/ui/progress";

export const title = "Info";

const Example = () => (
  <Progress
    className="w-full max-w-md [&>[data-slot=progress-indicator]]:bg-blue-500 [&>div]:bg-blue-500/20"
    value={60}
  />
);

export default Example;
