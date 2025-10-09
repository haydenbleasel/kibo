export const title = "Gradient Separator";

const Example = () => (
  <div className="space-y-4">
    <p className="text-sm">Above</p>
    <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
    <p className="text-sm">Below</p>
  </div>
);

export default Example;
