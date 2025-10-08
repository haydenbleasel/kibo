import { Progress } from "@/components/ui/progress";

export const title = "Multi-line Label";

const Example = () => {
  const value = 35;
  return (
    <div className="w-full max-w-md space-y-2">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium">Project Setup</p>
          <p className="text-xs text-muted-foreground">Installing dependencies</p>
        </div>
        <span className="text-sm font-medium">{value}%</span>
      </div>
      <Progress value={value} />
    </div>
  );
};

export default Example;
