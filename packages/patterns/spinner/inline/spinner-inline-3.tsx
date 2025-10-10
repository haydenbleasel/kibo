import { Spinner } from "@/components/ui/spinner";

export const title = "Spinner After Text";

const Example = () => (
  <p className="flex items-center gap-2 text-sm">
    Processing your request
    <Spinner className="size-3" />
  </p>
);

export default Example;
