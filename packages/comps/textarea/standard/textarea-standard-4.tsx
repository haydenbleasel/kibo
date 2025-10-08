import { Textarea } from "@/components/ui/textarea";

export const title = "Short Textarea";

const Example = () => (
  <Textarea
    className="min-h-0 w-full max-w-md bg-background"
    placeholder="Shorter textarea"
    rows={3}
  />
);

export default Example;
