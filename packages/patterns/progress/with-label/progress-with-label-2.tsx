import { Progress } from "@/components/ui/progress";

export const title = "With Label Above";

const Example = () => {
  const value = 45;
  return (
    <div className="w-full max-w-md space-y-2">
      <span className="font-medium text-sm">Uploading...</span>
      <Progress value={value} />
    </div>
  );
};

export default Example;
