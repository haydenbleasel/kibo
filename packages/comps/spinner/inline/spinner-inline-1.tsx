import { Spinner } from "@/components/ui/spinner";

export const title = "Inline with Text";

const Example = () => (
  <div className="flex items-center gap-2">
    <Spinner />
    <span className="text-sm">Loading data...</span>
  </div>
);

export default Example;
