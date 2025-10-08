import { Progress } from "@/components/ui/progress";

export const title = "With Label Below";

const Example = () => {
  const value = 80;
  return (
    <div className="w-full max-w-md space-y-2">
      <Progress value={value} />
      <span className="text-muted-foreground text-sm">Almost there!</span>
    </div>
  );
};

export default Example;
