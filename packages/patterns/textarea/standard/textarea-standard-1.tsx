import { Textarea } from "@/components/ui/textarea";

export const title = "Simple Textarea";

const Example = () => (
  <Textarea
    className="w-full max-w-md bg-background"
    placeholder="Type your message here..."
  />
);

export default Example;
