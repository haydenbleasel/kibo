import { Progress } from "@/components/ui/progress";

export const title = "With Label Above";

const Example = () => {
  const value = 45;
  return (
    <div className="w-full max-w-md space-y-2">
      <span className="text-sm font-medium">Uploading...</span>
      <Progress value={value} />
    </div>
  );
};

export default Example;
