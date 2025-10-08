import { Textarea } from "@/components/ui/textarea";

export const title = "Disabled Textarea";

const Example = () => (
  <Textarea
    className="w-full max-w-md bg-background"
    disabled
    placeholder="This textarea is disabled"
  />
);

export default Example;
