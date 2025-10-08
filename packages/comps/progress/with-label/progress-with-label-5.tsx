import { Progress } from "@/components/ui/progress";

export const title = "Multi-line Label";

const Example = () => {
  const value = 35;
  return (
    <div className="w-full max-w-md space-y-2">
      <div className="flex items-start justify-between">
        <div>
          <p className="font-medium text-sm">Project Setup</p>
          <p className="text-muted-foreground text-xs">
            Installing dependencies
          </p>
        </div>
        <span className="font-medium text-sm">{value}%</span>
      </div>
      <Progress value={value} />
    </div>
  );
};

export default Example;
