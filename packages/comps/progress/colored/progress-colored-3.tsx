import { Progress } from "@/components/ui/progress";

export const title = "Danger";

const Example = () => (
  <Progress
    className="w-full max-w-md bg-red-200 [&>[data-slot=progress-indicator]]:bg-red-500"
    value={25}
  />
);

export default Example;
