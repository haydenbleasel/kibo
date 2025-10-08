import { Progress } from "@/components/ui/progress";

export const title = "With Count";

const Example = () => {
  const current = 7;
  const total = 10;
  const value = (current / total) * 100;

  return (
    <div className="w-full max-w-md space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Tasks completed</span>
        <span className="font-medium">
          {current} of {total}
        </span>
      </div>
      <Progress value={value} />
    </div>
  );
};

export default Example;
